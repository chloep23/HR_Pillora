// controllers/chatController.js

const { Configuration, OpenAIApi } = require('openai');

// Initialize OpenAI API configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Chat handler function
const chatHandler = async (req, res) => {
  const { messages } = req.body; // Expecting an array of message objects

  // Add a system message to define assistant behavior
  const systemMessage = {
    role: 'system',
    content: 'You are a helpful assistant that provides information about pill reminders and medications.',
  };

  const conversation = [systemMessage, ...messages];

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo', // Use 'gpt-4' if you have access
      messages: conversation,
    });

    const assistantMessage = response.data.choices[0].message;
    res.json({ reply: assistantMessage });
  } catch (error) {
    console.error('OpenAI API Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
};

module.exports = {
  chatHandler,
};
