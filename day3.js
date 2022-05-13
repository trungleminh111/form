var btnOpen = document.querySelector('.open-modal-ntn')
var modal = document.querySelector('.modal')
var IconClose = document.querySelector('.modal-header i')
var btnClose = document.querySelector('.modal-footer button')

function toggleModal(e){
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click',toggleModal)
btnClose.addEventListener('click',toggleModal)
IconClose.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})