const frm = document.querySelector("form")

frm.addEventListener("submit", function(e) {
    e.preventDefault()

    const numTel = document.getElementById("numero-telefone")
    const formattedPhone = formatPhoneNumber(numTel.value)
    
    if (formattedPhone) {
        adicionaLinha(formattedPhone)  
    }
})

function adicionaLinha(formattedPhone) {
    const nome = document.getElementById("nome-completo")
    

    let linha = "<tr>"
    linha += `<td>${nome.value}</td>`
    linha += `<td>${formattedPhone}</td>`
    linha += "</tr>"

    const tbody = document.querySelector("tbody")
    tbody.innerHTML += linha

    nome.value = ''
    document.getElementById("numero-telefone").value = ''
}

function isCellPhone(phone) {

    phone = phone.replace(/\D/g, "")

    return phone.length === 11 && phone.charAt(2) === '9'  
}

function formatPhoneNumber(phone) {
    phone = phone.replace(/\D/g, "")  

    return phone   

}
