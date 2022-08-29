import { ApiRequests } from "./requests.js"


class LoginPage {

    static async doLogin() {
        const token = localStorage.getItem("S5-10: token")

        if(token) {
            window.location.assign("src/pages/homePage.html")
        }

        const emailInput = document.getElementById("emailLogin")
        const passwordInput = document.getElementById("passwordLogin" )
        const btnLogin = document.getElementById("btnLogin")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()
            const data = {
                email: emailInput.value,
                password: passwordInput.value
            }

            ApiRequests.login(data)
            
        })
        
    }
}


LoginPage.doLogin()



