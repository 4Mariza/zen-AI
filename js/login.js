async function listarUsuarios() {
    const url = `https://back-login.vercel.app/usuarios`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const logarBtn = document.getElementById('logar')

logarBtn.addEventListener("click", async () => {

    const login = document.getElementById('login').value
    const password = document.getElementById('password').value

    if(login === '' || password === ''){
        alert('Preencha os campos corretamente!')
    }

    let users = await listarUsuarios()

    let isValido = false

    users.forEach((usuario) => {
        if (usuario.email == login && usuario.senha == password) {
            isValido = true

            alert('Login efetuado com sucesso!')

            localStorage.setItem('user', usuario.nome)
            localStorage.setItem('id', usuario.id)
            localStorage.setItem('email', usuario.email)

            window.location.href="../html/home.html"
        }
    });

    if(!isValido){
        alert('Usuário não cadastrado!')
    }

})
