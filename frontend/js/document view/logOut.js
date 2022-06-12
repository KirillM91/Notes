import { loginView } from "../login/loginView.js";

export function logOut() {

    if(document.getElementById("logOutButton")) {

        document.getElementById("logOutButton").addEventListener("click", () => { 

            localStorage.removeItem("userID");
            loginView();

        })

    }
    
}