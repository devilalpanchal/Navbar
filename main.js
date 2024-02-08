// METHOD
// json{
//     'name':"devilal"
// }

// json.stringfy
// json.pass

// object{
//     name:"devilal"
// }


// let obj = {
//     name : 'devilal'
// }
// let result = JSON.stringify(obj)
// console.log(result)

let obj = [
    {
    page : 'home',
    link: 'home.html'
},
    {
    page : 'about',
    link: 'about.html'
},
    {
    page : 'service',
    link: 'service.html'
},
    {
    page : 'contact',
    link: 'contact.html'
}
   

]

let socialarr = [
    {
        href: '#',
        icon:'<i class="fa-brands fa-facebook"></i>',
    },
    {
        href: '#',
        icon:'<i class="fa-brands fa-instagram"></i>',
    },
    {
        href: '#',
        icon:'<i class="fa-brands fa-twitter"></i>',
    },
    {
        href: '#',
        icon:'<i class="fa-brands fa-github"></i>',
    },
]


let pageContainer = document.querySelector('.pages')
let pageArray = pageObj.map((item)=>{
    return` <li class="page"><a href="${item.link}>${item.page}">Home</a></li>`
})

pageContainer.innerHTML = pageArr.join(' ');


let btn = document.querySelector('.menu')
btn.addEventListener('click',()=>{

let pages = document.querySelector('.pages')
pages.classList.toggle('show')

let icons = document.querySelector('.social-icons')
icons.classList.toggle('show')

})


let socialContainer = document.querySelector('.social-icons')
let socialArr = socialObj.map((item)=>{
     return`  <li class="social-icon"><a href=${item.href}>${item.page}><i class="fa-brands fa-facebook"></i></a></li>`
})