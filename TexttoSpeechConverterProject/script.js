let speech = new SpeechSynthesisUtterance();
let voices = [];

const voiceSelect = document.getElementById("voiceSelect");
const speakBtn = document.getElementById("speakBtn");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    
    voiceSelect.innerHTML = '';

    voices.forEach((voice) => {
        const option = document.createElement('option');
        option.value = voice.name; 
        option.textContent = `${voice.name} (${voice.lang})`; 
        voiceSelect.appendChild(option);
    });

    if (voices.length > 0) {
        speech.voice = voices[0]; 
        voiceSelect.value = voices[0].name; 
    }
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

voiceSelect.addEventListener("change", () => {
    speech.voice = voices.find(voice => voice.name === voiceSelect.value);
});

speakBtn.addEventListener("click", () => {
    const textArea = document.querySelector("textarea");
    speech.text = textArea.value;

    if (textArea.value) {
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter text to speak."); 
    }
});

if (speechSynthesis.getVoices().length) {
    populateVoiceList();
}
