async function saveDocument(url = "", data = {}) {

    let response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
                          
    })
    
    return response.json()

};


export function saveNewNote(newNote) {

    if(document.getElementById("saveNewButton")) {
        document.getElementById("saveNewButton").addEventListener("click", () => {
            
            console.log(newNote);
            saveDocument("http://localhost:3000/users/newdocument", newNote)
            .then(responseData => {
                console.log("this: ",responseData);
            })

            
        }) 
        
        
    }
}