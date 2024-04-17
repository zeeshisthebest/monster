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
