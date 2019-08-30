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
// Panos 
function panos(elem) {
    console.log(elem.id);
    if (elem.dataset.change == 'false') {
        document.getElementById(elem.id)= Panos == 2 
        elem.dataset.change = "true"; 

}
else {
    document.getElementById(elem.id)= Panos == 1
    elme.dataset.change = "false";
}

}




// Pelaa napin toiminta
