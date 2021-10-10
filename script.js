

fetch(' https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData=>{

const jokeText=jokeData.attachments[0].text;
const jokeElement=document.getElementById('jokeElement');

jokeElement.innerHTML=jokeText;

})


let image=document.getElementById('image');


fetch("https://dog.ceo/api/breeds/image/random").then(res=>res.json())
.then(result=>{
   
  
  image.src=result.message;
})
.catch(err=>console.log(err))