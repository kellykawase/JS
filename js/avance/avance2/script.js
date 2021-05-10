function speakGeneric(){
    console.log(this.sound);
}

let dog = {
    sound: "Au au",
    speak: speakGeneric
    
}

let cat = {
    sound: "Miau",
        speak: speakGeneric
}
dog.speak();
cat.speak();

speakGeneric();//dá indefinido, pq ele não sabe o que é this

let bindedFunction = speakGeneric.bind(dog);//aqui usa o bind
bindedFunction();