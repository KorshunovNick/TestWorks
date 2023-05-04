async function getTodos(url) {
    try {

        let response = await fetch(url)
        let data = await response.json()

        console.log('function async')
        for (let key in data) {
            console.log(`Key : ${key}`)
            console.log(`Value : ${data[key]}`)
        }
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log('-'.repeat(20))
        console.log('-'.repeat(20))
    }
}

getTodos('https://jsonplaceholder.typicode.com/todos/1')

new Promise((resolve, reject) => {
    try {
        resolve(fetch('https://jsonplaceholder.typicode.com/todos/1'))
    } catch (e) {
        console.log('ERROR ' + e.message)
    }
})
    .then(data => data.json())
    .then(data => {
        console.log('promise')
        for (let key in data) {
            console.log(`Key : ${key}`)
            console.log(`Value : ${data[key]}`)
        }
        
    })
    .catch(e => console.log(e.message))
    .finally(()=>{
        console.log('-'.repeat(20))
        console.log('-'.repeat(20))
    })

void (async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await response.json()

        console.log('void async ()=>')
        for (let key in data) {
            console.log(`Key : ${key}`)
            console.log(`Value : ${data[key]}`)
        }
    } catch (e) {
        console.log(e.message)
    }
})()