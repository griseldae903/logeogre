//trabajamos primero el registro para crear usuarios que
//luego vamos a ir testeando en el login...
//dentro del registro lo que se hace es crear una minibase datos
// usando Local Storage.

const signupForm= document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault() //para que no se recargue la pagina
    const name= document.querySelector('#name').value
    const email=document.querySelector('#email').value
    const password=document.querySelector('#password').value

    //chequear que el mail no este en BD. Si esta no lo guardamos y sino lo guardamos

    const Users= JSON.parse(localStorage.getItem('users'))||[]
    //buscamos con un find...
    const isUserRegistered = Users.find(user=> user.email===email)
    if(isUserRegistered){
        return alert('Usuario ya registrado')
    }
    Users.push({name:name, email:email, password:password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro exitoso!')
    window.location.href ='login.html'
})
