class Bank {
    constructor(name, balance){
        this.name= name;
        this.balance= balance;
    }

        withdraw(amountTowithdraw){
            this.balance= this.balance - amountTowithdraw
        }

        deposit(amountTodeposit){
        this.balance= this.balance+amountTodeposit
        }
    }

    var mattsAccount=new Bank("Matt",1000);
var myAccount=new Bank("I'Tayanna",0);

mattsAccount.withdraw(100);
myAccount.deposit(100);

console.log(myAccount.balance);
console.log(mattsAccount.balance);

