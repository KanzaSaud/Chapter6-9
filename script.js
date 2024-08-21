//Question 1
var a = +prompt("Enter a number to see its effects of pre/post increment/decrement");
document.write("Result:<br>");
document.write("The value of a is: "+a+"<br>");
document.write("...................................................................<br>");
document.write("<br>");
document.write("The value of ++a is: "+(++a)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("<br>");
document.write("<br>");
document.write("The value of a++ is: "+(a++)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("<br>");
document.write("<br>");
document.write("The value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("<br>");
document.write("The value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+a+"<br>");

//Question 2
//var a=2, b=1;
//var result = --a - --b + ++b + b--;
//============ (1) - (0) + (1) + (1)
//============ 3
var a=2, b=1;
var result = --a - --b + ++b + b--;
//--a; First value of 'a' is decremented. It becomes from 2 to 1
//--a - --b; First the value of 'b' is decremented. It becomes from 1 to 0. Then the subtraction is performed.
//           The decremented value of 'a' is used. So, the subtraction is 1 - 0 = 1.
//--a - --b + ++b; First the value of 'b' is incremented from 0 to 1. Then the result of subtraction calculated
//                 above is used, which is 1, is added to the incremented value of 'b'. So, the calculation
//                 is now 1 + 1 = 2.
//--a - --b + ++b + b--; The calculation done above will be used but this time first the result calculated above
//                       is added to the value of 'b', which is 1. So, the calculation becomes 2 + 1 = 3.
//                       Now, since we are done with the calculation, the value of 'b' is decremented from 1 to 0.
document.write("a is "+a+"<br>");
document.write("b is "+b+"<br>");
document.write("result is "+result+"<br>");
document.write("<br>");

//Question 3
var username = prompt("Kindly enter your name");
document.write("Assalam u alaikum, "+username+"!<br>");
document.write("<br>");

//Question 4 (multiplication table)
var table = prompt("Enter a number to see it's multiplication table");
if(table==""){
    table="5";
}
var count=1;
document.write("Table of "+ table+"<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write(table+" x "+ count +" = " + (table*count++)+ "<br>");
document.write("<br>");

//Question 5 (subjects)
var subject1= prompt("Kindly enter the first subject");
var subject2= prompt("Kindly enter the second subject");
var subject3= prompt("Kindly enter the third subject");

var eachTotal=100;

var marksObtained1= +prompt("Kindly enter "+subject1+" obtained marks");
var marksObtained2= +prompt("Kindly enter "+subject2+" obtained marks");
var marksObtained3= +prompt("Kindly enter "+subject3+" obtained marks");

var subject1Percentage = marksObtained1/eachTotal * 100;
var subject2Percentage = marksObtained2/eachTotal * 100;
var subject3Percentage = marksObtained3/eachTotal * 100;

var totalMarks = eachTotal * 3 //subjects
var obtainedMarksTotal = marksObtained1+marksObtained2+marksObtained3;
var percentageTotal = ((obtainedMarksTotal)/totalMarks)*100;

//"<style>h1 { background: red; }</style>";
document.write("<table border-collapse:collapse>");
document.write("<tr>");
document.write("<td><b>Subject</b></td>");
document.write("<td><b>Total Marks</b></td>");
document.write("<td><b>Obtained Marks</b></td>");
document.write("<td><b>Percentage</b></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+subject1+"</td>");
document.write("<td>"+eachTotal+"</td>");
document.write("<td>"+marksObtained1+"</td>");
document.write("<td>"+subject1Percentage+"%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+subject2+"</td>");
document.write("<td>"+eachTotal+"</td>");
document.write("<td>"+marksObtained2+"</td>");
document.write("<td>"+subject2Percentage+"%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+subject3+"</td>");
document.write("<td>"+eachTotal+"</td>");
document.write("<td>"+marksObtained3+"</td>");
document.write("<td>"+subject3Percentage+"%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td></td>");
document.write("<td><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+totalMarks+"</b></td>");
document.write("<td><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+obtainedMarksTotal+"</b></td>");
document.write("<td><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+percentageTotal+"%</b></td>");
document.write("</tr>");
document.write("</table>");