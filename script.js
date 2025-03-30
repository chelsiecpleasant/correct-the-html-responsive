document.getElementById('slothImage').addEventListener('click', function() {
  var message = document.getElementById('message');
  message.classList.toggle('hidden');
  
  // Make the sloth move slightly when clicked
  var sloth = document.getElementById('slothImage');
  sloth.style.transform = 'translateX(50px)';
  
  // After animation, reset sloth position
  setTimeout(() => {
      sloth.style.transform = 'translateX(0)';
  }, 500);
});

