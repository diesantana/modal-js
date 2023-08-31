const btnOpen = document.querySelector('#open-modal');
const btnClose = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

// Controla a exibição do modal
const toggleModal = () => {
    [modal, fade].forEach(el => el.classList.toggle('hide'));
};

// Manipulando o clique nos elementos
[btnOpen, btnClose, fade].forEach(el => {
    el.addEventListener('click', toggleModal);
});