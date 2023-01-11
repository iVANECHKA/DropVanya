const dropdown = document.querySelector('.dropdown');
const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const options = document.querySelectorAll('.menu li');
const selected = document.querySelector('.selected');
const link = document.querySelector('.link');
const chess = document.querySelector('.shahmati');
const podstavka = document.querySelector('.podstavka');
const kolba = document.querySelector('.kolba');
const cerium = document.querySelector('.ceo2');
const ring = document.querySelector('.kolco');

select.addEventListener('click', () => {
    select.classList.toggle('.select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
});

const codes = {
    cerium: "https://drive.google.com/uc?export=download&id=1xB5g4DklK9SGqOiq9hcfBAY3DdvMI4-p",
    chess: "https://drive.google.com/uc?export=download&id=1FGXFmLGd7rHyA3Sw5UxnxPRSmgl0DkN9",
    podstavka: "https://drive.google.com/uc?export=download&id=1AwCYoDAad1GepCN9MsXKMdZz6xPk8thn",
    kolba: "https://drive.google.com/uc?export=download&id=19EFiWZ2eOOeHP_bGeVN3Zc7UJlJS4Gh4",
    ring: "https://drive.google.com/uc?export=download&id=1fFOYhNBurMsdqygFau1reNxe7R8g3KG_"
}


chess.addEventListener('click', () => {
    link.setAttribute('href', `${codes.chess}`);
});

podstavka.addEventListener('click', () => {
    link.setAttribute('href', `${codes.podstavka}`);
});

cerium.addEventListener('click', () => {
    link.setAttribute('href', `${codes.cerium}`);
});

kolba.addEventListener('click', () => {
    link.setAttribute('href', `${codes.kolba}`);
});

ring.addEventListener('click', () => {
    link.setAttribute('href', `${codes.ring}`);
});

