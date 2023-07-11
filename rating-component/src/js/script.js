let ratingValue = document.getElementsByClassName("rating__value-btn");
let btn = document.getElementsByClassName("btn");
let valueActive = [];
let submit = 0;
let article = document.getElementsByClassName("rating");

for (let i = 0; i < ratingValue.length; i++) {
    ratingValue[i].addEventListener("click", () => {
        if (valueActive[0] !== ratingValue[i] && valueActive[0] !== undefined) {
        submit = i + 1;
        valueActive[0].classList.remove("active");
        valueActive.pop();
        ratingValue[i].classList.add("active");
        valueActive.push(ratingValue[i]);
        console.log(submit);
        
      
    } else if (valueActive[0] !== ratingValue[i] && valueActive[0] === undefined) {
        submit = i + 1;
        ratingValue[i].classList.add("active");
        btn[0].classList.add("active");
        btn[0].classList.add("active");
        valueActive.push(ratingValue[i]);
        console.log(submit);
        
btn[0].addEventListener("click", ()=>{
    article[0].innerHTML = `
    <img class="rating__icon" src="../images/icon-star.svg" alt="icon-star">
  <h2 class="rating__h2 rating__h2--send">Gracias por dar una reseña</h2>
  <img class="rating__like" src="../images/like.png" alt="like-icon">
  <p class="rating__p rating__p--send">Su opinion nos ayuda a seguir mejorando</p>
    `
    article[0].classList.add("send");
})
    }

})
};

