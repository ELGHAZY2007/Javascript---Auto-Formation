// --------------------------------------------------------   variable -------------------------------------


// const text = "Hello World"
// alert(text)


// var text ="Hello World";
// text ="Hello";
// alert(text)


// let text = "Hello World"
// text = "hello"
// alert(text)


// document.write("Hello How are you?")


// alert("Hello")

// console.log("Hello")


// var enter = prompt("Enter you Name ")
// document.write(enter)


// //////////// String  

// var namee = "HELLO"
// alert(typeof(namee))



// var num = 1996;
// alert(typeof(num))

// //////////// Boolean

// var namee = true
// alert(typeof(namee))

// let num1 = 40;
// let num2 = 30;
// if (num1 > num2)
// {
//     alert("True")
// }

// else {
//     alert("FALSE")
// }


// ------------------------------- Operations -----------------------------

// let num1
// let num2;

// num1 = 30;
// num2 = 50;

// num1+=1;
// let result = num1 + num2;
// alert(result)




///////////////// Loops ---------------


// for (let i=0; i<=10; i++)
// {
//     document.write(i)
    
// }

// let num1=0
// while (num1<=10)
// {
//     console.log(num1)
//     num1++
// }



// function Sum(num1 , num2)
// {
    
//     if (num1 > num2)
//     {
//         alert("Number one is bigger than number two")
//     }

//     else if (num1 === num2)
//     {
//         alert("Number one equal a number two")
//     }

//     else {
//         alert("number two is bigger than number one")
//     }



// }
// Sum(20,10)




///// ------------ Arrays ----------------.



let arr = ["Name", "Phone", "email", "color"]

// alert(arr)

// arr.push("Age")

// alert(arr)

// arr.unshift("Id")
// alert(arr)


// alert(arr.slice(1,3))
// console.log(arr)

// Delete the last Element
// arr.pop()
// alert(arr)

// Delete the first elm

// arr.shift()
// alert(arr)


// let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];


// for (let i=0; i<=fruits.length - 1;i++)
// {
//     document.write(`${fruits[i]} <br> `)
// }


// ------------- Objects -----------

// let person = {
//     namee : ["Adil", "Dev"],
//     lastName : "Dev",
//     Age : 21,
//     Job : "Software Enginner"
// };

// console.log(person.namee[0])


// let arr2 = ['Name', 'age', 'student']

// arr2[0] = 'adil'
// alert(arr2)




// let submi1 = document.getElementById("submi1")
// let btn2 = document.getElementsByClassName('btn2')
// let btn3 = document.querySelector('')

// submi1.addEventListener("click", function() {
//     submi1.innerHTML = "Submit"
//     submi1.style.backgroundColor = 'yellow'
// })


localStorage.setItem("first", "Adil h")
alert(localStorage.getItem("first"))
localStorage.clear()