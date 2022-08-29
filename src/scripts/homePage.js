import { ApiRequests } from "./requests.js"
import { RenderDesktop, RenderMobile} from "./render.js"
import { Modal } from "./modal.js"
import { UpdatePostCard } from "./edit.js"
import { Delete } from "./delete.js"

export class homePage{

    static renderHomeMobile (posts) {
        const token = localStorage.getItem("S5-10: token")
        const postsList = document.querySelector(".container__posts1")

        postsList.innerHTML = ''

        if(!token) {
            window.location.assign("../../index.html")
        }

        RenderMobile.renderPostsListMobile(posts)
    }

    static renderHomeDesktop (posts) {
        const token = localStorage.getItem("S5-10: token")
        const postsList = document.querySelector(".container__posts2")

        postsList.innerHTML = ''

        if(!token) {
            window.location.assign("../../index.html")
        }

        RenderDesktop.renderPostsListDesktop(posts)
    }
    static async newPage (){
        let cont = 1
        const posts = await ApiRequests.getPosts(`${cont}`)

        homePage.renderHomeDesktop(posts.data)
        homePage.renderHomeMobile(posts.data)

        Modal.showEditModal()
        Modal.showDeleteModal()
        Modal.closeDeleteModal()

        Delete.deletePostDesktop()
        Delete.deletePostMobile()

        UpdatePostCard.updateMobile()
        UpdatePostCard.updateDesktop()

        const btnNewPage = document.getElementById("newPost")
        
        btnNewPage.addEventListener("click", async (event) =>{
            event.preventDefault()

            if(posts.nextPage){

                cont++
                const loadMorePage = await ApiRequests.getPosts(cont)

                RenderDesktop.renderPostsListDesktop(loadMorePage.data)
                RenderMobile.renderPostsListMobile(loadMorePage.data)

                Modal.showEditModal()
                Modal.showDeleteModal()
                Modal.closeDeleteModal()

                Delete.deletePostDesktop()
                Delete.deletePostMobile()

                UpdatePostCard.updateMobile()
                UpdatePostCard.updateDesktop()
            }
        })
    }

    static renderCreatePost (){
        const text = document.getElementById("inputCaixaDeTexto")
        const btnPost = document.getElementById("btnPost")

        btnPost.addEventListener("click", () => {
            
            const newPost = {
                content: text.value
            }
            
        ApiRequests.createPost(newPost)
        })
    }

    static logout (){
        const btnLogout = document.getElementById("btnLogout")
        btnLogout.addEventListener("click", (event) =>{
            event.preventDefault()
            localStorage.clear()
            window.location.assign("../../index.html")
        })
    }

    static async userInfo (){
        const userImg = document.getElementById("userImg")
        const userName = document.getElementById("userName")
        const user = await ApiRequests.getUser()

        userImg.src = user.avatarUrl
        userName.innerText = user.username
    }
}




homePage.newPage()
homePage.renderCreatePost()

homePage.userInfo()
homePage.logout()


