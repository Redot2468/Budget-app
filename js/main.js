let itemDesc = [];
let expenses = [];





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
    
    itemDesc.unshift({description: descriptionField.value, amount: parseFloat(amountField.value)});
    expenses.push(parseFloat(amountField.value));
    getBudgetExpenseAndBalance();
    

})

// getting the total budget, expense and balance
function getBudgetExpenseAndBalance(){
    // budget 

    let budgetValue = budgetField.value; 
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
    let amountExpense = 0;
        amountExpense = expenses.reduce((a, b) => a + b);
        expenseAmount.textContent = `$${parseFloat(amountExpense).toFixed(2)}`;
          
        // balance
        let balance = parseFloat(valueOfBudget - amountExpense);
        balanceAmount.textContent = `$${balance.toFixed(2)}`;
        if(balance < 0){
            balanceAmount.textContent = `${balance.toFixed(2)}$`;
        }

        
}

