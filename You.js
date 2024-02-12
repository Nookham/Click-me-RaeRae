const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "FLOWERS!!";
    yesBtn.innerHTML = "Thank youuuu:)";
  noBtn.innerHTML = "Ewwww:(";
gif.src = "https://media.tenor.com/Hj1rcJnQKTMAAAAi/tonton-tontonsticker.gif";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Sorry, wala ko pambili ng mahal na flowers(︶︹︺)";
    yesBtn.innerHTML = "It's okayy";
    noBtn.innerHTML = "Hays walang kwenta";
    gif.src = "https://media.tenor.com/6nkmHa2dEd8AAAAi/tonton-tonton-friends.gif"
  
  yesBtn.addEventListener("click", () => {
    question.innerHTML = "OHHHH, you like it???";
    yesBtn.innerHTML = "Nop, I love ittt";
    noBtn.innerHTML = "Ew? Like tlga? yuck";
    gif.src = "https://i.pinimg.com/originals/32/bb/ac/32bbacdca0817f3a2cf329437b1d588f.gif";
    
    yesBtn.addEventListener("click", () => {
      question.innerHTML = "U DO?? hehejwhashsheh";
      yesBtn.innerHTML = "Mhm, I do love it!";
      noBtn.innerHTML = "...";
      gif.src = "https://i.pinimg.com/originals/18/fa/39/18fa39e500076f18b47b6c5c58191609.gif";
      
      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Anywaysss";
        yesBtn.innerHTML = "Yeah?";
        noBtn.innerHTML = "Daming sinasabi";
        gif.src = "https://martiabout.carrd.co/assets/images/image01.gif?v18386585932951";
       
        yesBtn.addEventListener("click", () => {
          question.innerHTML = "Sooooo..";
          yesBtn.innerHTML = "Yessss?";
          noBtn.innerHTML = "bahala ka jan";
          gif.src = "https://media1.tenor.com/m/LKY7hRX8ek8AAAAC/tonton-friends.gif";
          
          yesBtn.addEventListener("click", () => {
            question.innerHTML = "Will..";
            yesBtn.innerHTML = "Will?..";
            noBtn.innerHTML = "wag na";
            gif.src = "https://media.tenor.com/0temAQuJsWIAAAAi/bella-tontonbella.gif";
            
        
            yesBtn.addEventListener("click", () => {
              question.innerHTML = "You..";
              yesBtn.innerHTML = "Will I??";
              noBtn.innerHTML = "hakdog";
              gif.src = "https://media.tenor.com/j0lkZbwxLEYAAAAi/tontonfriends-chubby.gif";

              yesBtn.addEventListener("click", () => {
                question.innerHTML = "Be..";
                yesBtn.innerHTML = "Hmm? be what??";
                noBtn.innerHTML = "yoko nga";
                gif.src = "https://64.media.tumblr.com/f383573323f4955d14ec5738881a7f1c/bacc08f7a139f859-0a/s400x600/0e7b71306bc297b933f6aad9634d265bc99f00ea.gifv";


  
                yesBtn.addEventListener("click", () => {
                  question.innerHTML = "My Valentine?..";
                  yesBtn.innerHTML = "YES YES YES!!";
                  noBtn.innerHTML = "no.";
                  gif.src = "https://media.tenor.com/y-aZthOqQNgAAAAi/tonton-tonton-friends.gif"
                    
                    yesBtn.addEventListener("click", () => {
                      question.innerHTML = "WEHHHHHHHHHHH";
                      yesBtn.innerHTML = "Oo ngaaaaa";
                      noBtn.innerHTML = "Ayaw mo ba?";
                      gif.src = "https://media.tenor.com/hx8v1XEF1A8AAAAi/tonton-tonton-friends.gif";
                     
                yesBtn.addEventListener("click", () => {
                        question.innerHTML = "REALLY?!?!?!?!";
                        yesBtn.innerHTML = "Mhmm, yes yes!";
                        noBtn.innerHTML = "Inde";
                        gif.src = "https://media.tenor.com/kpNv8nmAmWsAAAAi/tontonfriends-chubby.gif";
                    
                        yesBtn.addEventListener("click", () => {
                          question.innerHTML = "YAYYY UEUEUEUE I LOVE YOUUUU";
                          yesBtn.innerHTML = "I LOVE YOU TOOOOO";
                          noBtn.innerHTML = "...?";
                          gif.src = "https://media.tenor.com/rLsTS3eQiyoAAAAi/tonton-friends-tobi.gif";
                    
                          yesBtn.addEventListener("click", () => {
                            question.innerHTML = "Happy Valentine's Day RaeRaeeee!";
                            yesBtn.innerHTML = "<3";
                            noBtn.innerHTML = ":)";
                            gif.src = "https://media.tenor.com/m-bLuGd1pwwAAAAi/tonton-friends-tonton.gif";
                    
                          })
                        })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      
      })
    })  



noBtn.addEventListener("mouseover", () => {
 const noBtnRect = noBtn.getBoundingClientRect();
 const maxX = window.innerWidth - noBtnRect.width;
 const maxY = window.innerHeight - noBtnRect.height;   
 
 const randomX =  Math.floor(Math.random() * maxX)   
 const randomY =  Math.floor(Math.random() * maxY)
 
 
 noBtn.style.left = randomX + "px";
 noBtn.style.top  = randomY + "px";
});



var pop = new Audio(); 
    pop.src = "pop.mp3";
    
    var error = new Audio(); 
    error.src = "error.mp3";    

    var fallenlyric = new Audio(); 
    fallenlyric.src = "fallenlyric.mp3";
    


    
    
  
