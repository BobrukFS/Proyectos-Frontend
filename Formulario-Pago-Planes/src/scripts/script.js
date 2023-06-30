let buttons = document.getElementsByClassName("form-steps__item");
let form = document.getElementsByClassName("form");



for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", ()=>{
        
        if(buttons[i] == buttons[1]){
            form[0].innerHTML = `
            <fieldset class="form__group">
            <legend class="form__title">Selecciona su plan</legend>
            <p class="form__p">You have the option of monthly or yearly billing</p>
        <label for="" class="form__label">Nombre <input type="text" placeholder="e.g. Stephen King"></label>
        <label for="" class="form__label">Direccion Email <input type="email" placeholder="e.g. stephenking@gmail.com"></label>
        <label for="" class="form__label">Numero de telefono <input type="tel" placeholder="e.g. +54 11 41872049"></label>
    </fieldset>
     ` ;
        } else if (buttons[i] == buttons[0]){
            form[0].innerHTML = `
            <fieldset class="form__group">
            <legend class="form__title">Personal info</legend>
            <p class="form__p">Please provide your name, email, address, and phone number</p>
        <label for="" class="form__label">Nombre <input type="text" placeholder="e.g. Stephen King"></label>
        <label for="" class="form__label">Direccion Email <input type="email" placeholder="e.g. stephenking@gmail.com"></label>
        <label for="" class="form__label">Numero de telefono <input type="tel" placeholder="e.g. +54 11 41872049"></label>
    </fieldset>
            `
        }
    })
}
console.log(form);