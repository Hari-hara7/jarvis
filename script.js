document.getElementById('start-btn').addEventListener('click', () => {
    startListening();
});

function startListening() {
    const status = document.getElementById('status');
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => {
        status.textContent = 'Listening...';
        status.style.color = '#28a745';
    };

    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript.toLowerCase();
        status.textContent = `You said: "${speechToText}"`;
        status.style.color = '#fff';

        let response = '';

        if (speechToText.includes('open instagram')) {
            response = 'Ok, opening Instagram';
            window.open('https://www.instagram.com', '_blank');
        } else if (speechToText.includes('open whatsapp')) {
            response = 'Ok, opening WhatsApp';
            window.open('https://web.whatsapp.com', '_blank');
        } else if (speechToText.includes('open academic')) {
            response = 'Ok, opening Academic  pal';
            window.open('https://academicpal7.onrender.com/', '_blank');
        } else if (speechToText.includes('open design grid')) {
            response = 'Ok, opening Design Grid';
            window.open('https://designgrid-two.vercel.app/', '_blank'); // Replace with the actual URL
        } else if (speechToText.includes('open academic pal 2.0')) {
            response = 'Ok, opening Academic Pal 2.0';
            window.open('https://academicpal2.0.com', '_blank'); // Replace with the actual URL
        } else if (speechToText.includes('open skill crafter')) {
            response = 'Ok, opening Skill Crafter';
            window.open('https://skillcrafter.com', '_blank'); // Replace with the actual URL
        } else if (speechToText.includes('open jio saavn')) {
            response = 'Ok, opening Jio Saavn';
            window.open('https://www.jiosaavn.com', '_blank');
        } else if (speechToText.includes('open chrome')) {
            response = 'Ok, opening Chrome';
            window.open('https://www.google.com/chrome/', '_blank');
        } else if (speechToText.includes('open linkedin')) {
            response = 'Ok, opening LinkedIn';
            window.open('https://www.linkedin.com', '_blank');
        } else {
            response = 'Command not recognized. Please try again.';
            status.style.color = 'red';
        }

        speak(response);
    };

    recognition.onerror = (event) => {
        status.textContent = `Error occurred: ${event.error}`;
        status.style.color = 'red';
    };

    recognition.onend = () => {
        status.textContent = 'Press the button and speak a command...';
        status.style.color = '#fff';
    };

    recognition.start();
}

function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
