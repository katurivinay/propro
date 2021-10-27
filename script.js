var heading = document.getElementById('colourvalue');
var buttons = document.getElementsByClassName('colourButton');


//heading.innerHTML = 'hello world!';


function setButtonCOlour(button,red,green,blue){
    button.setAttribute('style','background-color:rgb('+red+','+green+','+blue+');');
}

function makeCOlourValue(){
    return Math.round(Math.random()*255);
}

var answerMessage = document.getElementById('answer');
function startGame()
{
   var answerButton = Math.round(Math.random() * (buttons.length-1));

   for (var index = 0; index < buttons.length; index++) 
   {
      var red = makeCOlourValue(); 
      var green = makeCOlourValue();
      var blue = makeCOlourValue();

      setButtonCOlour(buttons[index],red,green,blue);

        if(index == answerButton)
        {
            heading.innerHTML = '(${red},${green},${blue})';
        }
        buttons[index].addEventListener('click',function()
        {
           if(this == buttons[answerButton])
           {
              answerMessage.innerHTML = "correct!";
           } 
           else
           {
            answerMessage.innerHTML = "Wrong answer! guess again1";
           }
     
        });
   
    }

}

startGame();
answerMessage.innerHTML = "";
document.getElementById('resetButton').addEventListener('click',startGame);



/*setButtonCOlour(buttons[0],0,0,255);
setButtonCOlour(buttons[1],0,255,0);
setButtonCOlour(buttons[2],255,0,0);*/
