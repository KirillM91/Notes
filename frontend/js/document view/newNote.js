import { documentView } from "./documentView.js";
import { saveNewNote } from "./saveNewNote.js";

export function newNote() {

    document.getElementById("newNoteButton").addEventListener("click", () => {

        let newNote = {
            note: "",
            noteName: "",
            userId: JSON.parse(localStorage.getItem("userID"))            
        }
 
        let noteName = document.createElement("input");
            noteName.className = "headingName";  
            noteName.id = "noteName";  
            

            noteName.addEventListener("input", (e) => {
                newNote.noteName = e.target.value;
            });


        let textArea = document.createElement("textarea");
            textArea.id = "textArea";            

        let textAreaWrapper = document.createElement("div");
            textAreaWrapper.id = "textAreaWrapper";   

        let saveButton = document.createElement("button");
            saveButton.className = "saveButton";
            saveButton.id = "saveNewButton";
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
        document.getElementById("newNoteButton").style.display = "none";
        textAreaWrapper.append(textArea);
        document.getElementById("documentArea").append(noteName, textAreaWrapper, saveButton, backButton);

        tinymce.init({
            selector: "#textArea",        
            
            setup: function(editor) {
                editor.on("change", function(){
                    editor.save();
                    
                    newNote.note = textArea.value.replaceAll('"', "'");
                })
            }
        });

        saveNewNote(newNote);

    })

}