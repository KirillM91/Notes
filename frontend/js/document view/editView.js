import { saveDocument } from "./saveDocument.js";
import { documentView } from "./documentView.js";

export function editView(name, noteText) {

    document.getElementById("editButton").addEventListener("click", () => { 

        let updatedNote = {
            note: noteText,
            noteName: name,
            userId: JSON.parse(localStorage.getItem("userID")),
            noteId: JSON.parse(localStorage.getItem("noteID"))
        }
 
        let noteName = document.createElement("input");
            noteName.className = "headingName";  
            noteName.id = "noteName";  
            noteName.value = name;

            noteName.addEventListener("input", (e) => {
                updatedNote.noteName = e.target.value;                
                
            });


        let textArea = document.createElement("textarea");
            textArea.id = "textArea";
            textArea.value = noteText; 

        let textAreaWrapper = document.createElement("div");
            textAreaWrapper.id = "textAreaWrapper";   

        let saveButton = document.createElement("button");
            saveButton.className = "saveButton";
            saveButton.id = "saveButton";
            saveButton.innerText = "Spara"; 

        let backButton = document.createElement("button"); 
            backButton.className = "backButton"; 
            backButton.innerText = "Tillbaka"; 
            backButton.addEventListener("click", () => {               
                documentView();
            })

            
        document.getElementById("documentArea").innerHTML = "";
        document.getElementById("documentArea").style.display = "inline-block";
        
        document.getElementById("notesWrapper").style.display = "none";
        textAreaWrapper.append(textArea);
        document.getElementById("documentArea").append(noteName, textAreaWrapper, saveButton, backButton);

        tinymce.init({
            selector: "#textArea",        
            
            setup: function(editor) {
                editor.on("change", function(){
                    editor.save();
                    
                    updatedNote.note = textArea.value.replaceAll('"', "'");
                })
            }
        });

        saveDocument(updatedNote);

    }); 
};