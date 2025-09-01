let transactions = [
    {
        transactionsid: 1,
        transactionsamount: 100000,
        transactionsdate: '01-07-2025'

    },
    {
        transactionsid: 2,
        transactionsamount: 20000,
        transactionsdate: '02-07-2025'
    },
    {
        transactionsid: 3,
        transactionsamount: 150000,
        transactionsdate: '03-07-2025'
    },
    {
        transactionsid: 4,
        transactionsamount: 300000,
        transactionsdate: '04-07-2025'
    },
    {
        transactionsid: 5,
        transactionsamount: 25000,
        transactionsdate: '05-07-2025'

    }
]
let  results = transactions.filter((transaction) => transaction.transactionsamount > 80000);
console.log('results:', results);

let results1 = [];
transactions.forEach((transaction) => {
    if(transaction.transactionsamount> 80000){
       results1.push(transaction);
    }          
})
console.log('results1:', results1);


         