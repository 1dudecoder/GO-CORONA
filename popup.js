let body = document.querySelector("body")
let mybuttons = document.querySelector("input")
let btn = document.querySelector(".mybuttons > input")
let offbtn = document.querySelector(".offbtn")

replacetext(body)

function replacetext(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replacetext)
    }else if (element.nodeType === Text.TEXT_NODE){
        element.textContent = element.textContent.replace(/coronavirus/gi,'😆😆😆😆😆') 
    }
}




