## Inspiration
Managing multiple medications can be overwhelming, leading to missed doses and adverse health effects. Approximately 66% of Americans take at least one prescription medication, averaging four per person. Forgetfulness—the leading cause of non-adherence—results in over 125,000 premature deaths and 4.5 million emergency room visits each year. This inspired us to develop Pillora, a mobile application aimed at simplifying medication management and enhancing user health outcomes.
## What it does
Pillora is a mobile application designed to help users manage their medication schedules effectively. It offers customizable reminders with personalized alerts for each medication. A key feature is the AI Chatbot Support, allowing users to engage with a chatbot for immediate assistance and doctor outreach. Additionally, Pillora provides up-to-date medication information through the FDA API. The app includes built-in tools tailored to different medication types, such as allergy pills, birth control pills, and antibiotics, ensuring a customized user experience.
## How we built it
We built Pillora using a React frontend and a Node.js with Express backend to ensure cross-platform compatibility and robust performance. Key technologies and methodologies include:

MongoDB: Secure and efficient database and API for the backend.
Tailwind CSS: Efficient and responsive UI design.
Axios: Handling HTTP requests between frontend and backend.
OpenAI API: Integrated for AI-powered chatbot functionality.
FDA API: Fetching and displaying the latest drug facts and information.
Redux: State management, ensuring a seamless user experience.
Agile Development: Employed iterative sprints to facilitate continuous improvement and adaptability.
## Challenges we ran into
During the development of Pillora, we faced several challenges. Seamlessly integrating multiple APIs, including OpenAI and the FDA API, required careful management of rate limits and ensuring data consistency. Implementing secure JWT-based authentication was crucial to protect user data and maintain authorized access. Developing reliable and timely real-time notifications across various devices and operating systems tested our ability to create consistent reminder systems. Additionally, selecting efficient and user-friendly frameworks without compromising reliability posed a significant challenge.
## Accomplishments that we're proud of
Successful Integration: Integrated customizable reminders, symptom tracking, and AI chatbot support into a single application.
Intuitive Interface: Created an accessible interface that caters to users with varying levels of tech proficiency.
API Incorporation: Efficiently incorporated the FDA API and OpenAI's chatbot, providing users with accurate drug information and instant support.
Scalable Architecture: Built a scalable architecture that can accommodate future features and an expanding user base.
## What we learned
Developing Pillora taught us invaluable lessons in API integration, ensuring smooth communication between our backend and services like OpenAI and the FDA API. We mastered state management in React, allowing efficient handling of real-time data and maintaining a seamless user experience. Tackling asynchronous operations enhanced our ability to implement robust error handling, while JWT-based authentication deepened our understanding of securing user data. Additionally, focusing on user-centric design underscored the importance of creating an intuitive and accessible interface.
## What's next for Pillora
Moving forward, Pillora plans to expand its medication categories to include vitamins and chronic condition medications, reaching a broader audience. We aim to enhance AI capabilities, enabling the chatbot to handle more complex queries and offer personalized health insights. Integration with wearable devices will allow real-time health metric monitoring, adjusting reminders based on user activity. Additionally, we intend to introduce multi-language support to make the app accessible globally and develop advanced analytics to help users track their medication adherence and health trends effectively. Finally, we aim to add a barcode scanner that links directly to OpenFDA, making initializing medications as quick and convenient as possible.