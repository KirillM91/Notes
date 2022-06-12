import { editView } from "./editView.js"

export function editDocument() {
    
    if(document.getElementById("editButton")) {
        document.getElementById("editButton").addEventListener("click", () => {
            
            editView();

        })    
    }
}