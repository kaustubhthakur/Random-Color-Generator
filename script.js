const colors = ["green","red","powderblue","blue","purple","yellow","pink","lightblue"];

const btn = document.getElementById('btn');


btn.addEventListener('click',function(){
    

   const randomNumber = getRandomNumber();

   console.log(randomNumber);
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent  = colors[randomNumber];

});
function getRandomNumber(){
    return Math.ceil(Math.random()*colors.length);

}

