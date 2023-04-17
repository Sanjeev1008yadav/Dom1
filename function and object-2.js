class employee{
    constructor(salary,working_hour)
    {
    this.salary=salary
    this.working_hour=working_hour
    }

getInfo(){
    console.log(`salary of employee ${this.salary}`)
    console.log(`working hour per day ${this.working_hour}`)
}
AddSal(){
    if(this.salary<500)
    {
        console.log(`final salary of the employee${this.salary+10}`);
    }
    else{
        console.log(`final salary of the employee${this.salary}`);
    }
}
    AddWork()
    {
        if(working_hour>6)
        {
            console.log(`final salary of the employee${this.salary+5}`);
        }
        else
        {
            console.log(`final salary of the employee${this.salary}`);
        }
    }
}
var emp1= new employee(600)
emp1.getInfo();
emp1.AddSal();
emp1.AddWork();
 
var emp2=new employee(450,6)
emp2.getInfo();