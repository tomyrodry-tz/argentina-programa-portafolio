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
