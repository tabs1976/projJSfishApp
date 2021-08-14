//process the input Data of and empty object
let pricess ={}
function handleChange(item){
    pricess[item.name] = {
        qty: parseInt(item.value),
        subtotal: item.value * item.dataset.price,
    }    
}  

let overAllsales = 0
let overAllqty = 0

function handleSubmit(){
    //display the current date process
    document.getElementById("Time").innerHTML = new Date()
    console.log(" Todays Date Record : ",new Date)
    
   //display the no. of over all plastic of fish
    for (var key in pricess) {
        if (pricess.hasOwnProperty(key)) {
            overAllqty += pricess[key].qty
        } 
    }

    //display the nos. of expected fish sales
    for (var key in pricess) {
        if (pricess.hasOwnProperty(key)) {
            overAllsales += pricess[key].subtotal
        } 
    }
    
    //display name of fish and total fish plastics
    for (var key in pricess) {
        if (pricess.hasOwnProperty(key)) {
            console.log(key + " no. of plastic = "+pricess[key].qty )
           
            document.getElementById("fishSelected").innerHTML += "<br>Fish Sold: <br>"+ key + pricess[key].qty


        }
    }

    document.getElementById("displayStatus1").innerHTML =  "THE TOTAL FISH SOLD: " + overAllqty 
    console.log("The tolal Fish sold: ",overAllqty)
    document.getElementById("displayStatus2").innerHTML = "THE TOTAL AMOUNT SALES EXPECTED: " + overAllsales
    console.log("THE TOTAL AMOUNT SALES EXPECTED IS --> ",overAllsales )

    let sellerActualsales = overAllsales  
    document.getElementById("displayStatus3").innerHTML = "SELLER ACTUAL SALES: " + sellerActualsales
    console.log("Seller Actual Sales: --> ",sellerActualsales)

    let sellerCom = sellerActualsales * .4  // percentage commission of a seller
    document.getElementById("displayStatus4").innerHTML = "SELLER 40% Commissions: " + sellerCom
    console.log("Seller 40% Commissions -->",sellerCom) //seller commission computed
    
    let remitance = sellerActualsales - sellerCom
    document.getElementById("displayStatus5").innerHTML = "TOTAL FISH REMITANCE:" + remitance
    console.log("Total Fish Remitances :  ",remitance)
}

