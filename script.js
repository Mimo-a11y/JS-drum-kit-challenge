
 removeStyle = (e) => {
   if(e.propertyName != "transform") return;
   e.target.classList.remove('playing');
}
 playSound = (event) =>{
    const audioElement = document.querySelector(`audio[data-key= "${event.key}"]`);
    const keyElement = document.querySelector(`.key[data-key= "${event.key}"]`);
    if(!audioElement) return;
    keyElement.classList.add('playing'); 
    audioElement.currentTime = 0;
    audioElement.play();
}
 

const keyElements = Array.from(document.querySelectorAll('.key'));
keyElements.forEach(key => key.addEventListener('transitionend', removeStyle));
window.addEventListener('keydown', playSound);

