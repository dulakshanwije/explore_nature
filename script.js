let text = document.getElementById("text");
let tree1 = document.getElementById("tree1");
let tree2 = document.getElementById("tree2");
let stone = document.getElementById("stone");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    tree1.style.left = value * -1.5 + 'px';
    tree2.style.left = value * 1.5 + 'px';
    stone.style.left = value * 1 + 'px';

    // I added this conditional statement to hide the leftovers when scrolling to the bottom.
    // if(value > 300){
    //     text.style.display = "none";
    //     leaf.style.display = "none";
    //     leaf.style.display = "none";
    //     hill5.style.display = "none";
    //     hill4.style.display = "none";
    //     hill1.style.display = "none";
    // }
    // else{
    //     text.style.display = "block";
    //     leaf.style.display = "block";
    //     leaf.style.display = "block";
    //     hill5.style.display = "block";
    //     hill4.style.display = "block";
    //     hill1.style.display = "block";
    // }
});