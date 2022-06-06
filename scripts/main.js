document.querySelector("form").addEventListener("submit",Myfn)


function Myfn()
{
   
    event.preventDefault()
   

   let obj= {

        name:document.querySelector("form").name.value,
        email: document.querySelector("form").email.value,
        address: document.querySelector("form").address.value,
        wallet: document.querySelector("form").amount.value,

    }

     //console.log(obj)

     localStorage.setItem("user",JSON.stringify(obj));
     
     window.location.reload()

}