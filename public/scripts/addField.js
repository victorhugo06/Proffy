document.querySelector("#add-time") //procurar o botão
.addEventListener('click', cloneField) //clicar no botão

function cloneField() { //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true or false

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}