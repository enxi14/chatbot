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

const net = new brain.recurrent.LSTM();

const trainingData = [
    { input: 'hello', output: 'Hello there!' },
    { input: 'hi', output: 'Hi! How can I help you?' },
    { input: 'how are you', output: 'I am just a bot, but I am functioning well. How can I assist you?' },
    { input: 'bye', output: 'Goodbye! Have a great day!' },
];

net.train(trainingData, { iterations: 2000 });

function getBotResponse(userMessage) {
    const output = net.run(userMessage);
    if (output) {
    return output;
    } else {
    return 'I didn\'t quite understand that. Could you please rephrase your message?';
    }
}
});
