import { openDocument } from "./openDocument.js"

async function fetchDocuments(url = "", data = {}) {

    let response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
                          
    })

    console.log("data", JSON.stringify(data))

    return response.json()

};

export function printDocuments() {

    
    if (localStorage.getItem("userID")) {

        let noteList = document.createElement("ul");
        noteList.id = "noteList"
        noteList.innerHTML = "";
    
        let user = {
            userId: JSON.parse(localStorage.getItem("userID"))
        }

        console.log(user);
        fetchDocuments("http://localhost:3000/users/documents", user)
        .then(responseData => {

            console.log("Response data",responseData);
            
            let notes = responseData;
            

            for (let note in notes) {

                let noteName = document.createElement("li");
                    noteName.innerText = notes[note].noteName;
                    noteName.className = "noteName";
                    noteName.id = notes[note].noteId;
                    
                noteList.append(noteName);
            } 
            document.getElementById("notesWrapper").innerHTML = "";
            document.getElementById("notesWrapper").append(noteList);

            openDocument();

        })
        

    }
}