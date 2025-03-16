//Task 1: Creating the Base Structure

const selectDashboard = document.getElementById("riskDashboard");   //selecting the riskDashboard container in the HTML file
console.log("Risk Dashboard Loaded");     //logging the messege to the console

const selectForm = document.getElementById("addItemsFormHTML");     //selecting the addItemsFormHTML in HTML for handling the user input
//Task 2: Adding Risk Items Dynamically

function addRiskItem(riskName, riskLevel, department){      //function with 3 variables that creates a div that will contain new risk cards

    const riskItem = document.createElement("div");
    riskItem.classList.add("riskCard"); //assigned a class to each card


riskItem.innerHTML =                    //created a structure for the risk card using .innerHTML
    `<h2>${riskName}</h2>
    <p>Risk: ${riskLevel}</p>
    <p>Department: ${department}</p>`   
    selectDashboard.appendChild(riskItem);   
    
}
selectForm.addEventListener("submit", (event) =>{
    event.preventDefault();


const riskName = document.getElementById("riskName").value;     //accessing the values in the HTML file by id
const riskLevel = document.getElementById("riskLevel").value;
const department = document.getElementById("department").value;

addRiskItem(riskName,riskLevel,department);     //running the function using test data

});
//Test Case:
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");