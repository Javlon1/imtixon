const elUl = document.querySelector(".uusseerr")
const elBtn = document.querySelectorAll(".btn")
const elInfo = document.querySelector(".user__info")
const elHeader = document.querySelector(".chat__header")
const elUser1 = document.querySelector(".user1")
const elUser2 = document.querySelector(".user2")

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=> res.json())
.then((data)=> mapper(data))

function mapper(data) {
    data.forEach((e)=>{
        let newLi = document.createElement("li")
        newLi.innerHTML = `
        <a id='${e.id}' class="user">
            <img id='${e.id}' src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
            <div id='${e.id}' class="info">
                <h1 id='${e.id}' class="name">${e.name}</h1>
                <p id='${e.id}' class="text">${e.company.catchPhrase}</p>
            </div>    
        </a>
        `
        elUl.appendChild(newLi)
    });
    const elBtnn = document.querySelectorAll(".user")
    elBtnn.forEach((e)=>{
        e.addEventListener('click', (j)=>{
            if (j.target.id == 1) {
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[0].name}</p>
                        <h1 >${dat[0].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[1].name}</p>
                    <h1 >${dat[10].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[0].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[0].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[0].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[0].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[0].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }else if(j.target.id == 2){
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[1].name}</p>
                        <h1 >${dat[10].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[0].name}</p>
                    <h1 >${dat[0].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[1].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[1].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[1].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[1].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[1].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }else if(j.target.id == 3){
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[2].name}</p>
                        <h1 >${dat[20].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[3].name}</p>
                    <h1 >${dat[30].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[2].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[2].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[2].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[2].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[2].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }else if(j.target.id == 4){
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[3].name}</p>
                        <h1 >${dat[30].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[2].name}</p>
                    <h1 >${dat[20].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[3].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[3].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[3].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[3].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[3].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }else if(j.target.id == 5){
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[4].name}</p>
                        <h1 >${dat[40].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[5].name}</p>
                    <h1 >${dat[50].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[4].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[4].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[4].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[4].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[4].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }else if(j.target.id == 6){
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[5].name}</p>
                        <h1 >${dat[50].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[4].name}</p>
                    <h1 >${dat[40].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[5].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[5].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[5].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[5].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[5].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }else if(j.target.id == 7){
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[6].name}</p>
                        <h1 >${dat[60].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[7].name}</p>
                    <h1 >${dat[70].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[6].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[6].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[6].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[6].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[6].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }else if(j.target.id == 8){
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[7].name}</p>
                        <h1 >${dat[70].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[6].name}</p>
                    <h1 >${dat[60].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[7].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[7].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[7].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[7].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[7].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }else if(j.target.id == 9){
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[8].name}</p>
                        <h1 >${dat[80].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[9].name}</p>
                    <h1 >${dat[90].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[8].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[8].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[8].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[8].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[8].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }else if(j.target.id == 10){
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                .then((res)=> res.json())
                .then((dat)=> post(dat))
                function post(dat) {
                    dat.forEach((e)=>{
                    elUser1.innerHTML = `
                        <p>${data[9].name}</p>
                        <h1 >${dat[90].body}</h1>         
                    `
                    elUser2.innerHTML = `
                    <p>${data[8].name}</p>
                    <h1 >${dat[80].body}</h1>         
                    `
                    })
                }
                elHeader.innerHTML=`
                <div>
                    <h1 class="chat_user-name">${data[9].name}</h1>
                    <p>был(а) недавно</p>
                </div>
                <ul class="list">
                    <li class="list__item"><a href="#"><i class="bi bi-search"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-telephone-fill"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-layout-sidebar-reverse"></i></a></li>
                    <li class="list__item"><a href="#"><i class="bi bi-three-dots-vertical"></i></a></li>
                </ul>
                `
                elInfo.innerHTML = `
                <div class="user__img">
                    <div class="inf">
                        <h1>информация</h1>
                        <button><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="intro">
                        <img class="user_img" src="https://rutensil.com/uploads/oI54YB4s8GmWZcX7AF4QDAH8IWUiFCZH.jpeg" alt="">
                        <div class="div_user_name">
                            <h1 class="user_name">${data[9].name}</h1>
                            <p>был(а) недавно</p>
                        </div>
                    </div>
                </div>
                <div class="boshkqa">
                    <div class="nomer">
                        <i class="bi bi-info-circle"></i>
                        <div class="number">
                            <h1>${data[9].phone}</h1>
                            <p>Телефон</p>
                        </div>
                    </div>
                    <div class="abut">
                        <h1>${data[9].company.catchPhrase}</h1>
                        <p>о себе</p>
                    </div>
                    <div class="user__name">
                        <a href="https://t.me/Muhammadjonov_javlon">${data[9].email}</a>
                        <p>имя пользователя</p>
                    </div>
                    <div class="bell">
                        <i class="bi bi-bell"></i>
                        <h1>уведомления</h1>
                        <i class="bi bi-toggle2-off j"></i>
                    </div>
                </div>
                `
            }
        })
    })
    elBtn.forEach((e)=>{
        e.addEventListener('click', (i)=>{
            elBtnn.forEach((q)=>{
                if (i.target.id == 1) {
                    q.style.display = "block"
                }else if (i.target.id == 2) {
                    q.style.display = "none"
                    elBtnn[0].style.display = "block"
                    elBtnn[1].style.display = "block"
                }else if (i.target.id == 3) {
                    q.style.display = "none"
                    elBtnn[2].style.display = "block"
                    elBtnn[3].style.display = "block"
                }else if (i.target.id == 4) {
                    q.style.display = "none"
                    elBtnn[4].style.display = "block"
                    elBtnn[5].style.display = "block"
                }else if (i.target.id == 5) {
                    q.style.display = "none"
                    elBtnn[6].style.display = "block"
                    elBtnn[7].style.display = "block"
                }else if (i.target.id == 6) {
                    q.style.display = "none"
                    elBtnn[8].style.display = "block"
                    elBtnn[9].style.display = "block"
                }
            })
        })
    })
}