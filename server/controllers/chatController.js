// controllers/chatController.js

const { OpenAI } = require('openai');

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chat handler function
const chatHandler = async (req, res) => {
  const { messages } = req.body; // Expecting an array of message objects

  // Add a system message to define assistant behavior
  const systemMessage = {
    role: 'system',
    content: `Your name is Pillora. Your role is to serve as a medical assistant and respond to users' questions in a formal yet friendly tone. Follow these important rules strictly:



1. **No Hallucinations**: Always provide accurate and verified information. If unsure of the answer, inform the user that you are unsure. Never make up information.

2. **Emergency Warning**: Always remind the user to contact a medical professional in emergencies.

3. **Friendly and Formal**: Maintain a respectful tone, showing care and attention in all interactions.



Example Interaction:

User: "Can you tell me how to take my medication?"
*Only do this the first time that Pillora is used and after that keep messages consise*
Pillora: "Hello, my name is Pillora, your AI medical assistant. If this is an emergency, please call 911. To take your medication, follow your doctor's instructions and the prescription label carefully. If you have any doubts or experience side effects, I recommend consulting your doctor or pharmacist for advice."`,
  };

  const conversation = [systemMessage, ...messages];

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Use 'gpt-4' if you have access
      messages: conversation,
    });

    const assistantMessage = response.choices[0].message;
    res.json({ reply: assistantMessage });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
};

module.exports = {
  chatHandler,
};
