const responses = {
"hello": "Hello! How can I assist you today?",
"hi": "Hi there! What can I help you with?",
"how are you": "I'm just a bot, but I'm here to assist you. What do you need?",
"what's your name": "I'm just a chatbot, so I don't have a name. You can call me Chatbot!",
"bye": "Goodbye! If you have more questions in the future, feel free to ask.",
};

function sendMessage() {
const userInput = document.getElementById('userInput');
const chatbox = document.getElementById('chatbox');

const userMessage = userInput.value;
userInput.value = '';

chatbox.innerHTML += '<div class="chat-message user-message">You: ' + userMessage + '</div>';

  // Normalize user input and find a response
const botResponse = getBotResponse(userMessage.toLowerCase());

chatbox.innerHTML += '<div class="chat-message bot-message">Bot: ' + botResponse + '</div>';
chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(userInput) {
for (const key in responses) {
    if (userInput.includes(key)) {
    return responses[key];
    }
}

return "I'm not sure how to respond to that. Could you please rephrase your message?";
}
