class Student{
    constructor(name="john",roll_no=9)
    {
    this.name=name;
    this.roll_no=roll_no;
    }
}
var x=new Student("sanjeev",5);
console.log(x.name)
console.log(x.roll_no)

var y=new Student("surabhi",8)
console.log(y.name)
console.log(y.roll_no)

var z= new Student()
console.log(z.name)