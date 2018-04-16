"use strict";

function playSound(event){
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!sound) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add("playing");
}

function removeTransition(event){
    if(event.propertyName === "transition") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
