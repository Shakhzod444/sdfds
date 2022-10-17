let reg = document.forms.reg
let newreg = document.querySelector('.newreg')
let name = document.querySelector(`[data-name]`)
let surename = document.querySelector(`[data-surname]`)
let password = document.querySelector(`[data-password]`)





let inp = document.querySelector('input')

inp.value = localStorage.getItem('inputEmail')
name.value = localStorage.getItem('inputname')
surename.value = localStorage.getItem('inputsurename')
password.value = localStorage.getItem('inputpassword')



inp.onkeyup = () => {
   console.log(inp.value);
   localStorage.setItem('inputEmail', inp.value)
}

name.onkeyup = () => {
   console.log(inp.value);
   localStorage.setItem('inputname', name.value)
}

surename.onkeyup = () => {
   console.log(inp.value);
   localStorage.setItem('inputsurename', surename.value)
}

password.onkeyup = () => {
   console.log(inp.value);
   localStorage.setItem('inputpassword', password.value)
}
let pere = document.querySelector('perekid')



if(localStorage === true) {
   pere.onclick = () =>  {
      window.location = 'file:///C:/Users/user/Desktop/js/regist/ind%D0%B5x.html'
   }
}





















reg.onsubmit = (e) => {

   let arr = {
      id: Math.round(Math.random() * 100000000),
   }

   let fm = new FormData(reg)

   fm.forEach((value, key) => {
      arr[key] = value
   })

   arr = JSON.stringify(arr)

   localStorage.setItem('reg', arr)
   console.log(arr);
}
