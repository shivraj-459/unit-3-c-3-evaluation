let purchase_arr=JSON.parse(localStorage.getItem("purchase"));

display(purchase_arr)


function display(purchase_arr)
{
    
    purchase_arr.forEach(function(elem)
    {
       
        var card=document.createElement("div")
        card.setAttribute("class","voucher")

        var image=document.createElement("img");
        image.src=elem.image;

        var name=document.createElement("h2");
        name.innerText=elem.name;

        var price=document.createElement("p");
        price.innerText=elem.price;

        card.append(image,name,price)
        document.querySelector("#purchased_vouchers").append(card)

    })
    
}






// var remain;

// var money=elem.price;
//      remain=Number(info.wallet)-Number(money)
//      console.log(remain)