let url=`https:masai-vouchers-api.herokuapp.com/api/vouchers`;

voucher()

async function voucher()
{
    try{
        let response=await fetch(url)

        let data=await response.json()

        let arr=data[0].vouchers;
        //console.log(arr)

        display(arr)
    }

    catch(error)
    {
        console.log(error)
    }
}


let info=JSON.parse(localStorage.getItem("user"));

var amount=info.wallet;
console.log(amount)
let wallet=document.querySelector("#wallet_balance").innerText=amount



function display(arr)
{
    arr.forEach(function(elem)
    {
        var card=document.createElement("div")
        card.setAttribute("class","voucher")

        var image=document.createElement("img");
        image.src=elem.image;

        var name=document.createElement("h2");
        name.innerText=elem.name;

        var price=document.createElement("p");
        price.innerText=elem.price;

        var Pur_button=document.createElement("button");
        Pur_button.innerText="Buy"
        Pur_button.addEventListener("click",function(){

            if(amount>elem.price)
            {
                alert("Hurray! purchase successful")
                amount=amount-elem.price;
                //console.log(amount)
                document.querySelector("#wallet_balance").innerText=amount;
               
                BuyFn(elem)
            }

            else if(amount<elem.price)
            {
                alert("Sorry! insufficient balance")
            }
           
        })


        card.append(image,name,price,Pur_button)
        document.querySelector("#voucher_list").append(card)
    })
}

let purchase_arr=JSON.parse(localStorage.getItem("purchase")) || [];

function BuyFn(elem)
{

    purchase_arr.push(elem)
    localStorage.setItem("purchase",JSON.stringify(purchase_arr))
  
}


