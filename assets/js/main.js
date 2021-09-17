/* Menu Show */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

/* Llama a las clases de la seccion de navegacion */
showMenu('nav-toggle','nav-menu')

/*======= ACTIVE AND REMOVE MENU ======*/
const navlink = document.querySelectorAll('.nav__link');

function linkAction(){
    //Active link
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu movile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click', linkAction))

/*======= SCROLL REVEAL ANIMATION ======*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset:true
})

/* SCROLL HOME */
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval:200})

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/* Enviar datos del formulario */
const $form = document.querySelector('#contact__form')

$form.addEventListener('submit',handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response =await fetch(this.action,{
        method: this.method,
        body:form,
        headers:{
            'Accept':'application/json'
        }
    })

    if(response.ok){
        this.reset()
        alertify.success("Mensaje Enviado")  
        }
    }