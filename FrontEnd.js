const tipo = document.getElementById("Documento")
const num = document.getElementById("docu")

num.addEventListener("input", () => {
    if (tipo.value == "ruc"){
        let input = num.value
        console.log(input)
        const pattern = /^\d+-\d{1}$/
        if (pattern.test(input)){
            num.removeAttribute("style")
        }else{
            num.setAttribute("style","border:1px solid red; background-color: rgba(251, 54, 54, 0.778)")
        }
    }else{
        let input = num.value
        console.log(input)
    }
})
