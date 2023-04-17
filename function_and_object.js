class triangle{
    constructor(a,b,c)
    {
        this.side1=a;
        this.side2=b;
        this.side3=c;
    }

calculate_perimeter()
{
    var p = (this.side1+this.side2+this.side3)
    console.log(p);
}
calculate_area()
{
    var a=Math.sqrt(s*(s-this.side1)*(s-this.side2)*(s-this.side3))
    console.log(a)
}
}
var x= new triangle(3,4,5)
x.calculate_perimeter()
// x.calculate_area()
 