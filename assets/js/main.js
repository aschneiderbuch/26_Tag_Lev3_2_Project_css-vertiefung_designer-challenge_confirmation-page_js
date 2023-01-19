console.log("ist es verbunden?")


/* * 
Frage

Email eingeben in input Feld
        Variable let für email 
            Text des Inputs email abgreifen
                    InnerHTML des Inputs email abgreifen

            Submit Button gibt alert aus + Text, das email ... kontakiert wird und wir eine email erhalten.
                    EventListener für Submit Button



Email in einem alert Feld mit ausgeben + Text usw.


*/
let input_email = document.getElementById("input_email");
let button_submit = document.getElementById("button_submit");



console.log(input_email);
console.log(input_email.innerHTML);
console.log(input_email.value);

button_submit.addEventListener("click", function_emailAbfrageVonInput )




function function_emailAbfrageVonInput() {
    console.log("funktion wird aufgerufen");
console.log(input_email.value);
    alert("Hallo lieber User, wir haben deine Email-Adresse " + input_email.value + " erfolgreich erhalten und schicken dir einen Bestätigungslink per E-Mail. \n \n \n Wir wünschen dir noch alles gute." );
    console.log(alert + " alert Ausgabe funktioniert + aufgerufen");
}








