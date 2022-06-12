import { documentView } from "./documentView.js";

export function noteView(name, noteText) {

    let noteName = document.createElement("H2");
        noteName.className = "headingName";
        noteName.id = name;
        noteName.innerText = name;

    let note = document.createElement("article");
        note.className = "note";
        note.innerHTML = noteText;

    let editButton = document.createElement("button");
        editButton.className = "editButton";
        editButton.id = "editButton";        
        editButton.innerText = "Redigera";
    
    let backButton = document.createElement("button");
        backButton.className = "backButton";
        backButton.id = "backButton";        
        backButton.innerText = "Tillbaka";
        backButton.addEventListener("click", () => {               
            documentView();
        })

    
    document.getElementById("documentArea").innerHTML = "";
    document.getElementById("documentArea").style.display = "block";
    document.getElementById("documentArea").append(noteName, note, editButton, backButton);

    

}