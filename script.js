// ---------------------------------------- BOTON ALERTA EDICION  ---------------------------------------------
const alertaEdicion = document.getElementById('alertaEdicion')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertaEdicion.append(wrapper)
}

const alertTrigger = document.getElementById('editarBloqueado')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Para editar primero debes logearte', 'danger')
  })
}

// ---------------------------------------- BOTON REDES ---------------------------------------------
const Redes = document.getElementById('alertaRedes')

const redes = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertaRedes.append(wrapper)
}

const redesTrigger = document.getElementById('redes')
if (redesTrigger) {
  redesTrigger.addEventListener('click', () => {
    alert('<i class="bi bi-discord me-2"></i>TZ#8705 <i class="bi bi-envelope-fill ms-2 me-1"></i>tomyrodry.tz@gmail.com <i class="bi bi-telephone-fill ms-2 me-2"></i>(+54) 2983659702 <a href="https://www.linkedin.com/in/tomás-rodríguez-61711120b/"><i class="bi bi-linkedin ms-2"></i></a> <a href="https://www.instagram.com/tomyrodry/"><i class="bi bi-instagram ms-2"></i></a>', 'info')
  })
}

// ---------------------------------------- ACERCA DE MI ---------------------------------------------
function cambiar_parrafo_acercademi(){
  document.getElementById("editar-acercademi").style.display="block";
  let texto = document.getElementById("texto-acercademi").innerText;
};

function myFunction(valor){
  document.getElementById("texto-acercademi").innerText=valor;
};

function logMessage(message){
  console.log(message + "<br>");
}

let textareaAcercademi=document.getElementById("editar-acercademi")
textareaAcercademi.addEventListener('keyup', (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key=="Enter"){
    document.getElementById("editar-acercademi").style.display="none"
  }
});

// ---------------------------------------- EXPERIENCIA ---------------------------------------------
function cambiar_parrafo_exp(){
  document.getElementById("editar-exp").style.display="block";
  let texto = document.getElementById("texto-exp").innerText;
};

function myFunction2(valor){
  document.getElementById("texto-exp").innerText=valor;
};

function logMessage(message){
  console.log(message + "<br>");
}

let textareaExp=document.getElementById("editar-exp")
textareaExp.addEventListener('keyup', (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key=="Enter"){
    document.getElementById("editar-exp").style.display="none"
  }
});

// ---------------------------------------- EDUCACION ---------------------------------------------
function cambiar_parrafo_educacion(){
  document.getElementById("editar-educacion").style.display="block";
  let texto = document.getElementById("texto-educacion").innerText;
};

function myFunction3(valor){
  document.getElementById("texto-educacion").innerText=valor;
};

function logMessage(message){
  console.log(message + "<br>");
}

let textareaEducacion=document.getElementById("editar-educacion")
textareaEducacion.addEventListener('keyup', (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key=="Enter"){
    document.getElementById("editar-educacion").style.display="none"
  }
});