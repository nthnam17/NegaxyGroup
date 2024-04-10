// (function($) {

//     $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
//         if ($(window).width() > 750) {
//             var _d = $(e.target).closest('.nav-item');
//             _d.addClass('show');
//             setTimeout(function() {
//                 _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
//             }, 1);
//         }
//     });

//     // js count number
//     var isAlreadyRun = false;
//     $(window).scroll(function() {

//         $('.counter-show').each(function(i) {
//             var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
//             var bottom_of_window = $(window).scrollTop() + $(window).height();

//             if (bottom_of_window > (bottom_of_object + 20)) {
//                 if (!isAlreadyRun) {
//                     $('.count-number').each(function() {

//                         $(this).prop('Counter', 0).animate({
//                             Counter: $(this).text()
//                         }, {
//                             duration: 3000,
//                             easing: 'swing',
//                             step: function(now) {
//                                 $(this).text(Math.ceil(now));
//                             }
//                         });
//                     });
//                 }
//                 isAlreadyRun = true;
//             }
//         });
//     });

// // js back to top
//     const scrollBtn = document.querySelector('.scroll-btn');
//     window.addEventListener('scroll', () => {
//         if (document.body.scrollTop > 20 || document
//             .documentElement
//             .scrollTop > 20) {
//             scrollBtn.style.display = 'block';

//         } else {
//             scrollBtn.style.display = 'none';
//         }
//     })
//     scrollBtn.addEventListener('click', () => {
//         window.scroll({
//             top: 0,
//             behavior: "smooth"
//         })
//     })



// })(jQuery);


// // js active background-color menu languge
// $( '#languge .btnLanguge ' ).on( 'click', function () {
//     // alert('123');
//     $( '#languge ' ).find( 'a.active' ).removeClass( 'active' );
//     $( this ).parent( 'a' ).addClass( 'active' );
// });


// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// function validatePhone(email) {
//     const re = /^([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})$/;
//     return re.test(String(email).toLowerCase());
// }

// function showAlert(message, type, closeDelay) {

//     var $cont = $("#alerts-container");

//     if ($cont.length == 0) {
//         // alerts-container does not exist, create it
//         $cont = $('<div id="alerts-container">')
//             .css({
//                 position: "fixed"
//                 ,width: "20%"
//                 ,right: "10px"
//                 ,top: "10px"
//                 ,fontSize: "14px"
//                 ,"z-index": "99999"
//             })
//             .appendTo($("body"));
//     }

//     // default to alert-info; other options include success, warning, danger
//     type = type || "info";

//     // create the alert div
//     var alert = $('<div>')
//         .addClass("fade in show alert alert-" + type)
//         .append(
//             $('<button type="button" class="close" data-dismiss="alert">')
//                 .append("&times;")
//         )
//         .append('<i class="mdi mdi-alert" aria-hidden="true"></i>')
//         .append(message);

//     // add the alert div to top of alerts-container, use append() to add to bottom
//     $cont.prepend(alert);

//     // if closeDelay was passed - set a timeout to close the alert
//     if (closeDelay)
//         window.setTimeout(function() { alert.remove() }, closeDelay);
// }

// var isMobile = {
//     Android: function() {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function() {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function() {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function() {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function() {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     Mac: function() {
//         return navigator.userAgent.match(/Mac/i);
//     },
//     any: function() {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };



// // js menu navbar


// jQuery(function($) {
//     function adjustNav() {
//         var winWidth = $(window).width(),
//             dropdown = $('.dropdown'),
//             dropdownMenu = $('.dropdown-menu');

//         if (winWidth >= 768) {
//             dropdown.on('mouseenter', function() {
//                 $(this).addClass('show')
//                     .children(dropdownMenu).addClass('show');
//             });

//             dropdown.on('mouseleave', function() {
//                 $(this).removeClass('show')
//                     .children(dropdownMenu).removeClass('show');
//             });
//         } else {
//             dropdown.off('mouseenter mouseleave');
//         }
//     }

//     $(window).on('resize', adjustNav);

//     adjustNav();

//     if(isMobile.any()) {
//         $('.owl-nav button span').css("padding-top", "8px");

//         orig = $.fn.css;
//         $.fn.css = function() {
//             var result = orig.apply(this, arguments);
//             $(this).trigger('stylechanged');
//             return result;
//         }

//         //set active tab
//         $('.owllistProjectHeader .owl-stage').on('stylechanged', function () {
//             dragTab('.owllistProjectHeader', '#nav-tabContent')
//         });

//         $('.owlLeaderShip .owl-stage').on('stylechanged', function () {
//             dragTab('.owlLeaderShip', '#pills-tabContent')
//         });

//         function dragTab(owlName, tabName) {
//             setTimeout(function() {
//                 var winWidth = $(window).width();

//                 if (winWidth < 768) {
//                     let ele = owlName + ' a';
//                     $(ele).removeClass('active');
//                     //
//                     $(owlName + ' .owl-item').each(function () {
//                         if ($(this).hasClass('active')) {
//                             let a = $(this).find('a');
//                             a.addClass('active');

//                             let href = a.attr('href');
//                             $(tabName + ' .tab-pane').removeClass('active');
//                             $(tabName).find(href).addClass('show');
//                             $(tabName).find(href).addClass('active');
//                         }
//                     });

//                 }
//             }, 500);
//         }

//         $('body').find('.col').css("flex-basis", "inherit");

//     }

//     if(isMobile.Mac()) {
//         $('.owl-nav span').css("padding-top", "9px");
//         $('.imgBanner img').css("width", "100%");
//         $('.textContent-banner .btn-contact, .numberHome .contact-number').addClass('mac-btn-contact');
//     }
// });

var elements = document.querySelectorAll('.ant-collapse-item');
elements.forEach(function(element) {
    element.addEventListener('click', function() {
        elements.forEach(function(el) {
            el.classList.remove('active');
            let eleChildOld =  el.children[1]
            eleChildOld.classList.remove('active')
            let elePathOld = el.querySelectorAll('path')
            elePathOld[0].style.display = 'block';
        });
        let eleChild =  element.children[1]
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


tsParticles.load("tsParticles", 
    {
        "fps_limit":100,
        "interactivity":{"detectsOn":"canvas",
        "events":{"onClick":{"enable":true,"mode":"push"},
        "onHover":{"enable":true,"mode":"repulse"},"resize":true},
        "modes":{"push":{"particles_nb":4},
        "repulse":{"distance":300,"duration":4}}},
        "particles":{"color":{"value":"#ffffff"},
        "links":{"color":"#ffffff","distance":150,"enable":true,"opacity":0.4,"width":3},
        "move":{
            "bounce":false,
            "direction":"none",
            "enable":true,
            "outMode":"out",
            "random":false,
            "speed":2,
            "straight":false},
        "number":{"density":{"enable":true,"area":800},"value":80},
        "opacity":{"value":0.5},
        "shape":{"type":"circle"},
        "size":{"random":true,"value":5}},
        "detectRetina":true}
)




