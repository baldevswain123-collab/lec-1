// const image = document.getElementsByTagName('img')
// console.log("////", image);

// // console.log(image[0]);
// // console.dir(image[0])

// // console.log(image[0].src);
// // image[0].src = "https://i.pinimg.com/originals/23/15/ca/2315ca200f670e21a14142efa233cfdb.jpg"
// // const urls = [ 
// //     "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg",
// // "https://i.pinimg.com/originals/23/15/ca/2315ca200f670e21a14142efa233cfdb.jpg",
// // "https://static.vecteezy.com/system/resources/previews/036/227/533/non_2x/ai-generated-nature-landscapes-background-free-photo.jpg"
// // ]
// // // for(let i = 0; i < images.length; i++ ){
// //     // images[i].src = urls[i]
// // // }

// // //======by using ForEach loop======
// // // urls.forEach((url, index)=>{
// // //     if(images[index]){
// // //         images.[index].src = url}
// // //     })

// // //Direct Foreach loop
// // urls.forEach((url, idx)=>images[idx].src = url)

// // const imagesByClassName = document.getElementsByClassName('css-images')
// // console.log("////", imagesByClassName);

// // const firstImageById = document.getElementById('first-image')
// // console.log("......", firstImageById);
// // console.dir(firstImageById);


// const firstImage = document.querySelector("#first-image")
// console.log("first image", firstImage);

// const images = document.querySelectorAll('.css-images')
// console.log("images", images);
// console.log("2nd image",images[1]);
 
//==============Attribute Get&Set ==============

// console.log(document.querySelectorAll("[username]"));
// console.log(document.querySelector("[username='Baldev']"));

// //const h2 = document.querySelectorAll('[username]')
// const h2 = document.querySelector('[username=Baldev]')
// console.log(h2.getAttribute('username'));

// console.log(document.querySelector("#first-image"));

// document.querySelector("body > p:nth-child(8)").getAttribute('style1')
// document.querySelector("body > p:nth-child(8)").setAttribute("title","Footer")

// console.log(document.querySelector("#first-image"));
// document.querySelector("#first-image").getAttribute("src")
// document.querySelector("#first-image").setAttribute("src","https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg")

//create a external file 
// classList property ===================
// document.querySelector("body > h2:nth-child(3)").
// classList.add("red")
// document.querySelector("body > h2:nth-child(3)").
// classList.add("bgGreenYellow")
// document.querySelector("body > h2:nth-child(3)").
// classList.remove("bgGreenYellow")
// document.querySelector("body > h2:nth-child(3)").
// classList.toggle("bgGreenYellow")

//document.querySelector("body > h2:nth-child(3)").
//removeAttribute("class")

//Accessing Parent & Sibling Element

// document.querySelector("body > p:nth-child(5) > a:nth-child(2)")

// document.querySelector("body > p:nth-child(5) > a:nth-child(2)").parentElement

// document.querySelector("body > p:nth-child(5) > a:nth-child(2)").parentElement.parentElement



const firstLink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)")
console.log(firstLink);

