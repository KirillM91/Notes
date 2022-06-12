import { saveDocument } from "./saveDocument.js";
import { logOut } from "./logOut.js";
import { printDocuments } from "./getDocuments.js"
import { newNote } from "./newNote.js";

export function documentView() {

    tinymce.remove();

    if(document.getElementById("documentArea")) {
        document.getElementById("documentArea").style.display = "none";
    }

    if(document.getElementById("notesWrapper")) {
        document.getElementById("notesWrapper").style.display = "block";
    }
    
    

    let main = document.getElementById("mainWrapper");

    let documentViewWrapper = document.createElement("div");
        documentViewWrapper.className = "documentViewWrapper";
        documentViewWrapper.id = "documentViewWrapper";        

    let notesWrapper = document.createElement("div");
        notesWrapper.className = "notesWrapper";
        notesWrapper.id = "notesWrapper";
    
    let documentArea = document.createElement("div");
        documentArea.className = "documentArea";
        documentArea.id = "documentArea";
        documentArea.innerHTML = "";
        documentArea.style.display = "none";

    let logOutButton = document.createElement("button");
        logOutButton.className = "logOutButton";
        logOutButton.id = "logOutButton";
        logOutButton.innerText = "Logga ut";

    let newNoteButton = document.createElement("button");
        newNoteButton.className = "newNoteButton";
        newNoteButton.id = "newNoteButton";
        newNoteButton.innerText = "Nytt Document";
   

    
    // documentViewWrapper.append(textAreaWrapper, documentArea, saveButton, editButton, logOutButton);
    main.innerHTML = "";
    documentViewWrapper.append(notesWrapper, documentArea, newNoteButton, logOutButton);
    
    main.append(documentViewWrapper);

    printDocuments();    
    saveDocument();
    newNote();
    logOut();
};