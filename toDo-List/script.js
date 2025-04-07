function addToDo() {

    let inputValue = toDoField.value.trim();    //um überflüssige Leerzeichen zu entfernen, falls jemand nur Leerzeichen eingibt

    /* Prüft, ob das Feld leer ist. Warum === und nicht == -> vergleicht nicht nur den Wert, sondern auch den Datentyp, 
       sodass nur der exakte leere String gemeint ist und nicht z.B. null, false, undefinded   */
    if (inputValue === ""){                     
        alert("Bitte gib einen Eintrag ein!")
        return;
    }

    /* zwischen den einzelnen Texten '<li>' '</li>' wird unsere id eingefügt, toDoField.value wird ersetzt z.B. mit Tee 
    und dann wird durch die Pluse der Text erweitert zu <li> Tee </li> und somit die Liste ergänzt */
    toDoList.innerHTML += '<li><input type="checkbox">' + toDoField.value + '</li>';       
    toDoField.value = '';
}

function deleteSelected() {
    /* Holt alle Checkboxen aus der Liste, document: Repräsentiert gesamtes HTML-Dokument
       querySelectorAll(...): Wählt alle Elemente aus, die zum CSS-Selektor passen
       #: gibt an, dass es sich um eine ID handelt
       li: sucht nach li-Elementen, die sich innerhalb der ID toDoList befinden
       input[type='checkbox']: Wählt Checkboxen innerhalb der li-Elemente aus
    */
    let checkboxes = document.querySelectorAll("#toDoList li input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {                 //falls Häkchen
            checkbox.parentElement.remove();    //Löscht das Listenelement, in dem Checkbox steckt 
        }
    });
}
