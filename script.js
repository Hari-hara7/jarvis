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

        if (speechToText.includes('open instagram')) {
            window.open('https://www.instagram.com', '_blank');
        } else if (speechToText.includes('open whatsapp')) {
            window.open('https://web.whatsapp.com', '_blank');
        } else if (speechToText.includes('open academic pal')) {
            window.open('https://academicpal7.onrender.com/', '_blank');
        } else if (speechToText.includes('open design grid')) {
            window.open('https://designgrid.com', '_blank'); // Replace with the actual URL
        } else if (speechToText.includes('open academic pal 2.0')) {
            window.open('https://academicpal2.0.com', '_blank'); // Replace with the actual URL
        } else if (speechToText.includes('open skill crafter')) {
            window.open('https://skillcrafter.com', '_blank'); // Replace with the actual URL
        } else if (speechToText.includes('open jio saavn')) {
            window.open('https://www.jiosaavn.com', '_blank');
        } else if (speechToText.includes('open chrome')) {
            window.open('https://www.google.com/chrome/', '_blank');
        } else if (speechToText.includes('open linkedin')) {
            window.open('https://www.linkedin.com', '_blank');
        } else {
            status.textContent = 'Command not recognized. Please try again.';
            status.style.color = 'red';
        }
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
