import { clickOnLoginButton } from "./loginFunctionality.js"

export function loginView() {

    let main = document.getElementById("mainWrapper");

    let loginWrapper = document.createElement("div");
        loginWrapper.className = "loginWrapper";
        loginWrapper.id = "loginWrapper"

    let userNameInput = document.createElement("input");
        userNameInput.className = "userNameInput";       
        userNameInput.placeholder = "Anvädarnamn";

    let passwordIput = document.createElement("input");
        passwordIput.className = "passwordInput";        
        passwordIput.placeholder = "Lösenord";

    let loginButton = document.createElement("button");
        loginButton.className = "loginButton";
        loginButton.id = "loginButton";
        loginButton.innerText = "Logga in";

    let cred = document.createElement("p");
        cred.className = "cred"
        cred.innerText = "Photo by Jess Bailey on Unsplash"

    main.innerHTML = ""    
    loginWrapper.append(userNameInput, passwordIput, loginButton, cred);
    main.append(loginWrapper);



    clickOnLoginButton(userNameInput, passwordIput);

};