const service__menu__knopka = document.querySelector(".knopka__service");
const servise__text = document.querySelector(".service__header__knopka")
const close__menu__service__knopka = document.querySelector(".close__knopka__service__menu");

service__menu__knopka.addEventListener("click", function(event){
    service__menu__on();
});
function service__menu__on(){
    document.querySelector(".service__knopka__conteiner__ul").style.margin = "350px auto 0px auto";
};

close__menu__service__knopka.addEventListener("click", function(event){
    service__menu__off();
});

servise__text.addEventListener("click", function(event){
    service__menu__off();
});
function service__menu__off(){
    document.querySelector(".service__knopka__conteiner__ul").style.margin = "-2000px auto 0px auto";
}



