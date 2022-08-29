export class Modal {
    static showEditModal() {
      const modalEdit = document.getElementById("modalEdit")
      
      const modalEditButton = document.querySelectorAll(".buttonEdit")
      
      modalEditButton.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          localStorage.setItem("S5-10: postId", event.target.id)
          modalEdit.classList.toggle('hidden')
        })
      })
    }

  
  static closeDeleteModal() {
    const closeBtn = document.querySelectorAll('#buttonClose')
    const modal = document.querySelectorAll(".modal")

    closeBtn.forEach( (button) => {
      button.addEventListener('click', () => {
      
        modal[0].classList.add('hidden')
        modal[1].classList.add('hidden')
        
      })
    })
  
  }

  static showDeleteModal() {
    const modalDeleteBtn = document.querySelectorAll('.buttonDelete')
    const modal = document.getElementById("modalDelete")
    

    modalDeleteBtn.forEach(btn => {
      btn.addEventListener('click', (event) => {
        localStorage.setItem("S5-10: postId", event.target.id)
        modal.classList.toggle('hidden')
      })
    })
  }

}
    