class Person{
    constructor(name, weight, height){
        this.name= name;
        this.weight=weight;
        this.height= height;
    }
    bmiCalculation(){
        console.log((this.weight/(this.height * this.height))*703);
    }
}

var itayanna= new Person("I'Tayanna",140,63);

itayanna.bmiCalculation();