let output = document.getElementById("output")
let generateButton = document.getElementById("generateButton")
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|[];,./~`'; // Pool of characters

generateButton.addEventListener("click",function(){
    output.textContent =  ""
    for(let i=0 ; i < 20 ;i++){
    let random = Math.floor(Math.random()*90)
    output.textContent += chars[random]
    navigator.clipboard.writeText(output.textContent) //Copy to clipboard functionality
    }
})

