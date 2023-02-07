function submitform() {
    let name = document.getElementById('name').value.trim()
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('psw').value.trim()
    let passwordRepeat = document.getElementById('psw-repeat').value.trim()

    let err = validate(name, email, password, passwordRepeat)

    if (hasErrors(err)) {
        showErrors(document, err)
        return
    }

    let user = { name, email, password }

    localStorage.setItem(email, JSON.stringify(user))
    window.location.href = 'authenticate.html'
}

function validate(name, email, password, passwordRepeat) {
    const err = {}
    const mandatoryField = 'Campo obrigatório'
    if (!name) err.name = mandatoryField

    if (!email) err.email = mandatoryField
    else if (localStorage.getItem(email) !== null) err.email = "Usuário já cadastrado"

    if (!password) err.password = mandatoryField
    if (!passwordRepeat) err.passwordRepeat = mandatoryField
    else if (password !== passwordRepeat) err.passwordRepeat = 'As senhas não são iguais'
    return err
}

function hasErrors(err) {
    return Object.keys(err).length > 0
}

function showErrors(document, err) {
    document.getElementById('name-err').innerHTML = err.name || ''
    document.getElementById('email-err').innerHTML = err.email || ''
    document.getElementById('psw-err').innerHTML = err.password || ''
    document.getElementById('psw-repeat-err').innerHTML = err.passwordRepeat || ''

}

