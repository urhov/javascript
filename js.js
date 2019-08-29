// Lukituspainikkeen kuvan vaihto
function lukitse(elem) {
    console.log(elem);
    if (elem.dataset.lock == 'false')   { 
        document.getElementById(elem.id).src = "./IMG/lockv3.png";
        elem.dataset.lock = "true";
    }
    else {
        document.getElementById(elem.id).src = "./IMG/lock.png"
        elem.dataset.lock = "false"; 
    }
}

    

