// js  section Our solutions
$('.owl-slider-news').owlCarousel({
    loop: false,
    margin: 23,
    nav: false,
    dots: false,
    // center:true,
    stagePadding: 20,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    },
});
var selector = $('.owl-carousel');

$('.my-next-button').click(function () {
    selector.trigger('next.owl.carousel');
});

$('.my-prev-button').click(function () {
    selector.trigger('prev.owl.carousel');
});


//DOM elements
const DOMstrings = {
    stepsBtnClass: 'multisteps-form__progress-btn',
    stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
    stepsBar: document.querySelector('.multisteps-form__progress'),
    stepsForm: document.querySelector('.multisteps-form__form1'),
    stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__form1 .multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next'
};

//remove class from a set of items
const removeClasses = (elemSet, className) => {
    elemSet.forEach(elem => {
        elem.classList.remove(className);
    });
};

//return exect parent node of the element
const findParent = (elem, parentClass) => {
    let currentNode = elem;
    while (!(currentNode.classList.contains(parentClass))) {
        currentNode = currentNode.parentNode;
    }
    return currentNode;
};

//get active button step number
const getActiveStep = elem => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = (activeStepNum) => {

    //remove active state from all the state
    removeClasses(DOMstrings.stepsBtns, 'js-active');

    //set picked items to active
    DOMstrings.stepsBtns.forEach((elem, index) => {

        if (index <= (activeStepNum)) {
            elem.classList.add('js-active');
        }
    });
};

//get active panel
const getActivePanel = () => {
    let activePanel;
    DOMstrings.stepFormPanels.forEach(elem => {
        if (elem.classList.contains('js-active')) {
            activePanel = elem;
        }
    });
    return activePanel;
};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {

    //remove active class from all the panels
    removeClasses(DOMstrings.stepFormPanels, 'js-active');

    //show active panel
    DOMstrings.stepFormPanels.forEach((elem, index) => {
        if (index === (activePanelNum)) {
            elem.classList.add('js-active');
            setFormHeight(elem);
        }
    })
};

//set form height equal to current panel height
const formHeight = (activePanel) => {
    const activePanelHeight = activePanel.offsetHeight;
    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
};

const setFormHeight = () => {
    const activePanel = getActivePanel();
    if (activePanel != undefined) {
        formHeight(activePanel);
    }
}

//STEPS BAR CLICK FUNCTION
if (DOMstrings.stepsBar != null) {
    DOMstrings.stepsBar.addEventListener('click', e => {
        //check if click target is a step button
        const eventTarget = e.target;
        if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
            return;
        }

        //get active button step number
        const activeStep = getActiveStep(eventTarget);

        //set all steps before clicked (and clicked too) to active
        setActiveStep(activeStep);

        //open active panel
        setActivePanel(activeStep);
    });
}

//PREV/NEXT BTNS CLICK
if (DOMstrings.stepsForm != null) {
    DOMstrings.stepsForm.addEventListener('click', e => {
        const eventTarget = e.target;
        //check if we clicked on `PREV` or NEXT` buttons
        if (!((eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) || (eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))) {
            return;
        }

        //find active panel
        const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
        let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

        //set active step and active panel onclick
        if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
            activePanelNum--;
        } else {
            activePanelNum++;
        }

        setActiveStep(activePanelNum);
        setActivePanel(activePanelNum);

    });
}

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

//changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)

const setAnimationType = (newType) => {
    DOMstrings.stepFormPanels.forEach(elem => {
        elem.dataset.animation = newType;
    })
};

//selector onchange - changing animation
const animationSelect = document.querySelector('.pick-animation__select');
if (animationSelect) {
    animationSelect.addEventListener('change', () => {
        const newAnimationType = animationSelect.value;
        setAnimationType(newAnimationType);
    });
}

//Timeline 2
//DOM elements
const DOMstrings2 = {
    stepsBtnClass2: 'multisteps-form__progress-btn2',
    stepsBtns2: document.querySelectorAll(`.multisteps-form__progress-btn2`),
    stepsBar2: document.querySelector('.multisteps-form__progress2'),
    stepsForm2: document.querySelector('.multisteps-form__form2'),
    stepsFormTextareas2: document.querySelectorAll('.multisteps-form__textarea2'),
    stepFormPanelClass2: 'multisteps-form__panel2',
    stepFormPanels2: document.querySelectorAll('.multisteps-form__form2 .multisteps-form__panel2'),
    stepPrevBtnClass2: 'js-btn-prev',
    stepNextBtnClass2: 'js-btn-next'
};

//remove class from a set of items
const removeClasses2 = (elemSet, className) => {
    elemSet.forEach(elem => {
        elem.classList.remove(className);
    });
};

//return exect parent node of the element
const findParent2 = (elem, parentClass) => {
    let currentNode = elem;
    while (!(currentNode.classList.contains(parentClass))) {
        currentNode = currentNode.parentNode;
    }
    return currentNode;
};

//get active button step number
const getActiveStep2 = elem => {
    return Array.from(DOMstrings2.stepsBtns2).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep2 = (activeStepNum) => {

    //remove active state from all the state
    removeClasses2(DOMstrings2.stepsBtns2, 'js-active');

    //set picked items to active
    DOMstrings2.stepsBtns2.forEach((elem, index) => {

        if (index <= (activeStepNum)) {
            elem.classList.add('js-active');
        }
    });
};

//get active panel
const getActivePanel2 = () => {
    let activePanel;
    DOMstrings2.stepFormPanels2.forEach(elem => {
        if (elem.classList.contains('js-active')) {
            activePanel = elem;
        }
    });
    return activePanel;
};

//open active panel (and close unactive panels)
const setActivePanel2 = activePanelNum => {

    //remove active class from all the panels
    removeClasses2(DOMstrings2.stepFormPanels2, 'js-active');

    //show active panel
    DOMstrings2.stepFormPanels2.forEach((elem, index) => {
        if (index === (activePanelNum)) {
            elem.classList.add('js-active');
            setFormHeight2(elem);
        }
    })
};

//set form height equal to current panel height
const formHeight2 = (activePanel) => {
    const activePanelHeight = activePanel.offsetHeight;
    DOMstrings2.stepsForm2.style.height = `${activePanelHeight}px`;
};

const setFormHeight2 = () => {
    const activePanel = getActivePanel2();
    if (activePanel != undefined) {
        formHeight2(activePanel);
    }
}

//STEPS BAR CLICK FUNCTION
if (DOMstrings2.stepsBar2 != null) {
    DOMstrings2.stepsBar2.addEventListener('click', e => {
        //check if click target is a step button
        const eventTarget = e.target;
        if (!eventTarget.classList.contains(`${DOMstrings2.stepsBtnClass2}`)) {
            return;
        }

        //get active button step number
        const activeStep = getActiveStep2(eventTarget);

        //set all steps before clicked (and clicked too) to active
        setActiveStep2(activeStep);

        //open active panel
        setActivePanel2(activeStep);
    });
}

//PREV/NEXT BTNS CLICK
if (DOMstrings2.stepsForm2 != null) {
    DOMstrings2.stepsForm2.addEventListener('click', e => {
        const eventTarget = e.target;
        //check if we clicked on `PREV` or NEXT` buttons
        if (!((eventTarget.classList.contains(`${DOMstrings2.stepPrevBtnClass2}`)) || (eventTarget.classList.contains(`${DOMstrings2.stepNextBtnClass2}`)))) {
            return;
        }

        //find active panel
        const activePanel = findParent2(eventTarget, `${DOMstrings2.stepFormPanelClass2}`);
        let activePanelNum = Array.from(DOMstrings2.stepFormPanels2).indexOf(activePanel);

        //set active step and active panel onclick
        if (eventTarget.classList.contains(`${DOMstrings2.stepPrevBtnClass2}`)) {
            activePanelNum--;
        } else {
            activePanelNum++;
        }

        setActiveStep2(activePanelNum);
        setActivePanel2(activePanelNum);

    });
}

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight2, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight2, false);


//Timeline 3
//DOM elements
const DOMstrings3 = {
    stepsBtnClass3: 'multisteps-form__progress-btn3',
    stepsBtns3: document.querySelectorAll(`.multisteps-form__progress-btn3`),
    stepsBar3: document.querySelector('.multisteps-form__progress3'),
    stepsForm3: document.querySelector('.multisteps-form__form3'),
    stepsFormTextareas3: document.querySelectorAll('.multisteps-form__textarea3'),
    stepFormPanelClass3: 'multisteps-form__panel3',
    stepFormPanels3: document.querySelectorAll('.multisteps-form__form3 .multisteps-form__panel3'),
    stepPrevBtnClass3: 'js-btn-prev',
    stepNextBtnClass3: 'js-btn-next'
};

//remove class from a set of items
const removeClasses3 = (elemSet, className) => {
    elemSet.forEach(elem => {
        elem.classList.remove(className);
    });
};

//return exect parent node of the element
const findParent3 = (elem, parentClass) => {
    let currentNode = elem;
    while (!(currentNode.classList.contains(parentClass))) {
        currentNode = currentNode.parentNode;
    }
    return currentNode;
};

//get active button step number
const getActiveStep3 = elem => {
    return Array.from(DOMstrings3.stepsBtns3).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep3 = (activeStepNum) => {

    //remove active state from all the state
    removeClasses3(DOMstrings3.stepsBtns3, 'js-active');

    //set picked items to active
    DOMstrings3.stepsBtns3.forEach((elem, index) => {

        if (index <= (activeStepNum)) {
            elem.classList.add('js-active');
        }
    });
};

//get active panel
const getActivePanel3 = () => {
    let activePanel;
    DOMstrings3.stepFormPanels3.forEach(elem => {
        if (elem.classList.contains('js-active')) {
            activePanel = elem;
        }
    });
    return activePanel;
};

//open active panel (and close unactive panels)
const setActivePanel3 = activePanelNum => {

    //remove active class from all the panels
    removeClasses3(DOMstrings3.stepFormPanels3, 'js-active');

    //show active panel
    DOMstrings3.stepFormPanels3.forEach((elem, index) => {
        if (index === (activePanelNum)) {
            elem.classList.add('js-active');
            setFormHeight3(elem);
        }
    })
};

//set form height equal to current panel height
const formHeight3 = (activePanel) => {
    const activePanelHeight = activePanel.offsetHeight;
    DOMstrings3.stepsForm3.style.height = `${activePanelHeight}px`;
};

const setFormHeight3 = () => {
    const activePanel = getActivePanel3();
    if (activePanel != undefined) {
        formHeight3(activePanel);
    }
}

//STEPS BAR CLICK FUNCTION
if (DOMstrings3.stepsBar3 != null) {
    DOMstrings3.stepsBar3.addEventListener('click', e => {
        //check if click target is a step button
        const eventTarget = e.target;
        if (!eventTarget.classList.contains(`${DOMstrings3.stepsBtnClass3}`)) {
            return;
        }

        //get active button step number
        const activeStep = getActiveStep3(eventTarget);

        //set all steps before clicked (and clicked too) to active
        setActiveStep3(activeStep);

        //open active panel
        setActivePanel3(activeStep);
    });
}

//PREV/NEXT BTNS CLICK
if (DOMstrings3.stepsForm3 != null) {
    DOMstrings3.stepsForm3.addEventListener('click', e => {
        const eventTarget = e.target;
        //check if we clicked on `PREV` or NEXT` buttons
        if (!((eventTarget.classList.contains(`${DOMstrings3.stepPrevBtnClass3}`)) || (eventTarget.classList.contains(`${DOMstrings3.stepNextBtnClass3}`)))) {
            return;
        }

        //find active panel
        const activePanel = findParent3(eventTarget, `${DOMstrings3.stepFormPanelClass3}`);
        let activePanelNum = Array.from(DOMstrings3.stepFormPanels3).indexOf(activePanel);

        //set active step and active panel onclick
        if (eventTarget.classList.contains(`${DOMstrings3.stepPrevBtnClass3}`)) {
            activePanelNum--;
        } else {
            activePanelNum++;
        }

        setActiveStep3(activePanelNum);
        setActivePanel3(activePanelNum);

    });
}

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight3, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight3, false);


//Timeline 4
//DOM elements
const DOMstrings4 = {
    stepsBtnClass4: 'multisteps-form__progress-btn4',
    stepsBtns4: document.querySelectorAll(`.multisteps-form__progress-btn4`),
    stepsBar4: document.querySelector('.multisteps-form__progress4'),
    stepsForm4: document.querySelector('.multisteps-form__form4'),
    stepsFormTextareas4: document.querySelectorAll('.multisteps-form__textarea4'),
    stepFormPanelClass4: 'multisteps-form__panel4',
    stepFormPanels4: document.querySelectorAll('.multisteps-form__form4 .multisteps-form__panel4'),
    stepPrevBtnClass4: 'js-btn-prev',
    stepNextBtnClass4: 'js-btn-next'
};

//remove class from a set of items
const removeClasses4 = (elemSet, className) => {
    elemSet.forEach(elem => {
        elem.classList.remove(className);
    });
};

//return exect parent node of the element
const findParent4 = (elem, parentClass) => {
    let currentNode = elem;
    while (!(currentNode.classList.contains(parentClass))) {
        currentNode = currentNode.parentNode;
    }
    return currentNode;
};

//get active button step number
const getActiveStep4 = elem => {
    return Array.from(DOMstrings4.stepsBtns4).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep4 = (activeStepNum) => {

    //remove active state from all the state
    removeClasses4(DOMstrings4.stepsBtns4, 'js-active');

    //set picked items to active
    DOMstrings4.stepsBtns4.forEach((elem, index) => {

        if (index <= (activeStepNum)) {
            elem.classList.add('js-active');
        }
    });
};

//get active panel
const getActivePanel4 = () => {
    let activePanel;
    DOMstrings4.stepFormPanels4.forEach(elem => {
        if (elem.classList.contains('js-active')) {
            activePanel = elem;
        }
    });
    return activePanel;
};

//open active panel (and close unactive panels)
const setActivePanel4 = activePanelNum => {

    //remove active class from all the panels
    removeClasses4(DOMstrings4.stepFormPanels4, 'js-active');

    //show active panel
    DOMstrings4.stepFormPanels4.forEach((elem, index) => {
        if (index === (activePanelNum)) {
            elem.classList.add('js-active');
            setFormHeight4(elem);
        }
    })
};

//set form height equal to current panel height
const formHeight4 = (activePanel) => {
    const activePanelHeight = activePanel.offsetHeight;
    DOMstrings4.stepsForm4.style.height = `${activePanelHeight}px`;
};

const setFormHeight4 = () => {
    const activePanel = getActivePanel4();
    if (activePanel != undefined) {
        formHeight4(activePanel);
    }
}

//STEPS BAR CLICK FUNCTION
if (DOMstrings4.stepsBar4 != null) {
    DOMstrings4.stepsBar4.addEventListener('click', e => {
        //check if click target is a step button
        const eventTarget = e.target;
        if (!eventTarget.classList.contains(`${DOMstrings4.stepsBtnClass4}`)) {
            return;
        }

        //get active button step number
        const activeStep = getActiveStep4(eventTarget);

        //set all steps before clicked (and clicked too) to active
        setActiveStep4(activeStep);

        //open active panel
        setActivePanel4(activeStep);
    });
}

//PREV/NEXT BTNS CLICK
if (DOMstrings4.stepsForm4 != null) {
    DOMstrings4.stepsForm4.addEventListener('click', e => {
        const eventTarget = e.target;
        //check if we clicked on `PREV` or NEXT` buttons
        if (!((eventTarget.classList.contains(`${DOMstrings4.stepPrevBtnClass4}`)) || (eventTarget.classList.contains(`${DOMstrings4.stepNextBtnClass4}`)))) {
            return;
        }

        //find active panel
        const activePanel = findParent4(eventTarget, `${DOMstrings4.stepFormPanelClass4}`);
        let activePanelNum = Array.from(DOMstrings4.stepFormPanels4).indexOf(activePanel);

        //set active step and active panel onclick
        if (eventTarget.classList.contains(`${DOMstrings4.stepPrevBtnClass4}`)) {
            activePanelNum--;
        } else {
            activePanelNum++;
        }

        setActiveStep4(activePanelNum);
        setActivePanel4(activePanelNum);

    });
}

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight4, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight4, false);

$('.listProject .list-group-item').click(function (e) {

    setTimeout(
        function () {
            var lastChar = e.target.href.substr(e.target.href.length - 1);
            if (lastChar == 0) {
                setActiveStep(0);
                setActivePanel(0);
            } else if (lastChar == 1) {
                setActiveStep2(0);
                setActivePanel2(0);
            } else if (lastChar == 2) {
                setActiveStep3(0);
                setActivePanel3(0);
            } else if (lastChar == 3) {
                setActiveStep4(0);
                setActivePanel4(0);
            }
        }, 200
    );
})


// js sẻvice
$('.main-content .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.main-content .custom-nav',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
