let ranges = document.querySelectorAll('input[type="range"]')



for (let range of ranges){
    currency.oninput = range.oninput = (e)=>{

    resultSum.innerHTML = Math.round(+sum.value *((1 +percent.value/100)**Math.round(+time.value/12)))*(+currency.value)
    profit.innerHTML = Math.round((resultSum.innerHTML - +sum.value)/ +currency.value)

    if (+resultSum.innerHTML >= 1000000){
        duty.innerHTML = +resultSum.innerHTML/100 * 13
        resultSum.innerHTML = (+resultSum.innerHTML/1000000).toFixed(1)+' млн'
        
        profit.innerHTML =  Math.round(+sum.value *((1 +percent.value/100)**Math.round(+time.value/12)))*(+currency.value) - +sum.value
    }

        let span  = document.querySelector('#span'+e.target.id)
        let detail = (e.target.id=='percent')?'%':(e.target.id=='time')?'months':''

        span.innerHTML = e.target.value + ' ' + detail
    }
}
