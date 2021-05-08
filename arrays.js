                                //Chap-14 to 16

                                //TASK-1
var studentsNames = []
                                //TASK-2

var fruits = ["mango","banana","apple","apricot","pineapple"]
                                //TASK-3

var numbers = [11,22,33,44,55,66,77,88,99]

                                //TASK-4

var bol = [false,false,false,true,true]

document.write(bol)
                                //TASK-5


var mixedArray = ["hassan",21,"bscs",true,24.5]

                                //TASK-6

var Qualifications = new Array("ssc","hsc","bcom","bs","MS","M-Phil","PHD")

for(var i=0;i<Qualifications.length;i++)
{
    document.write(Qualifications[i],"<br>")

}

                                //TASK-6

var names = ["Hassan","Anas","Ayesha"]
var scores = [492,400,384]
var tot = 500
for(var j = 0;j<names.length;j++)
{
    document.write("score of "+ names[j]+" is "+scores[j]+" . "+" percentage" + (scores[j]/500)*100+"<br>")
}
                                //TASK-7


 var colors = ["White","blue","green","yellow","black"]

 document.write(colors,"<br>")

 var newColor = prompt("What color do you want to add to the start array")

 colors.unshift(newColor)

 document.write("New array after insertion at the start " + colors +"<br>")



 var end =  prompt("What color do you want to add to the end array")
 colors.push(end)
 document.write("new array after insertion at the end is " + colors +"<br>")

 colors.push("Pink")
 colors.push("Grey")

 document.write("Array after deletion o first element " +"<br>")

 colors.shift()
 document.write(colors)

 var pouch = +prompt("At which position you want to add the color")
 var pouch1 = prompt("color you want to add")
 if(pouch>colors.length)
    console.log("out of range")
else
{
    colors[pouch]=pouch1
    document.write("<br>","new array is" +colors)
}


var user = +prompt("At which index you want to delete colors")
var user1 = +prompt("How many elements you want to delete")

if(user<colors.length()||user>colors.length())
    console.log("out of range")
else
{
    colors.splice(user,user1)
    document.write("After deletion " + colors)
}
colors.splice(user,user1)
document.write("After deletion " + colors)

                            //TASK-7

        var arr = [7,4,8,6,9,3,4,6,1]
        arr.sort()
        document.write(arr)      

                        //TASK-8


var stringArray = ["karachi","seoni","balakot","naran","lahore","islamabad"]

var selectedCities = stringArray.slice(1,5)
document.write("Before Selection" +" <br>"+ stringArray+"<br>")
document.write("After Selection"+"<br>"+selectedCities)

                        //TASK-9

var cat = ["This","is","my","cat"]

var con = cat[0]+" "+cat[1]+" "+cat[2]+" "+cat[3]
document.write(con)

                        //TASK-10

var acces = ["keyboard","mouse","printer","inkjet","cpu"]
document.write("Array before fifo"+acces+"<br>")

for(var k=0;k<5;k++)//.length method is not working here
{
    document.write(acces.shift()+"<br>")
}


                        //TASk-11

var access = ["helmet","gloves","mobile","water bottle"]
document.write("Array before lifo"+access+"<br>")
for(var i=0;i<4;i++)
{
    document.write(access.pop())
}