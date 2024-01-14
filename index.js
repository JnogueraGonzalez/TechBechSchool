document.addEventListener('DOMContentLoaded', function () {
    const pianoContainer = document.getElementById('piano-container');
    const keys = pianoContainer.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('mousedown', playNote);
        key.addEventListener('mouseup', stopNote);
        key.addEventListener('mouseleave', stopNote);
    });

    function playNote() {
        const note = this.dataset.note;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine'; // Tipo de onda sinusoidal
        oscillator.frequency.setValueAtTime(getFrequency(note), audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        oscillator.start();
        this.classList.add('active');

        // Detener la nota después de 300 milisegundos (ajustar según sea necesario)
        setTimeout(() => {
            oscillator.stop();
            this.classList.remove('active');
        }, 300);
    }

    function stopNote() {
        this.classList.remove('active');
    }

    function getFrequency(note) {
        const noteMap = {
            'C': 261.63,
            'D': 293.66,
            'E': 329.63,
            'F': 349.23,
            'G': 392.00,
            'A': 440.00,
            'B': 493.88
        };
        return noteMap[note] || 0;
    }
});