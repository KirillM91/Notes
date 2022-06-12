async function patchDocument(url = "", data = {}) {

    let response = await fetch(url, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
                          
    })
    
    return response.json()

};


export function saveDocument(updatedNote) {

    if(document.getElementById("saveButton")) {
        document.getElementById("saveButton").addEventListener("click", () => {

            console.log(updatedNote);

            patchDocument("http://localhost:3000/users/editdocument", updatedNote)
            .then(responseData => {
                console.log("this: ",responseData);
                if(responseData) {
                    alert("Sparat!")
                } 
            })
            .catch((error) => {
                console.log(error);
                alert("Något gick fel!")
            });

            
        }) 
        
        
    }
}