 let store = []

  function addData(){

     let id=document.getElementById("id").value
     let username=document.getElementById("username").value
     let email=document.getElementById("email").value

     let imgproduct = {
        id1:id,
        username1:username,
        email1:email,
     }

     store.push(imgproduct)
     console.log(store)

  }