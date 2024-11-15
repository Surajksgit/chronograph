
// USING ID


// var heading=document.getElementById("head1")
// var btn = document.getElementById("btn")

// btn.addEventListener("click",color);
// heading.addEventListener("mouseover",bag);

// function color(){
//     heading.style.color="blue"
// }

// function bag(){
//     heading.style.backgroundColor = "red"
// }

// USING CLASS

var heading=document.getElementsByClassName("head1")
// var btn = document.getElementsByClassName("head")

heading[0].addEventListener("click",color);
heading[1].addEventListener("mouseover",bag);

function color(){
    heading[0].style.color="blue";
}

function bag(){
    heading[0].style.backgroundColor = "red";
}
