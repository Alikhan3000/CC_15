//Task 1: Creating the Base Structure

const selectDashboard = document.getElementById("riskDashboard");   //selecting the riskDashboard container in the HTML file
    console.log("Risk Dashboard Loaded");     //logging the messege to the console

const selectForm = document.getElementById("addItemsFormHTML");     //selecting the addItemsFormHTML in HTML for handling the user input
//Task 2: Adding Risk Items Dynamically

function addRiskItem(riskName, riskLevel, department){      //function with 3 variables that creates a div that will contain new risk cards

    const riskItem = document.createElement("div");
    riskItem.classList.add("riskCard"); //assigned a class to each card
    //Task 6: Handling Event Propagation
    riskItem.addEventListener("click", (event)=>{   //Use stopPropagation() to ensure clicking inside a risk card does not trigger unwanted actions on the dashboard
        event.stopPropagation()
    })
//Task 3: Removing Risk Items
    const resolve =document.createElement("button");        //created a resolve button using createElement "button"
        resolve.textContent = "Resolve";
        resolve.classList.add("resolve-butt");
        resolve.addEventListener("click", ()=>{             //added an event listener that when clicked removes risk item div
            riskItem.remove();
        })
 
//Task 4: Categorizing Risks by Level

if(riskLevel === "Low"){        
    riskItem.classList.add("low")      //assigned a class based on every risk level
} else if(riskLevel === "Medium"){
    riskItem.classList.add("med")
}else if(riskLevel === "High"){
    riskItem.classList.add("high")
}

riskItem.setAttribute("risk-levelAttribute", riskLevel) //set an attribute for riskLevel variable to be used in task 5

riskItem.innerHTML =                    //created a structure for the risk card using .innerHTML; assigned class to risk level
    `<h2>${riskName}</h2>
    <p class = "risk-level">Risk: ${riskLevel}</p>    
    <p>Department: ${department}</p>`   

    selectDashboard.appendChild(riskItem);
    //appended the resolve output to riskItem
    riskItem.appendChild(resolve);    

    
}
//used preventDefault to prevent reloading the page when submit is clocked 
selectForm.addEventListener("submit", (event) =>{
    event.preventDefault();


const riskName = document.getElementById("riskName").value;     //accessing the values in the HTML file by id
const riskLevel = document.getElementById("riskLevel").value;
const department = document.getElementById("department").value;

addRiskItem(riskName,riskLevel,department);     //running the function using test data

});

//Task 5: Implementing Bulk Updates
const riskLvlUp = document.getElementById("increaseRiskLevels") 

riskLvlUp.addEventListener("click", ()=>{                           //added an event listener that updates the risk level difficuly
    document.querySelectorAll(".riskCard").forEach((riskItem) => {
    let oldRiskLevel = riskItem.getAttribute("risk-levelAttribute")
    let newRiskLevel = oldRiskLevel

        if(oldRiskLevel === "Low")      //updating low and medium risk levels using if else statement
            newRiskLevel = "Medium"
        else if (oldRiskLevel === "Medium")
            newRiskLevel = "High"

        riskItem.setAttribute("risk-levelAttribute", newRiskLevel)

        riskItem.classList.remove("low", "med", "high")     //removed old classes to apply new classes 

            if (newRiskLevel === "Low")         //updating class item to apply styling to the risk cards 
                riskItem.classList.add("low")
            else if (newRiskLevel === "Medium")
                riskItem.classList.add("med")
            else if (newRiskLevel === "High")
                riskItem.classList.add("high")

            //selected risk level class using query selector and updated the new card text using .innerHTML
            riskItem.querySelector(".risk-level").innerHTML = `Risk: ${newRiskLevel}`   
        })

    
});


//Test Case:
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
//task 3 test case: Clicking "Resolve" should remove this risk from the dashboard.
addRiskItem("Market Fluctuations", "High", "Finance");
//Task 4: Categorizing Risks by Level
//Test Case:
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
//Test Case:
addRiskItem("Employee Retention", "Low", "HR");
// Clicking "Increase Risk Levels" should change it to "Medium".