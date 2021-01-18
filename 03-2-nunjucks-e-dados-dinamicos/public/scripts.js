const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
    card.addEventListener('click', function(){
        const maximize = modalOverlay.querySelector('.modal').classList.contains('maximize');
        if (maximize) {
            modalOverlay.querySelector('.modal').classList.remove('maximize');
        }
        modalOverlay.classList.add('active');
        const courseId = card.getAttribute("id");
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${courseId}/`;
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function(){
        modalOverlay.classList.remove('active');
        modalOverlay.querySelector('iframe').src = "";
    })

modalOverlay.querySelector('.maximize-modal').addEventListener('click', function(){
    modalOverlay.querySelector('.modal').classList.add('maximize');
})

