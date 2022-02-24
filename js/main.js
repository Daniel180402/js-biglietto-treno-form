let km = document.getElementById('km');
let age = document.querySelector('#eta');
let nameu = document.getElementById('namei');
const baseprice = 0.27;
const GeneratorButton = document.getElementById('btninput');
const output = document.querySelector('#nome-pass');

GeneratorButton.addEventListener('click', function(){

    document.getElementById("risultato").style.display = 'block';

    console.log(nameu.value);
    let ticketPrice = baseprice * km.value;
    console.log(ticketPrice);
    console.log(age.value);

    if (age.value == "minorenne"){
        ticketPrice = ticketPrice * 0.83;
        console.log('Scontato del 17%');
        document.getElementById("tipo-biglietto").innerHTML = "Minore";

    } else if ( age.value == "over65" ){
        ticketPrice -= ticketPrice * 0.77;
        console.log("Scontato del 33%");
        document.getElementById("tipo-biglietto").innerHTML = "Over 65";

    } else {
        console.log("Nessuno sconto applicato");
        document.getElementById("tipo-biglietto").innerHTML = "Normale";
    }
    console.log(ticketPrice);
    output.innerHTML = nameu.value;

    const carrozza = Math.floor(Math.random() * 10) + 1;
    console.log(carrozza.value); 
    document.getElementById("carrozza").innerHTML = carrozza;
    const codicecp = Math.floor(Math.random() * 99999) + 1;
    console.log(codicecp.value); 
    document.getElementById("codicecp").innerHTML = codicecp;

    document.getElementById("prezzofinale").innerHTML = ticketPrice.toFixed(2) + " Euro";

})

const ticketReset = document.getElementById('btnreset');

ticketReset.addEventListener('click', function(){

    nameu.value = "";
    age.value = "maggiorenne";
    km.value = "";
    output.innerHTML = "";

    document.getElementById("risultato").classList.add('d-none');
});