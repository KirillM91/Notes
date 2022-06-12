import { goToDocumentView } from "./goToDocumentView.js"
import { printDocuments } from "../document view/getDocuments.js"

async function loginAuth(url = "", data = {}) {

    let response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)        
    })

    console.log(JSON.stringify(data))

    return response.json()

};

export function clickOnLoginButton(userNameInput, passwordIput) {

    let loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", () => {

        let loginInfo = {
            userName: userNameInput.value,
            password: passwordIput.value 
        }

        console.log(loginInfo, JSON.stringify(loginInfo))

        loginAuth("http://localhost:3000/users/login", loginInfo)
        .then(responseData => {
            console.log(responseData[0].userId)
            if(responseData[0].userId) {
                localStorage.setItem("userID", JSON.stringify(responseData[0].userId));
                goToDocumentView();
                printDocuments();
            }
            
        })

    })

}