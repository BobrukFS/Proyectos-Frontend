let buttons = document.getElementsByClassName("form-steps__item");
let card = document.getElementsByClassName("card");



for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", ()=>{
        
        if(buttons[i] == buttons[1]){
            card[0].innerHTML = `
            <section class="form">
            <div class="form__group">
            <h2 class="form__title">Personal info</h2>
            <p class="form__p">Please provide your name, email, address, and phone number</p>
            
            <div class="form-option">
                <img src="assets/images/icon-arcade.svg" alt="">
                <div>
                <h3 class="form-option__h3">Arcade</h3>
                <p class="form-option__p">$9/mo</p>
                </div>
            </div>

            <div class="form-option">
                <img src="assets/images/icon-advanced.svg" alt="">
                <div>
                <h3 class="form-option__h3">Advanced</h3>
                <p class="form-option__p">$12/mo</p>
                </div>
            </div>

            <div class="form-option">
                <img src="assets/images/icon-pro.svg" alt="">
                <div>
                <h3 class="form-option__h3">Pro</h3>
                <p class="form-option__p">$15/mo</p>
                </div>
            </div>
          
        </div>
        </section>
     ` ;
        } else if (buttons[i] == buttons[0]){
            card[0].innerHTML = `
            <form class="form">
                <fieldset class="form__group">
                    <legend class="form__title">Personal info</legend>
                    <p class="form__p">Please provide your name, email, address, and phone number</p>
                    <label for="" class="form__label">Nombre <input class="form__input" type="text" placeholder="e.g. Stephen King"></label>
                    <label for="" class="form__label">Direccion Email <input type="email" class="form__input" 
                            placeholder="e.g. stephenking@gmail.com"></label>
                    <label for="" class="form__label">Numero de telefono <input class="form__input"  type="tel"
                            placeholder="e.g. +54 11 41872049"></label>
                </fieldset>
            </form>
            `
        } else if (buttons[i] == buttons [2]){
            card[0].innerHTML = `
            <form class="form">
            <fieldset class="form__group">
                <legend class="form__title">Pick add-ons</legend>
                <p class="form__p">Add-ons help enhance your gaming</p>
                
                <label for="gaming" class="form__label form__label--checkbox">Online service <span class="form__p">Access to multiplayer games</span> <span class="form__price">+$1/mo</span> <input class="form__input form__input--checkbox" id="gaming" type="checkbox"></label>
                <label for="storage" class="form__label form__label--checkbox">Larger storage <span class="form__p">Extra 1TB of cloud save</span> <span class="form__price">+$1/mo</span> <input class="form__input form__input--checkbox" id="storage"  type="checkbox"
                       ></label>
                <label for="profile" class="form__label form__label--checkbox">Customizable profile <span class="form__p">Custom theme on your profile</span> <span class="form__price">+$1/mo</span>  <input class="form__input form__input--checkbox" id="profile" type="checkbox"></label>
            </fieldset>
        </form>
            `
        }
    })
}


let formOption = document.getElementsByClassName("form-option");

formOption[0].addEventListener("click", ()=>{
    formOption[0].style.borderColor = "#0075b2";
});