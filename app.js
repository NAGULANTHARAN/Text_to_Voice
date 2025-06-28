function speak() {
    const textInput = document.getElementById('textInput').value;
    const utterance = new SpeechSynthesisUtterance(textInput);
    speechSynthesis.speak(utterance);
}