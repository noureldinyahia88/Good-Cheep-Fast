const toggle = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggle.forEach(toggle=>toggle.addEventListener('change',(e=>doTrick(e.target))))

function doTrick(theClickOne) {
    if(good.checked && cheap.checked && fast.checked){
        if(good === theClickOne) {
            fast.checked = false
        }
        if(cheap === theClickOne) {
            good.checked = false
        }
        if(fast === theClickOne) {
            cheap.checked = false
        }
    }
}