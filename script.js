//Variabili

var nome , chilometri , anni;
var genera , annulla;
var valnome , valchilometri , valanni;
var prezzo;
var scontomin , scontomax;
var prezzofin;
var tipologia;
var random, min , max;


//Acquisizione dati inseriti dall'utente
nome = document.getElementById("nome");
chilometri = document.getElementById("chilometri");
anni = document.getElementById("anni");

//Acquisizione bottoni
genera = document.getElementById("genera");
annulla = document.getElementById("annulla");

//Generazione numero random
  min = Math.ceil(10);
  max = Math.floor(1);
  random = Math.floor(Math.random() * (max - min)) + min;

//Quando l'utente preme il tasto "genera"
genera.addEventListener("click",
  function(){
    valnome = nome.value; //acquisizione valore di nome
    valchilometri = chilometri.value; //acquisizione valore di chilometri
    valanni = anni.value; //acquisizione valore di anni

    //Calcolo prezzo e sconti
    prezzo = valchilometri * 0.21;
    scontomin = prezzo / 100 * 20;
    scontomax = prezzo / 100 * 40;

    //condizioni di sconto
    if (valanni < 18){
      prezzofin = prezzo - scontomin;
      tipologia = "Under 18";
    }
    else if (valanni > 64){
      prezzofin = prezzo - scontomax;
      tipologia = "Over 65";
      random = "Prioritaria";
    }
    else{
      prezzofin = prezzo;
      tipologia = "Standard";
    }

    //Ouput in pagina per l'utente
    document.getElementById("nomepag").innerHTML = valnome;
    document.getElementById("tipo").innerHTML = tipologia;
    document.getElementById("random").innerHTML = random;
    document.getElementById("CP").innerHTML = "95778";
    document.getElementById("prezzopag").innerHTML = prezzofin + " €";
    document.getElementById("biglietto").style.display = "block";
  }
);

//Quando l'utente preme il tasto "annulla"
annulla.addEventListener("click",
  function(){
    document.getElementById("nome").value = "\n";
    document.getElementById("chilometri").value = "\n";
    document.getElementById("anni").value = "\n";
    document.getElementById("biglietto").style.display = "none";
  }
);
