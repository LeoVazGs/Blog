
class ApiRequests {

    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("S5-10: token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async login(body) {

        const userLogin = await fetch (`${this.baseUrl}/users/login`,{

           method: "POST", 
           headers: this.headers,
           body: JSON.stringify(body)
        })

        .then(res => res.json())
        .then(res => {
            localStorage.setItem("S5-10: userId", res.userId)
            localStorage.setItem("S5-10: token", res.token || '')
            window.location.assign("src/pages/homePage.html")
            return res
            })

        .catch(err => console.log(err))
        return userLogin
    }

    static async cadastrar(body) {

        const newUser = await fetch (`${this.baseUrl}/users/register `,{

        method : "POST",
        headers: this.headers,
        body: JSON.stringify(body)
    })

        .then(res => res.json())
        .then(res => { 
            console.log(res)
            window.location.assign("../../index.html")
        })
        .catch(err => console.log(err))
        return newUser
    }

    static async getPosts(page) {
        const posts = await fetch (`${this.baseUrl}/posts?page=${page}`, {
            method : "GET",
            headers: this.headers,     
        })    
        
        .then (res => res.json())
        .catch (err => console.log(err))

        return posts
    }

    static async createPost (body) {
        const newPosts = await fetch (`${this.baseUrl}/posts`, {
            method : "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })    
        
        .then (res => res.json())
        .then (res => {
            console.log(res)
            window.location.assign("../pages/homePage.html")
        })
        .catch (err => console.log(err))

        return newPosts
    }

    static async getUser() {
        const user = await fetch (`${this.baseUrl}/users/${localStorage.getItem("S5-10: userId")}`, {
            method : "GET",
            headers: this.headers,
        })    
        .then (res => res.json())
        .catch (err => console.log(err))

        return user
    }

    static async updatePost(body, id){
        const post = await fetch (`${this.baseUrl}/posts/${id}`, {
            method : "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })    
        .then (res => res.json())
        .catch (err => console.log(err))

        return post
    }

    static async deletePost(id) {
        const deletedPost = await fetch(`${this.baseUrl}/posts/${id}`, {
          method: "DELETE",
          headers: this.headers
        })
        .then(res => res.json())
        .then(res => {
          console.log('produto removido com sucesso')
          window.location.assign("../pages/homePage.html")
          return res
        })
        .catch(err => {
          console.log(`message: ${err}`)
        })
    
        return deletedPost
      }
    
}

export {ApiRequests}