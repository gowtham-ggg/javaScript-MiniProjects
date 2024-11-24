const imgContainer = document.querySelector(".image-container");
const showBtn = document.getElementById("button");

function generateRandomImage(){
    const randomImg = `https://picsum.photos/200/300?random=${Math.random()}`;
    const img = document.createElement("img");
    img.src = randomImg;
    img.alt = "random image";
    imgContainer.appendChild(img);
}

function loadImg(){
    for(let i=0; i<6; i++){
        generateRandomImage();
    }
}
showBtn.addEventListener("click", loadImg);
loadImg();