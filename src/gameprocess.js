
let gameOver = false;
 let popup = document.getElementById('popup')
 let game = document.getElementById('content')



 function whoIsWinner (){
    let  winner = '';
    let friend = '';
    let winnerName_1 = document.getElementById('pl_1').value
    let winnerName_2 = document.getElementById('pl_2').value
     
     if( score >  score_2){
         winner = winnerName_1
     }
     if (score_2 > score ) {
         winner = winnerName_2
     }
     if (score_2 === score){
            friend = 'Победила дружба!'
     }
     addWinnerName(winner,friend);
 }
 
    let score = 0;
    function getScoresToPlayerFirst (){
        score ++;
        let writeScore = document.getElementById('score_for_1').innerText = score;
    }

    let score_2 = 0;
    function getScoresToPlayerSecond (){
        score_2 ++;
        let writeScore2 = document.getElementById('score_for_2').innerText = score_2;
    }
   
    function  closePopup() {
        let input = document.querySelectorAll('input')
        Array.from(input).forEach(item => {
            item.value =''
        })
     
        popup.style.display = 'none';

      }

      let normalPositionHAnds = document.getElementsByClassName('normal')
      let reversPositionHands = document.getElementsByClassName('revers')
      let  normal = Array.from(normalPositionHAnds)
      let revers = Array.from( reversPositionHands)
      let isSwiched = false;

      function giveAHint(){
         if (isSwiched === false){
            isSwiched = !isSwiched
            normal.forEach(item => {
        item.style.display = 'block';
        item.setAttribute('swiched',isSwiched);
     });
         } else {
            isSwiched = !isSwiched
            normal.forEach(item => {
                item.style.display = 'none';
                item.setAttribute('swiched',isSwiched);
            })
         }
      }

      function giveAHintRevers(){
        if (isSwiched === false){
           isSwiched = !isSwiched
           revers.forEach(item => {
       item.style.display = 'block';
       item.setAttribute('swiched',isSwiched);
    });
        } else {
           isSwiched = !isSwiched
           revers.forEach(item => {
               item.style.display = 'none';
               item.setAttribute('swiched',isSwiched);
           })
        }
     }

     let namePlace = document.getElementById('name')
     function addWinnerName(winner,friend){
            namePlace.innerHTML = "Победитель," + winner;
            if (friend !== ''){
                namePlace.innerHTML = friend;
            }
     }
        let start_btn = document.getElementById('startButton')
     function startGame(){
        start_btn.style.display = 'none'
        menu.style.display = 'block' 
     }
     let gameStatus = "start";


         let menu = document.getElementById('lv_menu')
         function goToLevels(){
            game.style.display = 'none'
            menu.style.display = 'block' 
         }
     function toFinishGame(){
        gameOver = true;
        whoIsWinner ();
        game.style.display = 'none'
        popup.style.display = 'block';
        return;
     }
//levels
let  image_path = "assets/images/oneHands/IMG_"
function toButtonIdHandler(button){
    menu.style.display = 'none' 
    game.style.display = 'block'
    if (gameOver === false) {
    let buttonId = button.id
    if( buttonId === 'button_1'){
        document.querySelector('.card').removeAttribute('src',"assets/images/hands.mixed/IMG_1.jpg");
        document.querySelector('.card').setAttribute('src',"assets/images/oneHands/IMG_1.jpg");
        image_path = "assets/images/oneHands/IMG_"
        cardLenth = 13
    }
    if( buttonId === 'button_2'){
        document.querySelector('.card').removeAttribute('src',"assets/images/oneHands/IMG_1.jpg");
        document.querySelector('.card').setAttribute('src',"assets/images/twoHands/IMG_1.jpg");
        image_path = "assets/images/twoHands/IMG_"
        cardLenth = 32
    }
    if( buttonId === 'button_3'){
        document.querySelector('.card').removeAttribute('src',"assets/images/twoHands/IMG_1.jpg");
        document.querySelector('.card').setAttribute('src',"assets/images/twoHandsRevers/IMG_1.jpg");
        image_path = "assets/images/twoHandsRevers/IMG_"
        cardLenth = 16
    }
    if( buttonId === 'button_4'){
        document.querySelector('.card').removeAttribute('src',"assets/images/twoHandsRevers/IMG_1.jpg");
        document.querySelector('.card').setAttribute('src',"assets/images/hands.mixed/IMG_1.jpg");
        image_path = "assets/images/hands.mixed/IMG_"
        cardLenth = 59
    }
    if( buttonId === 'button_5'){
        document.querySelector('.card').removeAttribute('src',"assets/images/hands.mixed/IMG_1.jpg");
        document.querySelector('.card').setAttribute('src',"assets/images/body/IMG_1.jpg");
        image_path = "assets/images/body/IMG_"
        cardLenth = 21
    }
    if( buttonId === 'button_6'){
        document.querySelector('.card').removeAttribute('src',"assets/images/body/IMG_1.jpg");
        document.querySelector('.card').setAttribute('src',"assets/images/allCards/IMG_1.jpg");
        image_path = "assets/images/allCards/IMG_"
        cardLenth = 78
    }
}
cardsArray = [];
for (let i = 2; i < cardLenth; i++) {
    cardsArray.push(i);
}
   }

 function showCard_2 (image_path) {
    if (gameOver === false) {
        let randomCardIndex = Math.floor(Math.random() * cardsArray.length);
              let cardRemoved =  randomCardIndex
               let card_id = cardsArray[cardRemoved]
             let randomRemovedCard = cardsArray.splice(cardRemoved, 1)[0];
           document.querySelector('.card').setAttribute('src',image_path + card_id + ".jpg");  
        
           if (cardsArray.length === 0) {
               gameOver = true;
               whoIsWinner ();
               game.style.display = 'none'
               popup.style.display = 'block'
               return;
           }
    }
   }
   

    

              
              