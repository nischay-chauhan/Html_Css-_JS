const handleOnMouseMove = e =>{
    const{ currentTarget:target } = e;

    const rect = target.getBoundingClientReact(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top

    target.style.setproperty("--mouse-x" , '${x}px');
    target.style.setproperty("--mouse-y" , '${y}px');

}

for(const card of document.querySelectorAll(".card")){
    card.onmousemove = e =>handleOnMouseMove
}