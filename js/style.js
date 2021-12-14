
const uidEl = document.getElementById('uid')
const mainEl = document.getElementById('main')
const signElArr = document.getElementsByClassName('sign')
const valueElArr = document.getElementsByClassName('value')
const listEl = document.getElementsByClassName('item')
const listWrapperEl = document.getElementById('withdraw-list')
const contentEl = document.getElementById('content')
const mockEl = document.getElementById('mock')
const dialogEl = document.getElementById('dialog')
const dialogIconEl = document.getElementById('dialog-icon')
const bgEl = document.getElementById('bg')
const buttonEl = document.getElementsByClassName('button-text')
const dialogContentEl = document.getElementById('dialog-content')
const dialogTextEl = document.getElementById('dialog-text')
const avatarEl = document.getElementById('avatar')
const sign = {'BR':'R$','US':'$','IN':'₹'}
let transY = 0

function updateView() {
    randomEl(listEl)
    swipe()
    setSign(country)
    setId()
    setAvatar()
    showDialog()
}

function setAvatar(){
    if(avatar === 'false'){
        return
    }
    const imgEl = document.createElement('img')
    imgEl.onload = ()=>{
        console.log('avatar finished');
        avatarEl.src = avatar
    }
    imgEl.src = avatar
    
}

function setId(){
    if(!uid){
        return
    }
    uidEl.innerHTML = uid
}

function setLan(){
    dialogContentEl.innerHTML = `<div>Chegaram <span><span class="sign">₹</span><em class="value">100</em></span> à sua conta,</div>
    <div>baixe APP para obtê-lo agora!</div>`
    dialogTextEl.innerHTML = `<div class="text-12">EI!! Eu prometo que é VERDADE!</div>
    <div class="text-14">Ganhei <span><em class="sign">₹</em><em class="value">100</em></span>! Baixe este aplicativo e abra-o, então você também pode ganhar <span><em class="sign">₹</em><em class="value">100</em></span>!</div>
    <div class="text-14">Se você se juntar a mim, podemos ganhar <span><em class="sign">₹</em><em class="value">500</em></span> por semana!</div>`
    for (let el of buttonEl) {
        el.innerHTML = `Ganhe <span class="sign">₹</span><em class="value">100</em> agora!`
    }
}

function setSign(country){
    switch (country) {
        case 'BR':
            mainEl.classList.add('ba')
            dialogEl.classList.add('br')
            bgEl.classList.add('ba')
            dialogIconEl.classList.add('br')
            setLan()
            for (let el of signElArr) {
                el.innerHTML = 'R$'
            }
            break;
        case 'IN':
            dialogEl.classList.add('in')
            bgEl.classList.add('in')
            mainEl.classList.add('in')
            for (let el of signElArr) {
                el.innerHTML = '₹'
            }
            break;
        case 'US':
            bgEl.classList.add('us')
            mainEl.classList.add('us')
            dialogIconEl.classList.add('us')
            for (let el of signElArr) {
                el.innerHTML = '$'
            }
            for (let el of valueElArr) {
                el.innerHTML = el.innerHTML/10
            }
            break;
        default:
            dialogEl.classList.add('in')
            bgEl.classList.add('in')
            mainEl.classList.add('in')
            for (let el of signElArr) {
                el.innerHTML = '₹'
            }
            break;
    }
}



function randomEl(arr) {
    for (let el of arr) {
        el.innerHTML = setText()
    }
    function setText(){
        return `${randomInt(10, 99)}***${randomInt(0, 9)} ${country === 'BR' ? 'acabou de retirar' : 'just withdraw'} <span>${sign[country] || '₹'}${randomInt(50, 300)}</span>`
    }
}

function showDialog() {
    mockEl.style.display = 'block'
    document.body.style.overflowY = 'hidden'
}

function closeDialog() {
    mockEl.style.display = 'none'
    document.body.style.overflowY = 'auto'
}

function swipe(){
    setInterval(()=>{
        transY++
        if(listEl[0].getBoundingClientRect().top - contentEl.getBoundingClientRect().top == -27){
            let el = listEl[0]
            randomEl([el])
            listWrapperEl.removeChild(listEl[0])
            listWrapperEl.appendChild(el)
            transY = 0
        }
        listWrapperEl.style.transform = `translateY(-${transY}px)`
    },100)
}

updateView()