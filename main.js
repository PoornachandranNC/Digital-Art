// Simple example: handle form submission for the Message Page

document.querySelector('.message-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Message Sent Successfully!');
      // You can also use AJAX or Fetch API here to send the message data to a server
      // Reset form fields
      document.querySelector('.message-form').reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  