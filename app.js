            //CHAP 1 Tasks
//Task 1 
alert("Welcome to my website")

//task2
alert("Error! Please enter a Valid password ")

//task3
alert("Welcome to js Land "+"\n" +"Happy Coding!")

//task4
alert("welcome to JS Land...")
alert("Happy Coding!" + "\n" +" " + "prevent this page to create additional dialogs")

//task5
console.log("hello... i can run JS through my web browser's console")



            //CHAP 2 TASKS

//task-1 
var username;

//task-2
var myName = "Hassan ur Rahim Khan"

//task-3
var titledMessage 
titledMessage = "Hello-World"
alert(titledMessage)


//task-4

var name = "Hassan"
var age = 21
var education = "bscs"

alert("Name is:"  + name)
alert("study: "  + education)
alert("Age is: " + age)


//task-5

var abc = "pizza" + "\n"+ "pizz" +"\n"+ "piz" +"\n"+"pi"+"\n"+"p"
alert(abc)

///task-6

var email = "19102027.hassanurrahimkhan@gmail.com"
var myemail = "MY email is"
alert(myemail+" "+email)

//task-7

var book = "A smarter way to learn JavaScript"
var abca = "I am trying to learn from the Book"

alert(abca + " "+book)



//task-8

document.write("Yah! I can write HTML content through javascript")

//task-9

var StringDesign = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(StringDesign)

                        //chap 3 Taks


//task 1
var age = 21
alert("My age is: " + age)

//task 2

var visited = 12
alert("You visited "+visited+" times")

//task-3

var birthYear = 2000
document.write("My birth year is " + birthYear+"<br>")

document.write("Datatype of my decleared variable is " + typeof(birthYear))

////task-4
var name = prompt("Enter your name:")


var type = prompt("which type of item you want?")


var qty = +prompt("Enter quatity")

var storeName = "denim"


document.write(name+" " + "ordered " + qty +" " +type+" " + storeName)


                //CHAP-5 tASKS 


                //Task 1
                //SUM
var num1 = +prompt("Enter First Number :")
var num2 = +prompt("Enter Second Number")

var sum = num1+num2
document.write("Sum of "+num1+ "and "+ num2+ " is" + sum)

                //Multiplication

var num1 = +prompt("Enter First Number :")
var num2 = +prompt("Enter Second Number")

var mul = num1*num2
document.write("multiplication of "+num1+ "and "+ num2+ " is" + mul)

            //Division

var num1 = +prompt("Enter First Number :")
var num2 = +prompt("Enter Second Number")
while(num2==0)
{   
   alert("no number can be divided into zero"+"<br>")
    num2 = +prompt("Enter Second Number")
}
            //Subtraction
var div = num1/num2
document.write("Division of "+num1+ "and "+ num2+ " is" + div)
        //subtraction
var num1 = +prompt("Enter First Number :")
var num2 = +prompt("Enter Second Number")

var diff = num1-num2
document.write("Division of "+num1+ "and "+ num2+ " is" + diff)

                //Task 3

var number 
document.write("Value of the variable of number is " + number+"<br>")


var number1 =9;
document.write("Initial value is " + number1+"<br>")

var a= ++number1;
document.write("After incement value is" + a+"<br>")

var b = number1 +7
document.write("Value after addition" +b+"<br>" )

var c = number1--
document.write("Value after decrement"+c+"<br>")

var d = number%3
document.write("The Remainder is " + d + "<br>")

            //Task 4 

var cost = 600

var for5 = 600*5

document.write("The Cost of Buying 5 tickets in a movie is " + for5)


    //task-5 

var en = +prompt("Enter the number for table")
var j=en;
for(var i=1;i<11;i++)
{   
    j=en*i
    document.write(en + " *"+i+" ="+j,"<br>")
   
    
}
            //task-6
var far = +prompt("Enter a value in fahreneit:")
var tc = (far-32)*(5/9)
document.write("fahreneit to centigrade " + tc)

var cen = +prompt("Enter a value in centigrade :")
var tf = (cen*(9/5))+32
document.write("in fahreneit" + tf)

            //task-7

var item1 = +prompt("Enter price of item 1: ")
var qtyitem1 = +prompt("Enter quantity of item 1:")
var item2 = +prompt("Enter price of item 2: ")
var qtyitem2 = +prompt("Enter quantity of item 2:")
var shippingCharges = 100

document.write("Price of item 1 is :"+item1+"<br>")
document.write("Quantity  of item 1 is :"+qtyitem1+"<br>")
document.write("Price of item 2 is :"+item2+"<br>")
document.write("Quantity of item 2 is :"+qtyitem2+"<br>")
document.write("Shipping charges" + shippingCharges+"<br>")

var totalCost = (item1*qtyitem1)+(item2*qtyitem2)+shippingCharges
document.write("Total cost :" + totalCost)


            //task 8
var totalMarks = +prompt("Enter total marks :")
var marksObtained = +prompt("Enter obtained marks :")
var result = (marksObtained/totalMarks)*100
document.write("your percentage is " + result +"%")



        //task-9

        var curr = (10*104.80)+(25*28)
document.write("Total currency in pkr" + curr)

        //task-10
var new1 = 123
var x = ((new1+5)*10)/2


    //task-11
var birthYear = 2000
var currentYear = 2021
var age = currentYear-birthYear
document.write("age is " + age)


    //task-12

var radius = +prompt("Enter the radius :")
var area = (3.142)(radius)(radius)
var circumference = 2*3.142*radius
document.write("Area is" + area)
document.write("circumference is " + circumference)

    //Task-13

    var snack = "shakes"
    var age = 21
    var maxAge = 100
    var amount = 5
    var need = (100-21)*5
    document.write("need " + need + snack + "till age " + maxAge)


    Chapter 9 to 11
                    //Task-1
    var a = 144
    document.write("The value of a is " + a + "<br>")

    document.write("The value of ++a is " + ++a + "<br>")

    document.write("The value of a++ is " + a++ + "<br>")

    document.write("The value of --a is " + --a + "<br>")

    document.write("The value of a-- is " + a-- + "<br>")

                    //TASK-2
                      
                    var gender = prompt("Enter Your Gender")
                   
                    if(gender==="male"){
                        document.write("Good Morning Sir")}
                    else if(gender==="female")
                        document.write("Good Morning Ma'am")
                    else
                        document.write("Wrong Input")
                    
                    //Task-3

                    var trafficInput = prompt("Enter signal color")

                   

                    if(trafficInput.toLocaleLowerCase()==="red")
                    {
                        document.write("Must Stop")
                    }
                    else if(trafficInput.toLocaleLowerCase()=="yellow")
                        document.write("Ready to move")
                    
                    else if(trafficInput.toLocaleLowerCase()=="green")
                        document.write("GO now")
                    
                    else
                        document.write("Wrong input!")




                    //Task-4

    
                    var a = 4;
                    if (++a === 5){
                    alert("given condition for variable a is true");
                    } //// Yes Alert appeared in this script
                    
                   
                    //b.
                     var b = 82;
                    if (b++ === 83){
                    alert("given condition for variable b is true");
                    } //// alert did not generated in this script
                   //c.
                     var c = 12;
                    if (c++ === 13){
                    alert("condition 1 is true");
                    }
                    if (c === 13){
                    alert("condition 2 is true");
                    }
                    if (++c < 14){
                    alert("condition 3 is true");
                    }
                    if(c === 14){
                    alert("condition 4 is true");
                    } //// Alert appeared in this script
                   // d.
                     var materialCost = 20000;
                    var laborCost = 2000;
                    var totalCost = materialCost + laborCost;
                    if (totalCost === laborCost + materialCost){
                    alert("The cost equals");
                    }////Alert Appeared
                   // e. 
                    if (true){
                    alert("True");
                    }
                    if (false){
                    alert("False");
                    } ////Alert Appeared
                   
                    //f.
                     if("car" < "cat"){
                    alert("car is smaller than cat");
                    } ////Alert Appeared


                    //Task-6

                
                    var in1 = +prompt("Enter the marks of 1st subject :")
                    var in2 = +prompt("Enter the marks of 2nd subject :")
                    var in3 = +prompt("Enter the marks of 3rd subject :")

                    var marksObtained = in1+in2+in3

                    var per = ((in1+in2+in3)/300)*100

                    if(per>80)
                        var grade = "A-one <br>Excellent"
                    else if(per<80&&per>70)
                        var grade = "A <br>Good"
                    else if (per < 70 && per >59)
                        var grade = "B <br> you need to improve"
                    else if (per <59 && per >50)
                        var grade = "C <br> Do hardwork"
                    else if (per<=50)
                        var Grade = "F <br> Sorry"
                    else
                        var grade = "Error"
                    
    

                   document.write("Marksheet" , "<br>")
                   document.write("Total Marks : 300","<br>")
                   document.write("Marks obtained :" + marksObtained,"<br>" )
                   document.write("percentage:" + per,"<br>")
                   document.write("Grade :" + grade,"<br>")




                                   //TASK-7



                var div = +prompt("Enter a Number to check it's divisibility")

                if((div%3)==0)
                {
                    document.write("Number is divisible by 3")
                }
                else if ((div%3)!=0)
                    document.write("Not divisible by 3")
                else
                    document.write("Error")
                


                            //TASK-8

                
                var evenOdd = +prompt("Enter a number to check whether it is even or odd :")

                if(evenOdd%2==0)
                    document.write("Number is even")
                else
                    document.write("Number is odd")



                            //TASK-9

                var temp = +prompt("Enter the temprature")

                if(temp>40)
                    document.write("It's too hot outside")
                else if(temp>30 && temp<40)
                    document.write("Today's weather is normal")
                else if (temp>20&&temp<30)
                    document.write("Today weather is cool")
                else
                    document.write("OMG todays weather is so cool")

                        //TASK-10

                var cal = +prompt("Enter first number")
                var cal1 = +prompt("Enter second number")
                var add = cal+cal1
                var sub = cal-cal1
                document.write("Multiplication is : " + cal*cal1 +"<br>")
                document.write("Addition is : " + add +"<br>")
                document.write("Division is : " + cal/cal1 +"<br>")
                document.write("Subtraction is : " + sub +"<br>")
                document.write("Remainder is " + cal%cal1)



                    