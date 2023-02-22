import {saveRate, getCurrentRate} from './firebase.js'

let rate = 0



const $nav = document.querySelector("#hamburguer button")
const $navMenu = document.querySelector(".hamburger__menu")

$nav.addEventListener('click', e => {
    $nav.classList.toggle('open');
    $navMenu.classList.toggle('open-menu')
})

const $icon1 = document.getElementById("icon1")
const $icon2 = document.getElementById("icon2")
const $icon3 = document.getElementById("icon3")
const $loading = document.querySelector(".loading-btn")
const $loadingSpam = document.querySelector(".loading-span")
const $contactInfo = document.querySelector(".contact__right--info")
const $contactMessage = document.querySelector(".contact__right--message")
const $contactRate = document.querySelector(".contact__right--rate")
const $check = document.querySelector(".check")
const $contactForm = document.querySelector(".contact-form")
const $cancelBtn = document.querySelector(".cancel-btn")
$cancelBtn.addEventListener("click", ()=>{
    $contactForm.reset()
})
$contactForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    $loadingSpam.classList.add("loading")
    $check.classList.add("check-icon")
    setTimeout(()=>{
        $loadingSpam.classList.remove("loading")
    },2000)
    setTimeout(()=>{
        $icon3.classList.add('red-circle')
        $icon1.classList.remove('red-circle')
        $icon2.classList.remove('red-circle')
        $contactInfo.classList.add('hidden')
        $contactMessage.classList.add('hidden')
        $contactRate.classList.remove('hidden')
    }, 4000)
})



$icon1.addEventListener("click", ()=>{
    $icon1.classList.add('red-circle')    
    $icon2.classList.remove('red-circle')
    $icon3.classList.remove('red-circle')
    $contactInfo.classList.remove('hidden')
    $contactMessage.classList.add('hidden')
    $contactRate.classList.add('hidden')
})
$icon2.addEventListener("click", ()=>{
    $icon2.classList.add('red-circle')
    $icon1.classList.remove('red-circle')
    $icon3.classList.remove('red-circle')
    $contactMessage.classList.remove('hidden')
    $contactInfo.classList.add('hidden')
    $contactRate.classList.add('hidden')
    
})
$icon3.addEventListener("click", ()=>{
    $icon3.classList.add('red-circle')
    $icon1.classList.remove('red-circle')
    $icon2.classList.remove('red-circle')
    $contactInfo.classList.add('hidden')
    $contactMessage.classList.add('hidden')
    $contactRate.classList.remove('hidden')
})

const pintarCirculo = (a)=>{
    for (let i = 1; i<=5; i++){
        if(i === a){
            document.getElementById(`btn${i}`).style.background = "#ff3c78"
            rate = i
            console.log(rate)
        }else{
            document.getElementById(`btn${i}`).style.background = "#f9f9f9"
        }
    }    
}

// logic for rate buttons !!
const $btn1 = document.getElementById("btn1")
const $btn2 = document.getElementById("btn2")
const $btn3 = document.getElementById("btn3")
const $btn4 = document.getElementById("btn4")
const $btn5 = document.getElementById("btn5")

$btn1.addEventListener("click", ()=>{
    pintarCirculo(1)
})
$btn2.addEventListener("click", ()=>{
    pintarCirculo(2)
})
$btn3.addEventListener("click", ()=>{
    pintarCirculo(3)
})
$btn4.addEventListener("click", ()=>{
    pintarCirculo(4)
})
$btn5.addEventListener("click", ()=>{
    pintarCirculo(5)
})


window.addEventListener("DOMContentLoaded", async ()=>{
    let length = 0
    let cont = 0
    let avg = 0
    console.log("Works")
    const querySnapshot = await getCurrentRate()
    console.log(querySnapshot)
    querySnapshot.forEach( doc => {
        console.log(doc.data().cont)        
        cont += doc.data().cont
        length += 1       
    } )
    document.getElementById("avgRate").textContent = (cont/length).toFixed(1)

})

const $form=  document.querySelector("#form")
const $text = document.getElementById("text-inp")
$form.addEventListener("submit", (e)=>{
    e.preventDefault()    
    console.log("submitted!!")
    saveRate(rate)
    $form.reset()
})

// const $skills = document.querySelector(".typing")
// const $techs = document.querySelector(".techs")

// const setVisible = ()=>{
//     if($techs.offsetTop <= document.documentElement.scrollTop){
//         $skills.classList.add("loader")
//     }
// }

// window.addEventListener("scroll", setVisible)

const $nextBtn = document.querySelector(".next-btn")
$nextBtn.addEventListener("click", ()=>{
    $icon2.classList.add('red-circle')
    $icon1.classList.remove('red-circle')
    $icon3.classList.remove('red-circle')
    $contactMessage.classList.remove('hidden')
    $contactInfo.classList.add('hidden')
    $contactRate.classList.add('hidden')
})

const $messageForm = document.querySelector(".contact-form")
$messageForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    $messageForm.reset()
})

const downloadBtn = document.querySelector("#download-btn")
downloadBtn.addEventListener("click", (e)=>{
        
})
const submitBtn = document.querySelector("#contact-btn")
const rateComponent = document.querySelector(".rate-com")
const rateSubmit = document.querySelector(".rate-submitted")
submitBtn.addEventListener("click", ()=>{
    rateComponent.classList.add("hidden")
    rateSubmit.classList.remove("hidden")
})

