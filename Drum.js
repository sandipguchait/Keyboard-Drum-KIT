

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops the function and returns the current elemnt or function
    key.classList.add('playing'); // selects the playing class from css and  adds animation to the event.
    audio.currentTime = 0; // rewind the sudio to start position by setting it to zero
    audio.play(); // execute the funcyion play which will play the audio with keypress
    
}

function removeTransition(e){
    if(e.propertyName !== 'transform' ) return; //skip if its not a transform
    this.classList.remove('playing'); // removes the playing transition from the CSS 
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

