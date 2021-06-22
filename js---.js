

    
    alert("CONGRALUATIONS ,you earned iphone 10+++") 
    var isCoolWithIt = confirm("Are you ok with it?")
    console.log(isCoolWithIt )
    var visitorName = prompt("LUCKY!!please to receive your gift insert your credit card number  : ")
    
    

var add=Array.from(document.getElementsByClassName("bt1"))
var ded=Array.from(document.getElementsByClassName("bt2"))
      
      
function total(){
    var All=document.querySelector(".totala")
var pu=Array.from(document.getElementsByClassName('prix'))
var qtte=Array.from(document.getElementsByClassName("c"))
    let sum=0
    for(let i=0;i<qtte.length;i++){
        sum=sum+qtte[i].innerHTML*pu[i].innerHTML
        

    }
    All.innerHTML=sum
    }
    
    for(let i in add){
        add[i].addEventListener("click",function(){
            add[i].nextElementSibling.innerHTML++
             
            total()
        })
        ded[i].addEventListener("click",function(){
            if(ded[i].previousElementSibling.innerHTML>0) ded[i].previousElementSibling.innerHTML--;
            total()
        })
    
    }
      
       
       var del=Array.from(document.getElementsByClassName("om"))   
       for(let dele of del){
        dele.addEventListener("click",function(){
        dele.parentElement.parentElement.remove()
        total()
        })
        }
        const whiteHeart = '\u2661';
const blackHeart = '\u2665';
const butto = document.querySelector('.love');
butto.addEventListener('click', toggle);

function toggle() {
  const like = butto.textContent;
  if(like==whiteHeart) {
    butto.textContent = blackHeart;
  } else {
    butto.textContent = whiteHeart;
  }
}

            
        
    

