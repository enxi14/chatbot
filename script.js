// JavaScript code goes here
function sendMessage() {
  const userInput = document.getElementById('userInput');
  const chatbox = document.getElementById('chatbox');

  const userMessage = userInput.value;
  userInput.value = '';

  chatbox.innerHTML += '<div class="chat-message user-message">You: ' + userMessage + '</div>';

  const botResponse = 'Bot: Thanks for your message!';

  chatbox.innerHTML += '<div class="chat-message bot-message">' + botResponse + '</div>';

  chatbox.scrollTop = chatbox.scrollHeight;
}
