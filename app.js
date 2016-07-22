1-"moocluck";
2- 11
   12
   13
3-6
4-99
5-"used sock"
6- var Athlete = function (name, age, sex, height, weight, marks){
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight = weight;
  this.marks = marks;
};
Athlete.prototype.getMarksAverage = function(){
  var sum = 0;
  for (var i = 0; i < this.marks.length; i++) {
     sum += this.marks[i];
  }
  return sum/this.marks.length;
};

Athlete.prototype.getRoundedMarks = function(){
  return  this.marks.map(Math.round);
};
var x = new Athlete("yasiel",23,"M",1.80,160,[23.4,12.3,23.8,34.7,7.7]);
console.log("Average "+ x.getMarksAverage()+" Rounded "+ x.getRoundedMarks() );

var Point2D = function (x,y){
  this.x=x;
  this.y=y;
};
class Rectangle {
  constructor (Point2D,w, h){
    this.Point2D=Point2D;
    this.y=y;
    this.w=w;
    this.h=h;
  }
  getArea (){
    return this.w * this.h;
  }
}


const getTotalCoverage =  (rectArr) =>{

}



13- const= it can not change;
    let = the variable cant be change;
    var=
