import { ApiRequests } from "./requests.js";
import { Modal } from "./modal.js"


export class UpdatePostCard { 

  static updateMobile () {
    const updateModalBtn = document.querySelector('.buttonEdit')
    const modal1 = document.querySelector('.main__modais__modalEdit1')
    const postEditContent = document.getElementById("main__modais__modalEdit1__input")
    const updateBtn = document.getElementById("main__modais__modalEdit1__buttonEdit")
    

    if(updateModalBtn){
      updateBtn.addEventListener('click', async (event) => {
        event.preventDefault()
      

        const updatePostId = localStorage.getItem("S5-10: postId")
    

        const data = {
          content: postEditContent.value
        }
        await ApiRequests.updatePost(data, updatePostId)

        modal1.classList.add('hidden')
        
        localStorage.removeItem("S5-10: postId")
        window.location.assign("../pages/homePage.html")
      })
    }
}
static updateDesktop () {
  const updateModalBtn = document.querySelector('.buttonEdit')
  const modal1 = document.querySelector('.main__modais__modalEdit2')
  const postEditContent = document.getElementById("main__modais__modalEdit2__input")
  const updateBtn = document.getElementById("main__modais__modalEdit2__buttonEdit")
  

  if(updateModalBtn){
    updateBtn.addEventListener('click', async (event) => {
      event.preventDefault()
    

      const updatePostId = localStorage.getItem("S5-10: postId")
  

      const data = {
        content: postEditContent.value
      }
      await ApiRequests.updatePost(data, updatePostId)

      modal1.classList.add('hidden')
      
      localStorage.removeItem("S5-10: postId")
      window.location.assign("../pages/homePage.html")
    })
  }
}
}

