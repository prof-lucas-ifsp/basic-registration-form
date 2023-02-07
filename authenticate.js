function submitform() {
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('psw').value.trim()

    let err = validate(email, password)

    if (hasErrors(err)) {
        showErrors(document, err)
        return
    }

    window.location.href = 'https://google.com'
}

function validate(email, password) {
    const err = {}
    const mandatoryField = 'Campo obrigatório'

    if (!email) err.email = mandatoryField
    if (!password) err.password = mandatoryField
    if (hasErrors(err)) return err

    const user = localStorage.getItem(email)

    if (!user) {
        err.msg = "Usuário e/ou senha inválidos"
        return err
    }

    const storedPassword = JSON.parse(user).password
    if (storedPassword !== password) err.msg = "Usuário e/ou senha inválidos"

    return err
}

function hasErrors(err) {
    return Object.keys(err).length > 0
}

function showErrors(document, err) {
    document.getElementById('email-err').innerHTML = err.email || ''
    document.getElementById('psw-err').innerHTML = err.password || ''
    document.getElementById('msg-err').innerHTML = err.msg || ''
}

