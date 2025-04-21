// Wait until the whole page (HTML and CSS) has fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Grabing all elements with the class 'sample' (these are your clickable sound buttons)
    const samples = document.querySelectorAll('.sample');

    // Going through each of those sound buttons
    samples.forEach(sample => {

        // Adding a click event to each one
        sample.addEventListener('click', function () {

            // Grabing the ID of the sound to play (e.g., "dan", "ah-ha") from the button's data attribute
            const soundId = this.getAttribute('data-sound');

            // Finding the <audio> element that has that ID
            const audioToPlay = document.getElementById(soundId);

            // Pause any currently playing audio so that only one plays at a time
            document.querySelectorAll('audio').forEach(audio => {
                if (!audio.paused) {
                    audio.pause();         // Stop the audio
                    audio.currentTime = 0; // Rewind it back to the beginning
                }
            });

            // Play the audio clip that matches the clicked button
            if (audioToPlay) {
                audioToPlay.play();
            }

            // Add a CSS class called 'active' to this button to trigger a visual animation or style
            this.classList.add('active');

            // After 200 milliseconds, remove the 'active' class to reset the style
            setTimeout(() => {
                this.classList.remove('active');
            }, 200);
        });
    });

});
