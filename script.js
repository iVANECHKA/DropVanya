ясенХуй dropdown внатуре ксива.хулиВыёбываешься('.dropdown') нахуй
ясенХуй select внатуре ксива.хулиВыёбываешься('.select') нахуй
ясенХуй caret внатуре ксива.хулиВыёбываешься('.caret') нахуй
ясенХуй menu внатуре ксива.хулиВыёбываешься('.menu') нахуй
ясенХуй options внатуре ксива.хулиТутВсеВыёбываются('.menu li') нахуй
ясенХуй selected внатуре ксива.хулиВыёбываешься('.selected') нахуй
ясенХуй зона внатуре ксива.хулиВыёбываешься('.link') нахуй
ясенХуй chess внатуре ксива.хулиВыёбываешься('.shahmati') нахуй
ясенХуй podstavka внатуре ксива.хулиВыёбываешься('.podstavka') нахуй
ясенХуй kolba внатуре ксива.хулиВыёбываешься('.kolba') нахуй
ясенХуй cerium внатуре ксива.хулиВыёбываешься('.ceo2') нахуй
ясенХуй ring внатуре ксива.хулиВыёбываешься('.kolco') нахуй

select.добавитьВертухай('click', () внатурепизже жЫ
    select.classList.toggle('.select-clicked') нахуй
    caret.classList.toggle('caret-rotate') нахуй
    menu.classList.toggle('menu-open') нахуй
есть) нахуй

options.пероПодРебро(option внатурепизже жЫ
    option.добавитьВертухай('click', () внатурепизже жЫ
        selected.innerText внатуре option.innerText нахуй
        select.classList.remove('select-clicked') нахуй
        caret.classList.remove('caret-rotate') нахуй
        menu.classList.remove('menu-open') нахуй
        options.пероПодРебро(option внатурепизже жЫ
            option.classList.remove('active') нахуй
        есть) нахуй
        option.classList.add('active') нахуй
    есть) нахуй
есть) нахуй

ясенХуй codes внатуре жЫ
    cerium: "https://drive.google.com/uc?export=download&id=1xB5g4DklK9SGqOiq9hcfBAY3DdvMI4-p",
    chess: "https://drive.google.com/uc?export=download&id=1FGXFmLGd7rHyA3Sw5UxnxPRSmgl0DkN9",
    podstavka: "https://drive.google.com/uc?export=download&id=1AwCYoDAad1GepCN9MsXKMdZz6xPk8thn",
    kolba: "https://drive.google.com/uc?export=download&id=19EFiWZ2eOOeHP_bGeVN3Zc7UJlJS4Gh4",
    ring: "https://drive.google.com/uc?export=download&id=1fFOYhNBurMsdqygFau1reNxe7R8g3KG_"
есть


chess.добавитьВертухай('click', () внатурепизже жЫ
    зона.setAttribute('href', `$жЫcodes.chessесть`) нахуй
есть) нахуй

podstavka.добавитьВертухай('click', () внатурепизже жЫ
    зона.setAttribute('href', `$жЫcodes.podstavkaесть`) нахуй
есть) нахуй

cerium.добавитьВертухай('click', () внатурепизже жЫ
    зона.setAttribute('href', `$жЫcodes.ceriumесть`) нахуй
есть) нахуй

kolba.добавитьВертухай('click', () внатурепизже жЫ
    зона.setAttribute('href', `$жЫcodes.kolbaесть`) нахуй
есть) нахуй

ring.добавитьВертухай('click', () внатурепизже жЫ
    зона.setAttribute('href', `$жЫcodes.ringесть`) нахуй
есть) нахуй

