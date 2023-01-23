const projectsContainer = document.querySelector(".projects-container");
const projectsGallery = document.querySelector(".projects-gallery");
const projectsMain = document.querySelector(".projects-main");
const mainImgWrapper = document.querySelector(".main-image-wrapper");
const mainImg = document.querySelector(".main-img");
const mainImgCaption = document.querySelector(".main-img-caption");
const threeGridWrapper = document.querySelectorAll(".three-grid-img-wrapper");
const threeGridImg = document.querySelectorAll(".three-grid");
const threeGridImgCaption = document.querySelectorAll(".three-grid-img-caption");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const listItem = document.querySelectorAll("li");
const links = document.querySelectorAll("a");
const paragraphs = document.querySelectorAll("p");

let link = document.createElement("a");
link.href = "https://www.example.com";
link.innerHTML = "Go to Example.com";

//Global Styles

projectsContainer.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;")

projectsMain.setAttribute("style", "display: flex; justify-content: center; align-items: center;")

h1.forEach(heading => {
	heading.style.cssText = "margin: 0; font-family: 'Ubuntu', sans-serif;"
});

h2.forEach(heading => {
	heading.style.cssText = "margin: 0; font-family: 'Ubuntu', sans-serif;"
}); 

links.forEach(link => {
	link.style.cssText = "color: white;"
});

paragraphs.forEach(p => {
	p.style.cssText = "color: white; font-family: 'Ubuntu', sans-serif; margin: 0.3rem 0 0;"
});


listItem.forEach(li => {
	li.style.cssText = "text-align: left"
});


// Main Image

mainImgWrapper.style.cssText = "width: 45vw; min-height: 55vh; margin: auto;position: relative;"

mainImg.style.cssText = "width: 100%; margin-bottom: 2rem; border-radius: 1rem;"

mainImgCaption.style.cssText = "display: none"

mainImgWrapper.addEventListener("mouseover", function() {
    mainImgCaption.style.cssText = "position: absolute; top: 20%; left: 0; width: 100%; height: 50%; overflow: hidden; background-color: #373737a8; color: white; font-size: 1.3rem; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer"
});

mainImgWrapper.addEventListener("mouseout", function() {
    mainImgCaption.style.cssText = "display: none" 
});


// Gallery Grid 

projectsGallery.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; align-items: center;")

threeGridWrapper.forEach(wrapper => {
	wrapper.style.cssText = "position: relative; width: 30%; margin: 1rem;"
})

threeGridImg.forEach(image => {
	image.style.cssText = "width: 100%; border-radius: 1rem;"
})

threeGridImgCaption.forEach(caption => {
	caption.style.cssText = "display: none"
})

threeGridWrapper.forEach((wrapper, index) => {
    wrapper.addEventListener("mouseover", function() {
        let imgCaption = threeGridImgCaption[index];
        imgCaption.style.cssText = "position: absolute; top: 80px; left: 0; width: 100%; height: 50%; overflow: hidden; background-color: #373737a8; color: white; font-size: 1.3rem; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer;";
    });
});


threeGridWrapper.forEach((wrapper, index) => {
    wrapper.addEventListener("mouseout", function() {
        let imgCaption = threeGridImgCaption[index];
        imgCaption.style.cssText = "display: none;";
    });
});






