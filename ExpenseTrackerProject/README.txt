Expense Tracker

This project is a simple Expense Tracker application built using JavaScript, HTML, and CSS. It allows users to add and manage their expenses by recording the description and amount of each expense. The app calculates and displays the total expenses in real-time. Users can also delete any expense from the list, and the total expense amount will be updated accordingly.
Features

    Add new expenses with a description and amount.
    Display a list of all added expenses.
    Calculate and show the total expenses in real-time.
    Delete any expense from the list, which will also update the total amount.

How It Works

    When you click the "Add Expense" button, the app will prompt you to enter:
        Description: A brief description of the expense.
        Amount: The amount of money spent on the expense.

    After providing the information, the expense will be added to the list, and the total expense will be updated.

    To delete an expense, click the "X" button next to it, and the expense will be removed from the list. The total expense will be updated automatically.

Code Overview
Main Variables

    addExpenseBtn: Selects the "Add Expense" button.
    expenseList: The container that holds the list of expenses.
    totalExpense: Displays the total expense at the bottom.
    expenses: An array that stores the list of added expenses.
    total: A variable that tracks the total amount of all expenses.

Functions

    renderExpenses():
        Generates the HTML for the expense list and updates the total expense amount.

    addExpense():
        Prompts the user for the expense description and amount.
        Adds the expense to the expenses array and updates the total expense.
        Calls renderExpenses() to refresh the UI.

    deleteExpenses(index):
        Removes an expense from the list based on its index.
        Updates the total expense and re-renders the list.

Event Listeners

    addExpenseBtn.addEventListener("click", addExpense):
        Listens for the click event on the "Add Expense" button and calls addExpense() to add a new expense.

    expenseList.addEventListener("click", function (event) {...}):
        Listens for click events on the expense list.
        Checks if the clicked element is a delete button, and if so, removes the corresponding expense from the list by calling deleteExpenses().

Usage

    Clone or download this repository.
    Open the index.html file in a browser.
    Click "Add Expense" to enter a new expense.
    View the list of expenses and the total amount.
    Delete any expense by clicking the "X" button next to it.

License

This project is open-source and free to use.