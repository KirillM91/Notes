import { loginView } from "./login/loginView.js"
import { documentView } from "./document view/documentView.js"
import { goToDocumentView } from "./login/goToDocumentView.js"
import { logOut } from "./document view/logOut.js"

console.log("yo yo!");
documentView();
loginView();

if(localStorage.getItem("userID")){
    goToDocumentView();
} else {
    logOut();
}


