
// Card toggle functionality
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

// Scroll animation for sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Quiz functionality
document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', () => {
        const isCorrect = option.getAttribute('data-answer') === 'correct';
        const modal = document.getElementById('quiz-modal');
        const message = document.getElementById('modal-message');

        option.classList.add(isCorrect ? 'correct' : 'incorrect');
        message.textContent = isCorrect ? 'Correct! Well done! 🎉' : 'Incorrect. Try again! 🤔';
        modal.style.display = 'flex';

        // Reset quiz options after a delay
        setTimeout(() => {
            option.classList.remove(isCorrect ? 'correct' : 'incorrect');
        }, 2000);
    });
});

// Close modal
function closeModal() {
    document.getElementById('quiz-modal').style.display = 'none';
}

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// // ChemBot functionality
// let chemBotOpen = false;

// function toggleChemBot() {
//     const chatBox = document.getElementById('chembot-chat');
//     chemBotOpen = !chemBotOpen;
//     chatBox.style.display = chemBotOpen ? 'block' : 'none';
// }

// function sendChemBotMessage() {
//     const input = document.getElementById('chembot-input');
//     const message = input.value.trim();
//     if (message) {
//         addChemBotMessage(message, 'user');
//         input.value = '';

//         // Simulate bot response
//         setTimeout(() => {
//             const response = getChemBotResponse(message);
//             addChemBotMessage(response, 'bot');
//         }, 1000);
//     }
// }

// function handleChemBotEnter(event) {
//     if (event.key === 'Enter') {
//         sendChemBotMessage();
//     }
// }

// function addChemBotMessage(message, type) {
//     const messagesContainer = document.getElementById('chembot-messages');
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${type}-message`;
//     messageDiv.textContent = message;
//     messagesContainer.appendChild(messageDiv);
//     messagesContainer.scrollTop = messagesContainer.scrollHeight;
// }

// function getChemBotResponse(message) {
//     const lowercaseMessage = message.toLowerCase();

//     if (lowercaseMessage.includes('soap') || lowercaseMessage.includes('detergent')) {
//         return "Soaps contain surfactants like SLS that help remove dirt and oils. They work by reducing surface tension between water and oils! 🧼";
//     } else if (lowercaseMessage.includes('fluoride') || lowercaseMessage.includes('toothpaste')) {
//         return "Fluoride in toothpaste helps strengthen tooth enamel by promoting remineralization. It's one of the most effective ways to prevent tooth decay! 🦷";
//     } else if (lowercaseMessage.includes('bleach')) {
//         return "Bleach contains sodium hypochlorite, which kills germs by breaking down their cellular proteins. Always use in ventilated areas and never mix with other chemicals! ⚠️";
//     } else if (lowercaseMessage.includes('preservative')) {
//         return "Food preservatives like sodium benzoate prevent spoilage by stopping bacterial growth. They help keep our food safe and extend shelf life! 🥫";
//     } else if (lowercaseMessage.includes('aspirin') || lowercaseMessage.includes('pain')) {
//         return "Aspirin works by blocking enzymes that produce inflammation-causing chemicals called prostaglandins. Always follow dosage instructions! 💊";
//     } else if (lowercaseMessage.includes('safety') || lowercaseMessage.includes('safe')) {
//         return "Chemical safety basics: Read labels, use proper ventilation, wear protective gear when needed, store safely, and never mix different products! 🛡️";
//     } else if (lowercaseMessage.includes('environment') || lowercaseMessage.includes('eco')) {
//         return "Choose biodegradable products when possible, dispose of chemicals properly at hazardous waste centers, and look for eco-friendly alternatives! 🌱";
//     } else if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
//         return "Hello! I'm here to help you understand chemistry in daily life. Ask me about any chemical products or safety questions! 👋";
//     } else {
//         return "That's an interesting question! Chemistry is everywhere in our daily lives. Try asking about specific products like soap, toothpaste, cleaning products, or food preservatives! 🔬";
//     }
// }
