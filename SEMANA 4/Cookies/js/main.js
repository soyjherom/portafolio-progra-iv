const form = document.querySelector('#dataForm')
form.addEventListener('submit', save)

const removeButton = document.querySelector('#remove')
removeButton.addEventListener('click', remove)

const txtFirstName = document.querySelector('#txtPerFirstName')
const txtLastName = document.querySelector('#txtPerLastName')
const txtEmail = document.querySelector('#txtPerEmail')
const txtPhone = document.querySelector('#txtPerPhone')
const txtWorkStartDate = document.querySelector('#txtJobStart')

function remove(e){
    localStorage.removeItem("firstName")
    localStorage.removeItem("lastName")
    localStorage.removeItem("email")
    localStorage.removeItem("phone")
    localStorage.removeItem("workStartDate")
    txtFirstName.value = ""
    txtLastName.value = ""
    txtEmail.value = ""
    txtPhone.value = ""
    txtWorkStartDate.value = ""
}

if(localStorage.getItem("firstName") != null){
    txtFirstName.value = localStorage.getItem("firstName")
}
if(localStorage.getItem("lastName") != null){
    txtLastName.value = localStorage.getItem("lastName")
}
if(localStorage.getItem("email") != null){
    txtEmail.value = localStorage.getItem("email")
}
if(localStorage.getItem("phone") != null){
    txtPhone.value = localStorage.getItem("phone")
}
if(localStorage.getItem("workStartDate") != null){
    txtWorkStartDate.value = localStorage.getItem("workStartDate")
}
function save(e){
    var firstName = txtFirstName.value
    var lastName = txtLastName.value
    var email = txtEmail.value
    var phone = txtPhone.value
    var workStartDate = txtWorkStartDate.value
    localStorage.setItem("firstName",firstName)
    localStorage.setItem("lastName",lastName)
    localStorage.setItem("email",email)
    localStorage.setItem("phone",phone)
    localStorage.setItem("workStartDate",workStartDate)
}