const greenBtn = document.getElementById("green");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const randomBtn = document.getElementById("random");

greenBtn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "green";
});

redBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "red";
})

blueBtn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "blue";
})

randomBtn.addEventListener("click", ()=>{
    let redClr = Math.round(Math.random()* 255);
    let greenClr = Math.round(Math.random()* 255);
    let blueClr = Math.round(Math.random()* 255);

    let rgb = `rgb(${redClr}, ${greenClr}, ${blueClr})`;
    document.body.style.backgroundColor = rgb;

});