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



