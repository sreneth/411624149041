console.log("Printing from batch2.js");
const a = 10;
const b = 20;
const sum = a + b;
console.log("The sum of a and b is: " + sum);
console.log("print statement")


const str ="veeran"
    console.log(str)
    const arr = [1, 2.4 , " String",false]
    console.log(arr)
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}
arr[1] = 3.1
console.log(arr[1])

arr.push("veeran")
console.log(arr)
 arr.pop()
 console.log(arr)

 function example(){
    console.log("This is a function")
 }
 const sri = document.getElementById("sri")
 sri.innerText = "i love dance"

const input = document.getElementById("input")
const output = document.getElementById("inputfield")

input.addEventListener("input", ()=>{

    output.textContent = input.value
})

 const first = document.createElement("h1")
 first.textContent ="Hii chelloo"
 document.body.appendChild(first)

 first.remove()