document.addEventListener('DOMContentLoaded', function() {
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', function() {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
    addMessage('You', userMessage, 'user-message');
    const botResponse = getBotResponse(userMessage.toLowerCase());
    addMessage('Bot', botResponse, 'bot-message');
    userInput.value = '';
    }
});

function addMessage(sender, message, messageClass) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('chat-message', messageClass);
    messageContainer.innerHTML = sender + ': ' + message;
    chatbox.appendChild(messageContainer);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(userMessage) {
    if (userMessage.includes('hello') || userMessage.includes('hi')) {
    return 'Hello there!';
    } else if (userMessage.includes('how are you')) {
    return 'I am just a bot, but I am functioning well. How can I assist you?';
    } else if (userMessage.includes('bye')) {
    return 'Goodbye! Have a great day!';
    } else {
    return 'I didn\'t quite understand that. Could you please rephrase your message?';
    }
}
});