import ExpenseItem from './Components/MY_ExpenseItem';
function App() {
    const expenseData = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            date: new Date(2021, 2, 13),
            amount: 12.88,
        },
        {
            id: 'e2',
            title: 'Cheese Cake',
            date: new Date(2021, 2, 10),
            amount: 5.30,
        },
        {
            id: 'e3',
            title: 'Hair Conditioner',
            date: new Date(2021, 2, 9),
            amount: 9.20,
        },
        {
            id: 'e4',
            title: 'Uber',
            date: new Date(2021, 2, 13),
            amount: 30.00,
        },
    ]
    return(
        <div>
            <ExpenseItem 
            date={expenseData[0].date}
            title={expenseData[0].title}
            amount={expenseData[0].amount}
            />
            <ExpenseItem 
            date={expenseData[1].date}
            title={expenseData[1].title}
            amount={expenseData[1].amount}
            />
            <ExpenseItem 
            date={expenseData[2].date}
            title={expenseData[2].title}
            amount={expenseData[2].amount}
            />
            <ExpenseItem 
            date={expenseData[3].date}
            title={expenseData[3].title}
            amount={expenseData[3].amount}
            />
        </div>
    )
}

export default App;