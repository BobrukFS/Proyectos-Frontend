


let buttonNext = document.getElementsByClassName("form-footer__btn-next");
let steps = document.getElementsByClassName("form-header__item");
let formFooter = document.getElementsByClassName("form-footer");
let inputElement = document.getElementsByClassName("form-body__input")
let container = document.querySelector("#main");
let buttonBack = document.getElementsByClassName("form-footer__btn-back");
let dataPersonal = document.querySelector("#data-personal")
let dataSub = document.querySelector("#suscripcion");
let dataAddsons = document.querySelector("#adds-ons")
let resume = document.querySelector("#resume");
let btnPlan = document.querySelector(".plan-time__btn");
let btnPlanCircle = document.querySelector(".plan-time__circle");
let planTimeP = document.getElementsByClassName("plan-time__p");
let article = document.getElementsByClassName("form-body__article");
let check = document.getElementsByClassName("check");
let formPrice = document.getElementsByClassName("form-body__price");
let formPriceAdd = document.getElementsByClassName("form-body__priceAddsons");
let formPlanTitle = document.getElementsByClassName("form-body__planTitle");
let formAddsons = document.getElementsByClassName("form-body__input--addons");
let error = document.getElementsByClassName("error");
let active1 = "desactive";
let active2 = "desactive";
let active3 = "desactive";
let finalizar;
let now1 = "visible";
let now2 = "now";
let inputName;
let inputMail;
let inputPhone;
let planTitle = "Arcade";
let plan = "$9/mo";
let totalPlan = 9;
let total = 0;
let time = "mo";
let time2 = "per mounth";




for(let i = 0; i < buttonNext.length ; i++){
    buttonNext[i].addEventListener("click", ()=>{
   
        if( dataPersonal.classList == "active" && inputElement[0].validity.valid === true && inputElement[1].validity.valid === true && inputElement[2].validity.valid === true ){
            inputName = inputElement[0].value;
             inputMail = inputElement[1].value;
            inputPhone = inputElement[2].value;  
            dataPersonal.classList = "desactive"
            dataSub.classList = "active";
            steps[0].classList.remove("color");
            steps[1].classList.add("color");
        
        } else if (dataSub.classList == "active"){
            dataSub.classList = "desactive";
            dataAddsons.classList = "active";
            steps[1].classList.remove("color");
            steps[2].classList.add("color");
           
            

        } else if (dataAddsons.classList == "active") {
            resume.classList = "active";
            dataAddsons.classList = "desactive";
            resume.innerHTML = `
            <div class="form-body">
            <h2 class="form-body__title">Finishing up</h2>
            <p class="form-body__desc">Double-check everything looks OK before confirming</p>
            <div class="form-body__resume">
                <div class="form-body__add form-body__add--principal">
                    <p class="form-body__resumeP">${planTitle}</p>
                    <p class="form-body__resumeP">${plan}</p>
                </div>
                <div class="form-body__add ${active1}">
                    <p class="form-body__resumeP">Online service</p>
                    <p class="form-body__resumeP ${now1}">+$1/mo</p>
                    <p class="form-body__resumeP  ${now2}">+$10/yr</p>
                </div>
                <div class="form-body__add ${active2}">
                    <p class="form-body__resumeP">Larger storage </p>
                    <p class="form-body__resumeP ${now1}">+$2/mo</p>
                    <p class="form-body__resumeP ${now2}">+$20/yr</p>
                </div>
                <div class="form-body__add ${active3}">
                <p class="form-body__resumeP">Customizable profile</p>
                <p class="form-body__resumeP ${now1}">+$2/mo</p>
                <p class="form-body__resumeP ${now2}">+$20/yr</p>
            </div>
                <div class="form-body__add form-body__add--total">
                    <p class="form-body__resumeP">Total(${time2})</p>
                    <p class="form-body__resumeP " style="color:#0081f9; font-weigth = 500;">$${total + totalPlan}/${time}</p>
                </div>
            </div>
          

            <div class="form-body__data">
                <p><span>Name:</span> ${inputName}</p>
                <p><span>Mail:</span> ${inputMail}</p>
                <p><span>Tel:</span> ${inputPhone}</p>
            </div>
            
           

        </div>
        <div class="form-footer">
            <button class="form-footer__btn-back" type="button">Atras</button>
            <button class="form-footer__btn-next finalizar" type="button">Finalizar</button>
        </div>
            `

            steps[2].classList.remove("color");
            steps[3].classList.add("color");
            let finalizar = document.getElementsByClassName("finalizar");
            finalizar[0].addEventListener("click", ()=>{
                const datos = {
                    total: total,
                    totalPlan: totalPlan,
                    inputName: inputName,
                    inputMail: inputMail,
                    inputPhone: inputPhone,
                    time : time
                  };
                
                  fetch('http://localhost:3000/datos', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(datos),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      console.log('Respuesta del servidor:', data);
                      // Realiza acciones adicionales según sea necesario
                    })
                    .catch((error) => {
                      console.error('Error al enviar los datos al servidor:', error);
                    });

                    resume.innerHTML = `
                        <div class="confirm"> 
                            <div>
                                <h2>Su pago se ha procesado con exito</h2>
                                <img src="assets/images/checked.png">
                                <p>Recibira un correo a <span>${inputMail}</span> con el resumen</p>
                            </div>
                         
                        </div>
                    `
                    
            });

            buttonBack[2].addEventListener("click", ()=>{

                resume.classList = "desactive";
                dataAddsons.classList = "active";
                steps[3].classList.remove("color");
                steps[2].classList.add("color");
            });
            
           
        } 
      
    }

    )};



for(let i = 0; i < buttonBack.length; i++){
    buttonBack[i].addEventListener("click", ()=> {
        if(buttonBack[i] === buttonBack[0]){
            dataSub.classList = "desactive"
            dataPersonal.classList = "active";
            steps[1].classList.remove("color");
            steps[0].classList.add("color");
        } else if (buttonBack[i] === buttonBack[1]){
            dataAddsons.classList = "desactive";
            dataSub.classList = "active";
            steps[2].classList.remove("color");
            steps[1].classList.add("color");
        } 
    })
}




btnPlan.addEventListener("click", ()=>{
    let checkP = document.querySelectorAll(".check .form-body__price");
    if(btnPlanCircle.classList.contains("trans") === false){
        btnPlanCircle.classList.add("trans");
        planTimeP[1].style.color = "#0F1C2E"
        planTimeP[0].style.color = "#D3D6D9"
        formPrice[0].innerHTML = `$90/yr <span>2 months free</span>
        `;
        formPrice[1].innerHTML = `$120/yr
        <span>2 months free</span>`;
        formPrice[2].innerHTML = `$150/yr <span>2 months free</span>
        `;
        plan = limpiar(checkP[0].textContent);
        formPriceAdd[0].innerHTML = `+$10/yr`;
        formPriceAdd[1].innerHTML = `+$20/yr`;
        formPriceAdd[2].innerHTML = `+$20/yr`;
        now1 = "now";
        now2 = "visible";
        total *= 10;
        totalPlan *= 10;
        time = "yr";
        time2 = "per year";

    } else {
        btnPlanCircle.classList.remove("trans");
        planTimeP[0].style.color = "#0F1C2E"
        planTimeP[1].style.color = "#D3D6D9"
        formPrice[0].innerHTML = `$9/mo
        `;
        formPrice[1].innerHTML = `$12/mo
        `;
        formPrice[2].innerHTML = `$15/mo
        `;
        plan = limpiar(checkP[0].textContent);
     
        formPriceAdd[0].innerHTML = `+$1/mo`;
        formPriceAdd[1].innerHTML = `+$2/mo`;
        formPriceAdd[2].innerHTML = `+$2/mo`;
        now1 = "visible";
        now2 = "now";
        total /= 10;
        totalPlan /= 10 ;  
        time = "mo";
        time2 = "per mounth";
    }
});






for(let i = 0; i < article.length; i++){
    article[i].addEventListener("click", ()=>{
    if(!article[i].classList.contains("check")){
        check[0].classList.remove("check");
        article[i].classList.add("check");
        plan = limpiar(formPrice[i].textContent);
        planTitle = formPlanTitle[i].textContent;   
        totalPlan = suma(formPrice[i].textContent);   
    }   
    });
}

for(let i = 0; i < formAddsons.length; i++){
    formAddsons[i].addEventListener("click", ()=>{
    if (!formAddsons[i].classList.contains("on")){
        formAddsons[i].classList.add("on");
        if (formAddsons[i] === formAddsons[0]){
            active1 = "active1";
            total += suma(formPriceAdd[0].textContent);
        } else if(formAddsons[i] === formAddsons[1]){
            active2 = "active2";
            total += suma(formPriceAdd[1].textContent);
        } else if (formAddsons[i] === formAddsons[2]){
            active3 = "active3";
            total += suma(formPriceAdd[2].textContent);
        }
    } else {
        formAddsons[i].classList.remove("on");
        if (formAddsons[i] === formAddsons[0]){
            active1 = "desactive";
            total -= suma(formPriceAdd[0].textContent);
        } else if(formAddsons[i] === formAddsons[1]){
            active2 = "desactive";
            total -= suma(formPriceAdd[1].textContent);
        } else if (formAddsons[i] === formAddsons[2]){
            active3 = "desactive";
            total -= suma(formPriceAdd[2].textContent);
    }
  
}});
}

function suma(a){
    let total = [];

    for(let j = 0; j < a.length; j++){
        if (a[j] === "$"){
            for(let k = j + 1; k < a.length; k++){
                if (a[k] === "/"){
                    return parseFloat(total.join(""));
                }
                else {
                    total.push(a[k]);
                }
            }
        }
    }
};

function limpiar(a){
    let total = [];

    for(let i = 0; i < a.length; i++){
        if(a[i] === "/"){
            total.push(a[i]);
            total.push(a[i + 1]);
            total.push(a[i + 2]);
            return total.join("");

        } else {
            total.push(a[i]);
        }
    }
}

buttonNext[0].addEventListener("click", ()=>{
    for(let i = 0; i < inputElement.length; i++){
        if(!inputElement[i].validity.valid){
            error[i].style.display = "block";
            inputElement[i].style.border = "2px solid red";
            inputElement[i].style.outline = "none";
        } else if (inputElement[i].validity.valid){
            error[i].style.display = "none";
            inputElement[i].style.backgroundColor = "hsl(217, 100%, 97%)";
            inputElement[i].style.border = "2px solid  hsl(243, 100%, 62%)";
        }
    }
});



