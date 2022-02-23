let username;
let km;
let eta;
let basekm = 0.27;
let price;

document.querySelector("#btninput").addEventListener('click', function() {
    document.getElementById("risultato").style.display = 'block';
    username = document.getElementById("namei");
    console.log(username.value);
    document.querySelector("#nome-pass").innerHTML = username.value;

    
    km = document.getElementById("km");
    console.log(km.value);
    if( km.value < 1 ){
        console.warn("I'm sorry, the numer you entered is to small, please reload the page to try again");
    }
    price = km * basekm;
    console.log(price.value);


    eta = document.getElementById("eta");
    console.log(eta.value);  
    if(eta = "minorenne"){
        discount = (price / 100) * 17;
        finalprice = price - discount;
        document.getElementById("tipo-biglietto").innerHTML = "Minori";
    }
    else if(eta = "over65"){
        discount = (price / 100) * 33;
        finalprice = price - discount;
        document.getElementById("tipo-biglietto").innerHTML = "Over 65";
    }
    else{
        finalprice = price;
        document.getElementById("tipo-biglietto").innerHTML = "Normale";
    }

    const carrozza = Math.floor(Math.random() * 10) + 1;
    console.log(carrozza.value); 
    document.getElementById("carrozza").innerHTML = carrozza;
    const codicecp = Math.floor(Math.random() * 99999) + 1;
    console.log(codicecp.value); 
    document.getElementById("codicecp").innerHTML = codicecp;
    
    document.getElementById("prezzofinale").innerHTML = finalprice.toFixed(2) + " Euro";
})