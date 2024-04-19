let index = 0;
let parnt;
const IMAGE_ELEM_INDEX = 1;
// Shows The Image
function popUp (elem) {
    document.addEventListener('keyup', navListener);
    document.querySelector("body").classList.add('overflow-hidden');
    let div = document.getElementById('overlay');

    // Finding Index
    for (let i = 0; i < elem.parentElement.children.length; i++) {
        if (elem.parentElement.children[i] === elem) {
            index = i;
        }
    }

    // Adding reference to parent
    if (!parnt) parnt = elem.parentElement;

    div.children[IMAGE_ELEM_INDEX].src = elem.children[0].src;
    div.classList.remove('hidden');
    div.classList.add('flex');
    div.addEventListener('click', navListener);
    fadeBtns(document.getElementById('overlay'));
    return;
}

// Listens for navigation of images
function navListener (event) {
    if (event.type === 'click') {
        if (event.target.tagName === "IMG" && (event.target.alt === 'left' || event.target.alt === 'right')) {
            event.target.alt === 'left' ? changeImage('ArrowLeft') : changeImage("ArrowRight");
        } else {
            closePopUp();
        }
    } else if (event.type === 'keyup') {
        changeImage(event.code);
    }
    return
}

// Closese
function closePopUp () {
    document.querySelector("body").classList.remove('overflow-hidden');
    let div = document.getElementById('overlay');
    div.classList.remove('flex');
    div.classList.add('hidden');
    document.removeEventListener('keyup', navListener);
}

// Changes only the image or closes it
function changeImage (direction) {
    if (direction === 'ArrowLeft') {
        if (index > 0) {
            document.getElementById('overlay').children[IMAGE_ELEM_INDEX].src = parnt.children[--index].children[0].src;
        }
    }
    if (direction === 'ArrowRight') {
        if (index < parnt.children.length - 1) {
            document.getElementById('overlay').children[IMAGE_ELEM_INDEX].src = parnt.children[++index].children[0].src;
        }
    }
    if (direction === 'Escape') {
        closePopUp();
    }

    fadeBtns(document.getElementById('overlay'));
}

// This Function Changes the Opacity of buttons
function fadeBtns (div) {
    if (index === 0) {
        div.children[IMAGE_ELEM_INDEX - 1].classList.add("opacity-50");
    } else {
        div.children[IMAGE_ELEM_INDEX - 1].classList.remove("opacity-50");
    }

    if (index === parnt.children.length - 1) {
        div.children[IMAGE_ELEM_INDEX + 1].classList.add("opacity-50");
    } else {
        div.children[IMAGE_ELEM_INDEX + 1].classList.remove("opacity-50");
    }
}

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const nav = document.querySelector('nav');

    const toggleMenu = () => {
        nav.classList.toggle('hidden');
        nav.classList.toggle('block');
        hamburgerBtn.classList.toggle('toggle-btn');

    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    nav.addEventListener('click', toggleMenu);

    const HEAD = "Welcome to the ";
    const COLOR_HEAD = "World of Monsters";
    const HEADING_ELEM = document.getElementById("head");
    const HEADING_COLOR_ELEM = document.getElementById("color_head");
    let i = 0;
    const REPEAT_TIME = 150;

    function typeHeading () {
        HEADING_ELEM.innerHTML += HEAD.substring(i, i + 1);
        i++;
        if (i < HEAD.length) {
            setTimeout(typeHeading, REPEAT_TIME);
        } else {
            i = 0;
            typeHeading2();
        }
    }

    function typeHeading2 () {
        HEADING_COLOR_ELEM.innerHTML += COLOR_HEAD.substring(i, i + 1);
        i++;
        if (i < COLOR_HEAD.length) {
            setTimeout(typeHeading2, REPEAT_TIME);
        } else {
            setTimeout(() => {
                document.getElementById('cursor').classList.add('after:animate-cursor-blink');
            }, 200);
        }
    }

    typeHeading();
}

document.addEventListener('DOMContentLoaded', initApp);
