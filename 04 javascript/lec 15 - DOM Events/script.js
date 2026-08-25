const handleDblClick = () => {
    console.log("Heading double click");
    
}
//2.using event properties
const h1 = document.getElementById("first-heading")

h1.onmouseover = handleOnMouseOver

function handleOnMouseOver() {
    console.log("Mouse hover effect")
    
}
h1.onmouseover = handleOnMouseOver2
function handleOnMouseOver2(){
    console.log("Mouse hover effect - 2nd fun")
    
}

//3.using addEventListner
const secondH1 = document.querySelector("#sec-heading")

secondH1.addEventListener("click",() => {
    console.log("Dom Event Listener clicked");   
})

secondH1.addEventListener("click", handleDomEventHeadingClick)
// function handleDomEventHeadingClick(){
//     console.log("Dom Event Listener clicked -2nd fun");
//     console.log("//////", event);
//     console.log("x co-ordinate", event.clientX);
//     console.log("y co-ordinate", event.clienty);
//     console.log("event type", event.type);
//     console.log("event target", event.target);
//     console.log("event target text", event.target.innerText);
//     event.target.style.color = 'green'
//     // event.target.remove()
// }
function handleDomEventHeadingClick(e){
    console.log("Dom e Listener clicked -2nd fun");
    console.log("//////", e);
    console.log("x co-ordinate", e.clientX);
    console.log("y co-ordinate", e.clienty);
    console.log("e type", e.type);
    console.log("e target", e.target);
    console.log("e target text", e.target.innerText);
    e.target.style.color = 'green'
    // e.target.remove()
}
