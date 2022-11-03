let emailEl = document.getElementById("email");
let submit = document.getElementById("verifica");

//inizializzo array di email
const email = ["Luca@gmail.com", "Marco@gmail.com", "Paolo@gmail.com"];



submit.addEventListener("click", function () {
  let trovato = false;
  for (let i = 0; i < email.length; i++) {
    // controllo  se il valore che sto cercando corrisponde a quello che sto analizzando
    if (email[i] === emailEl.value) {
      console.log("Accesso consentito");
      trovato = true;
    }
  }

  // IN BASE AL RISULTATIO DEL CICLO MOSTRO UN MESSAGGIO NELL'HTML
  // POSSO FARLO CON UNA VARIABILE BOOLEANA
  if (trovato === true) {
    console.log("Accesso consentito");

    let Output = document.getElementById("risultato");
    Output.innerHTML = emailEl.value + " <br> Accesso consentito ";
    // cancello il contenuto inserito nel form
    emailEl.value = "";
  } else {
    console.log("Non trovato");
    let Output = document.getElementById("risultato");
    Output.innerHTML = "Accesso negato";
    // cancello il contenuto inserito nel form
    emailEl.value = "";
  }
});
