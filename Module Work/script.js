// import { MyClass, value, func } from './module.js' // можно и так

void (async () => {
    try {
        let { MyClass: importClass, value: val, func: myFavoriteFunc, extra: extra = 10 } = await import('./module.js')
        let data = new importClass().class - myFavoriteFunc() + val - val + extra
        console.log(data)

    } catch (e) {
        console.log(e.message)
    }
})()