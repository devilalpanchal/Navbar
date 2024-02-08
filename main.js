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

// let obj = [
//     {
//     page : 'home',
//     link: 'home.html'
// },
//     {
//     page : 'about',
//     link: 'about.html'
// },
//     {
//     page : 'service',
//     link: 'service.html'
// },
//     {
//     page : 'contact',
//     link: 'contact.html'
// }
   
// ]

let btn = document.querySelector('.menu')
btn.addEventListener('click',()=>{

let pages = document.querySelector('.pages')
pages.classList.toggle('show')

})