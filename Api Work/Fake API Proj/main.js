
void (async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    createUsers(data)
})()

const users = document.querySelector('.users')


mainInput.onfocus = () => {

    users.innerHTML = ''

}
mainInput.onkeydown = async (e) => {

    if (e.key === 'Enter') {
        let data;
        let url = mainInput.value
        let res = await fetch(url)

        if (res.ok) {
            data = await res.json()
        } else {
            console.log(res.status)
        }
        console.log(data)
        if (Array.isArray(data)) {
            createUsers(data)

        } else if (typeof data == 'object') {
            createUser(data)
            mainInput.value = ''
            mainInput.blur()
        }
    }


}
document.querySelector('.users').onclick = async (e) => {
    let user = e.target.closest('.user')
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${user.getAttribute('id')}`)
    let data = await res.json()

    createUser(data, user)
}


function createUser(data) {

    users.innerHTML = `<h1>User</h1>
    <p>ID : <b id="id"></b></p>
    <p>Name : <b id="name"></b></p>
    <p>Username : <b id="username"></b></p>
    <p>@email : <b id="email"></b></p>
    <p>phone : <b id="phone"></b></p>
    <p>website : <a id="website" href="#"></a></p>
    <div class="address">
        <h2>Adress</h2>
        <p>City : <b id="city"></b></p>
        <p>Street : <b id="street"></b></p>`

    for (let key in data) {

        if (typeof data[key] === 'object') {
            for (let minikey in data[key]) {
                if (document.getElementById(minikey)) {
                    document.getElementById(minikey).innerHTML = data[key][minikey]
                }
            }
        }

        if (document.getElementById(key))
            document.getElementById(key).innerHTML = data[key]
    }
}

function createUsers(data) {
    for (let item of data) {
        let user = document.createElement('div')
        user.className = 'user'
        user.id = item.id
        user.innerHTML = `id: ${item.id}<br> name : ${item.name}`
        users.appendChild(user)
    }
    mainInput.value = ''
    mainInput.blur()

}
BTNusers.onclick = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    let data = await response.json()
    users.innerHTML = ''
    createUsers(data)
}