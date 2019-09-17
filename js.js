let lukitus = false;

let lock1 = lock2 = lock3 = 0; 

let images = [ "paaryna.png", "kirsikka.png", "melooni.png"];
let rahat = 50;
let panos = 1; 


let slot1 = 0;
let slot2 = 1; 
let slot3 = 2;


//span, joka sulkee modalin 
var span = document.getElementsByClassName("close")[0];

// kun käyttäjä painaa nappia 
function showModal(elemId){
    let modaali = document.getElementById(elemId);
    modaali.style.display = "block";
}

//kun painettaan  (X) sulkee modaalin
span.onclick = function() {
    modaali.style.display = "none";
}


// kun käyttäjä painaa jonnekkin ulos modalista, sulje

window.onclick = function(event){
    
    
    let modaali = event.target;
    if (modaali.id == "winModal" || modaali.id == "loseModal") {
        modaali.style.display = "none";
    }
        


}





// Panos

function asetaPanos(n) {
    panos = n;
    update();   
}   

function update (){

    document.getElementById("k1").src = "./IMG/" + images[slot1];
    document.getElementById("k2").src = "./IMG/" + images[slot2];
    document.getElementById("k3").src = "./IMG/" + images[slot3];

    document.getElementById("spanPanos").innerHTML = panos;
    document.getElementById("rahat").innerHTML = rahat;

    // Lukituksen kuvat


}
   

// Pelaa napin toiminta


function slot(){
    return Math.floor(Math.random()* images.length);
}
function slot(){
    return Math.floor(Math.random()* images.length);
}


function pelaaPainike () {
    
    rahat = rahat - panos;
    
    
    // Tutki ennen slot()-funktion kutsua onko slotti lukittu ja arvo vasta sitten kuva

    if (lock1 == 0) {
        slot1 = slot();
    }
        
    
    if (lock2 == 0) {
        slot2 = slot();
    }
        
    if (lock3 == 0) {
        slot3 = slot(); 
    }


    update();

    if (lock1 == 1 || lock2 == 1 || lock3 == 1) { 
        lukitus == false;
        lock1 = 0;
        lock2 = 0; 
        lock3 = 0;
        update();
    }
    else {
        lukitus = true; 
    }

    tarkistaVoitto();



  

} 
    
   
   

/************************************ *
Lukituksen toiminta
***************************************/



function lukitse(j) {
    if (lukitus == false){ 
        return
    }

    if (j.id == "lock1") {
        if (lock1 == 0) {
            lock1 = 1;
        } else {
            lock1 = 0;
        }
        console.log(lock1);
        vaihdaKuva(j);
    }

    if (j.id == "lock2") {
        console.log(j.id)
        if (lock2 == 0) {
            lock2 = 1;
        } else {
            lock2 = 0;
        }
        console.log(lock2);
        vaihdaKuva(j);
    }

    if (j.id == "lock3") {
        console.log(j.id)
        if (lock3 == 0) {
            lock3 = 1;
        } else {
            lock3 = 0;
        }
        console.log(lock3);
        vaihdaKuva(j);
    }

}

// Lukituspainikkeen kuvan vaihto
function vaihdaKuva(elem) {
    if (elem.dataset.lock == 'false')   { 
        document.getElementById(elem.id).src = "./IMG/lockv3.png";
        elem.dataset.lock = "true";
    }
    else {
        document.getElementById(elem.id).src = "./IMG/lock.png"
        elem.dataset.lock = "false"; 
    }
}

   //voiton tarkistus
   
function tarkistaVoitto(){
    
        if (slot1 == 0 && slot2 == 0 && slot3 == 0) {    
            rahat = rahat + 2;
            update();
            showModal('winModal');

        
        }
        else if (slot1 == 1 && slot2 == 1 && slot3 == 1) {
            rahat = rahat + 5;
            update();
           showModal('winModal');

           
        }
        else if (slot1 == 2 && slot2 == 2 && slot3 == 2) {
            rahat = rahat + 10;
            update();
            showModal('winModal');

            }

        else if (rahat <= 0) {
            update();
            showModal('loseModal');   

        }
        else {
           update();
        }
        
        

}
