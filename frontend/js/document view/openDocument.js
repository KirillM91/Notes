import { noteView } from "./noteView.js"
import { editView } from "./editView.js"

async function fetchDocument(url = "", data = {}) {

    let response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
                          
    })

    console.log("data", JSON.stringify(data))

    return response.json()

};

export function openDocument() {

    let listOfNotes = document.querySelectorAll(".noteName");
    
    listOfNotes.forEach(note => {
        note.addEventListener("click", (e) => {

            localStorage.setItem("noteID", e.target.id);

            let noteNr = e.target.id;
            let note = {
                noteId: noteNr
            };

            fetchDocument("http://localhost:3000/users/document", note)
            .then(responseData => {
                
                noteView(responseData[0].noteName, responseData[0].note)
                editView(responseData[0].noteName, responseData[0].note)
                
            });
        });
    });
};