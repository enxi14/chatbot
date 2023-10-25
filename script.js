function sendMessage() {
const userInput = document.getElementById('userInput');
const chatbox = document.getElementById('chatbox');

const userMessage = userInput.value;
userInput.value = '';

chatbox.innerHTML += '<div class="chat-message user-message">You: ' + userMessage + '</div';

  // Respond to specific user input
const botResponse = getBotResponse(userMessage);

chatbox.innerHTML += '<div class="chat-message bot-message">Bot: ' + botResponse + '</div>';
chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(userInput) {
userInput = userInput.toLowerCase();

if (userInput.includes('hello') || userInput.includes('hi')) {
    return 'Hello there!';
} else if (userInput.includes('how are you')) {
    return 'I am just a bot, but I am functioning well. How can I assist you?';
} else if (userInput.includes('bye')) {
    return 'Goodbye! Have a great day!';
} else {
    return 'I didn\'t quite understand that. Could you please rephrase your message?';
}
}
