// Заповнення полів
const GET_FORM = document.forms.login
let getRightDiv = document.querySelector('#us')

let regExpforLogin = /^[a-zA-Z]{4,16}\b$/i
let regExpforPass = /.*(\w{4,16}[-_]?)/
let regExpforEmail = /(\w+\.?\w+\.?\w+@{1}\w+\.\w+)/

let counter = 1
GET_FORM.add_btn.addEventListener('click',function(){
    // Доступ до усіх елементів форми
    let nameValue = GET_FORM.nameV.value
    let passwordValue = GET_FORM.passV.value
    let emailValue = GET_FORM.emailV.value
    let add_btn = GET_FORM.add_btn
    //******************************** */
    // Функіонал
    
    let test = nameValue
    let test1 = passwordValue
    let test2 = emailValue
    let regName= regExpforLogin.exec(test)
    let regPass= regExpforPass.exec(test1)
    let regEmail= regExpforEmail.exec(test2)
   

    if(regName !=null && regPass!=null && regEmail!=null ){
        //Створення всіх елементів для виводу 
        let myDiv = document.createElement('div')
        let mySpan = document.createElement('span')
        let mySpan1 = document.createElement('span')
        let mySpan2 = document.createElement('span')
        let mySpan3 = document.createElement('span')
        let createEditBtn = document.createElement('button')
        let createDeleteBtn = document.createElement('button')
        let editUser = document.createElement('button')

        createEditBtn.textContent = 'Edit'
        createEditBtn.classList.add('stlEdit')

        createDeleteBtn.textContent = 'Delete'
        createDeleteBtn.classList.add('stlDelete')

        myDiv.classList.add('user')
        getRightDiv.append(myDiv)
        myDiv.append(mySpan)
        myDiv.append(mySpan1)
        myDiv.append(mySpan2)
        myDiv.append(mySpan3)
        myDiv.append(createEditBtn)
        myDiv.append(createDeleteBtn)

        // Вивід 
        mySpan.textContent = counter
        mySpan1.textContent = regName.input
        mySpan2.textContent = regPass.input
        mySpan3.textContent = regEmail.input


        counter++
        console.log(regName.input);
        // Зміна, видалення елемента 
        createEditBtn.addEventListener('click',function(){
            GET_FORM.nameV.value = regName.input
            GET_FORM.passV.value = regPass.input
            GET_FORM.emailV.value= regEmail.input
            
            editUser.classList.add('styleEdit')
            let getLeftDiv = document.querySelector('.left')

            getLeftDiv.append(editUser)
            editUser.textContent = 'Edit user'
            add_btn.style.display=  'none'
            editUser.style.display = 'block'

            editUser.addEventListener('click',function(){
                let regExpforLogin = /^[a-zA-Z]{4,16}\b$/i
                let regExpforPass = /.*(\w{4,16}[-_]?)/
                let regExpforEmail = /(\w+\.?\w+\.?\w+@{1}\w+\.\w+)/

                add_btn.style.display=  'block'
                editUser.style.display = 'none'

                let test = GET_FORM.nameV.value
                let test1 = GET_FORM.passV.value
                let test2 = GET_FORM.emailV.value

                let newRegLog = regExpforLogin.exec(test)
                let newRegPas = regExpforPass.exec(test1)
                let newRegEmail = regExpforEmail.exec(test2)
                
                
                if(newRegEmail !=null ){
                    mySpan1.textContent = newRegLog.input
                    mySpan2.textContent = newRegPas.input
                    mySpan3.textContent = newRegEmail.input
                }
                
                GET_FORM.reset()
            })

            
        })

        createDeleteBtn.addEventListener('click',function(e){
         
            let hetC = getRightDiv.children
              
            
                let myElem = e.target.parentElement.firstChild.textContent
                let toNum = Number(myElem)
                 for(let i = toNum;i<hetC.length;i++){
                    let getN = hetC[i].firstChild.textContent
                    hetC[i].firstChild.textContent= Number(getN) - 1
                }

                myDiv.remove()
                counter--
         
        })
    
    }
    else{
        alert('Переконайтесь в правильності вводу')
    }
    GET_FORM.reset()
   
})


