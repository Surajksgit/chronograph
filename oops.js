// let car = {
//     Name:"Landcruizer",
//     color:"red",
//     year:2001

// }
// console.log("Name:" + car.Name);
// console.log("Color:" + car.color);
// console.log("year:" + car.year);
// console.log(car.year = 2004);

// let car = {
//     make:"toyota",
//     model:"landcruizer",
//     year:2015,
//     start: function(){
//         console.log("car started");

//     }

// }
// car.start();


// let Employee = {
//     Name:"suraj",
//     Position :"manager",
//     Salary : 25000,
//     getsalary:function(){
//         document.write("salary of "  + this.Name +  "is"  + this.Salary)
//     }

// }

// console.log(Employee)
// // document.write(Employee.Name )
// Employee.getsalary()



class Employee {
    constructor(name,position,salary){
        this.Name=name;
        this.Position=position;
        this.Salary=salary;
    }
    getsalary(){
        console.log("salary of "+ this.Name +  " is " +  this.Salary);

    }
}
   let detail = new Employee ("suraj","CEO",70000);
   let detail1 = new Employee ("athul","cO",60000);
   detail.getsalary() ;
   detail1.getsalary();
    

