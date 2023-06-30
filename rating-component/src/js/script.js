let ratingValue = document.getElementsByClassName("rating__value-btn");
let btn = document.getElementsByClassName("btn");
let valueActive = [];
let submit = undefined;
for (let i = 0; i < ratingValue.length; i++) {
    ratingValue[i].addEventListener("click", () => {
        if (valueActive[0] !== ratingValue[i] && valueActive[0] !== undefined) {
        submit = i + 1;
        valueActive[0].classList.remove("active");
        valueActive.pop();
        ratingValue[i].classList.add("active");
        valueActive.push(ratingValue[i]);
        console.log(submit);
      
    } else if
    
    (valueActive[0] !== ratingValue[i] && valueActive[0] === undefined) {
        submit = i + 1;
        ratingValue[i].classList.add("active");
        btn[0].classList.add("active");
        btn[0].classList.add("active");
        valueActive.push(ratingValue[i]);
        console.log(submit);
    }

})
};

