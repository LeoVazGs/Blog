
import { ApiRequests } from "./requests.js";

class cadastrar { 

    static createUser() {

        const nameInput = document.getElementById("nomeDeUsuarioCadastro")
        const emailInput = document.getElementById("emailCadastro")
        const avatarInput = document.getElementById("fotoCadastro")
        const passwordInput = document.getElementById("senhaCadastro")
        const btnCadastrar = document.getElementById("btnCadastro")

        btnCadastrar.addEventListener("click", async (event) => {

            event.preventDefault()

            const data = {

                username: nameInput.value,
                email: emailInput.value,
                avatarUrl: avatarInput.value,
                password: passwordInput.value
            }

            await ApiRequests.cadastrar(data)
            
        })
        
    }
}

cadastrar.createUser()
