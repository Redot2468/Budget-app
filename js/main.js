let itemDesc = [];






// for the budget block
const budgetField = document.querySelector(".budget__field");
const budgetAmount = document.querySelector(".budget__amount");
const addBudgetBtn = document.querySelector(".budget__btn");
const balanceAmount = document.querySelector(".balance__amount");
addBudgetBtn.addEventListener("click", e => {
    e.preventDefault();
    getBudgetExpenseAndBalance();
    
})

// // // for the expense block
const amountField = document.querySelector(".amount__field");
const descriptionField = document.querySelector(".description__field");
const addExpenseBtn = document.querySelector(".expense__btn");
const expenseAmount = document.querySelector(".expenses__amount");
const itemsBlock = document.querySelector(".things__bought-block");

addExpenseBtn.addEventListener("click", e => {
    e.preventDefault();
    
    itemDesc.push({description: descriptionField.value, amount: parseFloat(amountField.value)});
    getBudgetExpenseAndBalance();
    AddExpenses();
   amountField.value = "";
   descriptionField.value = "";
})

let amountExpense = 0;
let budgetValue = 0;
// getting the total budget, expense and balance
function getBudgetExpenseAndBalance(){
    // budget 

     budgetValue = budgetField.value; 
    let valueOfBudget;
   
    if(budgetValue === ""){
        valueOfBudget = parseFloat(0).toFixed(2);
    budgetAmount.textContent = `$${valueOfBudget}`;
    balanceAmount.textContent = `$${valueOfBudget}`;
   }

   else{
    valueOfBudget = parseFloat(budgetValue).toFixed(2);
    budgetAmount.textContent = `$${valueOfBudget}`;
    balanceAmount.textContent = `$${valueOfBudget}`;
   }

    // expense
  
        amountExpense = itemDesc.reduce((a, b) => {
            return a + b.amount;
          }, 0);
          
        expenseAmount.textContent = `$${parseFloat(amountExpense).toFixed(2)}`;
          
        // balance
        let balance = parseFloat(valueOfBudget - amountExpense);
        balanceAmount.textContent = `$${balance.toFixed(2)}`;
        if(balance < 0){
            balanceAmount.textContent = `${balance.toFixed(2)}$`;
        }

        
}

// for adding the item bought under the description block
const thingsBought = document.querySelector(".things__bought-block")
function AddExpenses(){
    let itemsDescription;
    let index;
    
 
    itemDesc.forEach(item => {
        itemsDescription = `<div class="expenses__bought">
        <p class="description">${index++}</p>
                   <p class="description">${item.description}</p>
                   <p class="description">${item.amount}</p>
               </div>`
   })


    thingsBought.innerHTML += itemsDescription;
}


const clearBtn = document.querySelector(".clear__btn");
const descriptionHead = document.querySelectorAll(".thing");
clearBtn.addEventListener("click", e => {
reset();
})

function reset(){
    descriptionField.value = "";
    amountField.value = "";
    budgetField.value = "";
    itemDesc = [];
    amountExpense = 0;
    expenseAmount.textContent = `$${parseFloat(amountExpense).toFixed(2)}`;
    budgetValue = 0;
    budgetAmount.textContent = `$${parseFloat(budgetValue).toFixed(2)}`;
    balance = 0;
    balanceAmount.textContent = `$${balance.toFixed(2)}`;
    thingsBought.innerHTML += '';
    let nod = thingsBought.children;
    for(let i = 1; i <= nod.length; i++){
        nod[i].style.display = "none";
    }
}

