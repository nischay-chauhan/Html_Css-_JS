function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random()*350 + "vh";
    heart.style.animationDuration = Math.random()*2 + 2 +"s";

    heart.innerText ="❤️";

    document.body.appendChild(heart);

    setTimeout(() =>{
        heart.remove();
    } , 5000);
}

setInterval(createHeart , 300);