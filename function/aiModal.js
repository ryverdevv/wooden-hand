
// Get Elements
const aiModal = document.getElementById('aiModal');
const openAiModal = document.getElementById('openAiModal');
const closeAiModal = document.getElementById('closeAiModal');
const aiMessage = document.getElementById('aiMessage');

// Open Modal
openAiModal.addEventListener('click', function() {
    aiModal.classList.add('show');
});

// Close Modal
closeAiModal.addEventListener('click', function() {
    aiModal.classList.remove('show');
});

// Close when clicking outside
aiModal.addEventListener('click', function(event) {
    if (event.target === aiModal) {
        aiModal.classList.remove('show');
    }
});

// Suggestion Buttons
const suggestions = document.querySelectorAll('.suggestion');

suggestions.forEach(function(button) {
    button.addEventListener('click', function() {
        aiMessage.value = button.textContent.trim();
    });
});
