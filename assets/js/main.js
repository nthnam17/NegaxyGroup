
window.onload = function() {
    window.scrollTo(0, 0);
};

var elements = document.querySelectorAll('.ant-collapse-item');
elements.forEach(function(element) {
    element.addEventListener('click', function() {
        // elements.forEach(function(el) {
        //     el.classList.remove('active');
        //     let eleChildOld =  el.children[1]
        //     eleChildOld.classList.remove('active')
        //     let elePathOld = el.querySelectorAll('path')
        //     elePathOld[0].style.display = 'block';
        // });
        // let eleChild =  element.children[1]
        if(this.classList.contains('active')) {
            this.classList.remove('active');
            eleChild.classList.remove('active');
            let elePath = element.querySelectorAll('path')
            elePath[0].style.display = '';
        }else {
            this.classList.add('active');
            eleChild.classList.add('active');
            let elePath = element.querySelectorAll('path')
            elePath[0].style.display = 'none';
        }
        
    });
});

let s1 = document.getElementById("svg1");
let s2 = document.getElementById("svg2");
let s3 = document.getElementById("svg3");
let s4 = document.getElementById("svg4");
let s5 = document.getElementById("svg5");
let s6 = document.getElementById("svg6");
function stopanim() {
    s1.style.animationPlayState = "paused";
    s2.style.animationPlayState = "paused";
    s3.style.animationPlayState = "paused";
    s4.style.animationPlayState = "paused";
    s5.style.animationPlayState = "paused";
    s6.style.animationPlayState = "paused";
    
}
function startanim() {
    s1.style.animationPlayState = "running";
    s2.style.animationPlayState = "running";
    s3.style.animationPlayState = "running";
    s4.style.animationPlayState = "running";
    s5.style.animationPlayState = "running";
    s6.style.animationPlayState = "running";
}


let btnHeader  = document.querySelector('.header-btnMobile')
let menuMbl  = document.querySelector('.menu_mbl')
let btnHeaderClose = document.querySelector('.menu_mbl-action')
let headerItems = document.querySelectorAll('.menu_mbl-item')
    btnHeader.addEventListener('click', function(){
        menuMbl.classList.add('active')
    })
    btnHeaderClose.addEventListener('click', function(){
        console.log(btnHeaderClose)
        menuMbl.classList.remove('active')
    })
    headerItems.forEach(function(item){
        item.addEventListener('click',function () {
            menuMbl.classList.remove('active')
        })
    })


tsParticles.load("tsparticles", 
    {
        "fps_limit":144,
        "interactivity":{"detectsOn":"canvas",
        "events":{"onClick":{"enable":false,"mode":"push"},
        "onHover":{"enable":false,"mode":"repulse"},"resize":true},
        "modes":{"push":{"particles_nb":4},
        "repulse":{"distance":300,"duration":4}}},
        "particles":{"color":{"value":"#f47a20"},
        "links":{"color":"#ff8000","distance":150,"enable":true,"opacity":0.5,"width":1},
        "move":{
            "bounce":false,
            "direction":"none",
            "enable":true,
            "outMode":"out",
            "random":true,
            "speed": 1,
            "straight":false},
        "number":{"density":{"enable":true,"area":800},"value":70},
        "opacity":{"value":0.5},
        "shape":{"type":"circle"},
        "size":{"random":true,"value":5}},
        "detectRetina":true}
)


const scriptURL = 'https://script.google.com/macros/s/AKfycbzbRCcykUPNs7A3g34U4AcE7a3xm7DvJaMveFmZPN75TKUa_tiHPnYEHtSMd4Th4rCf/exec'

const form = document.forms['form_contact']
var fullName = document.querySelector('[name="fullName"]');
var phone = document.querySelector('[name="Phone"]');
var email = document.querySelector('[name="Email"]');
var message = document.querySelector('[name="Message"]');

var nameValid = document.querySelector('#nameValid')
var phoneValid = document.querySelector('#phoneValid')
var emailValid = document.querySelector('#emailValid')
var messValid = document.querySelector('#messValid')



'<---- Validation Form Contact --->'
fullName.addEventListener("focusout", function (){
    if(fullName.value == '' || fullName.value.lenght < 4) {
        fullName.classList.add('active')
        nameValid.classList.add('active')
    }
    else if(fullName.value !== '') {
        console.log(fullName.value)
        fullName.classList.remove('active')
        nameValid.classList.remove('active')
    }
});
phone.addEventListener("focusout", function (){
    if(phone.value == '' || phone.value.lenght < 8) {
        phone.classList.add('active')
        phoneValid.classList.add('active')
    } else if(phone.value !== '') {
        phone.classList.remove('active')
        phoneValid.classList.remove('active')
    }
});
email.addEventListener("focusout", function (){
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) || email.value == '') {
        email.classList.add('active')
        emailValid.classList.add('active')
    }else if(email.value !== '') {
        email.classList.remove('active')
        emailValid.classList.remove('active')
    }
});
message.addEventListener("focusout", function (){
    if(message.value == "") {
        message.classList.add('active')
        messValid.classList.add('active')
    }else if(email.value !== '') {
        message.classList.remove('active')
        messValid.classList.remove('active')
    }
});


        
    

form.addEventListener('submit', e => {
 e.preventDefault()
 var error = 0

    if(fullName.value == '' || phone.value == '' || email.value == '' || message.value == ''){
        error++
    }
    if(error == 0 ){
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Cảm ơn ! Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    }
 
})






  



