const navigation = document.querySelector('.navigation__items');
const links = document.querySelectorAll('.navigation__link');
const burger = document.querySelector('.header__navigation__burger');
const switcher = document.querySelector('.switch');
const cards = document.querySelectorAll('.main-card');
const mainCards = document.querySelector('.main-cards')
const action_a_cards = document.querySelector('.action-a');
const action_b_cards = document.querySelector('.action-b');
const action_c_cards = document.querySelector('.action-c');
const adjective = document.querySelector('.adjective');
const animal_a = document.querySelector('.animal-a');
const animal_b = document.querySelector('.animal-b');
const clothes = document.querySelector('.clothes');
const emotion = document.querySelector('.emotion');
const rotate = document.querySelectorAll('.rotate');
const card = document.querySelectorAll('.card');
const front_side_card = document.querySelectorAll('.front');
const card_header = document.querySelectorAll('.card-header')
const everyCard = document.querySelector('.card');
const wrapper = document.querySelector('.wrapper');
const start_game_button = document.querySelector('.start-game-button');
const arrCategories = [mainCards, action_a_cards, action_b_cards, action_c_cards, animal_a, animal_b, adjective, clothes, emotion];


const toggleCategory = () => {
    wrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('action-a-link')) {
            showAction_a();
        }
        if (e.target.classList.contains('action-b-link')) {
            showAction_b();
        }
        if (e.target.classList.contains('action-c-link')) {
            showAction_c();
        }
        if (e.target.classList.contains('adjective-link')) {
            showAdjective();
        }
        if (e.target.classList.contains('animal-a-link')) {
            showAnimal_a();
        }
        if (e.target.classList.contains('animal-b-link')) {
            showAnimal_b();
        }
        if (e.target.classList.contains('clothes-link')) {
            showClothes();
        }
        if (e.target.classList.contains('emotion-link')) {
            showEmotion();
        }
    })
}

toggleCategory();

const showMain = () => {
    arrCategories.forEach(category => {
        (category == mainCards) ? category.classList.remove('hidden'): category.classList.add('hidden');
    })
}

const showAction_a = () => {
    arrCategories.forEach(category => {
        (category == action_a_cards) ? category.classList.remove('hidden'): category.classList.add('hidden');
    })
}

const showAction_b = () => {
    arrCategories.forEach(category => {
        (category == action_b_cards) ? category.classList.remove('hidden'): category.classList.add('hidden');
    })
}

const showAction_c = () => {
    arrCategories.forEach(category => {
        (category == action_c_cards) ? category.classList.remove('hidden'): category.classList.add('hidden');
    })
}

const showAdjective = () => {
    arrCategories.forEach(category => {
        (category == adjective) ? category.classList.remove('hidden'): category.classList.add('hidden');
    })
}

const showAnimal_a = () => {
    arrCategories.forEach(category => {
        (category == animal_a) ? category.classList.remove('hidden'): category.classList.add('hidden');
    })
}

const showAnimal_b = () => {
    arrCategories.forEach(category => {
        (category == animal_b) ? category.classList.remove('hidden'): category.classList.add('hidden');
    })
}

const showClothes = () => {
    arrCategories.forEach(category => {
        (category == clothes) ? category.classList.remove('hidden'): category.classList.add('hidden');
    })
}

const showEmotion = () => {
    arrCategories.forEach(category => {
        (category == emotion) ? category.classList.remove('hidden'): category.classList.add('hidden');
    })
}


const navSlide = () => {
    burger.addEventListener('click', (e) => {
  
        navigation.classList.toggle('navigation__items-active');
  
        burger.classList.toggle('toggle');
        navSlideHide();
    });
}

navSlide();

const navigationClickHandler = () => {
    navigation.addEventListener('click', (e) => {
        if (e.target.classList.contains('to-main')) {
            showMain();
        }
        if (e.target.classList.contains('to-action-a')) {
            showAction_a();
        }
        if (e.target.classList.contains('to-action-b')) {
            showAction_b();
        }
        if (e.target.classList.contains('to-action-c')) {
            showAction_c();
        }
        if (e.target.classList.contains('to-adjective')) {
            showAdjective();
        }
        if (e.target.classList.contains('to-animal-a')) {
            showAnimal_a();
        }
        if (e.target.classList.contains('to-animal-b')) {
            showAnimal_b();
        }
        if (e.target.classList.contains('to-clothes')) {
            showClothes();
        }
        if (e.target.classList.contains('to-emotion')) {
            showEmotion();
        }
    })
}

navigationClickHandler();


const navSlideHide = () => {
    window.addEventListener('mouseup', (e) => {
        if (!e.target.classList.contains('navigation__items') &&
            !e.target.classList.contains('navigation__item') &&
            !e.target.classList.contains('header__navigation__burger') &&
            !e.target.classList.contains('header__navigation__burger-line1') &&
            !e.target.classList.contains('header__navigation__burger-line3')) {
            if (navigation.classList.contains('navigation__items-active')) {
                navigation.classList.remove('navigation__items-active');
                burger.classList.remove('toggle');
            }
        }
    })
};


const addNavigationClickHandler = () => {
    navigation.addEventListener("click", (e) => {
        if (e.target.classList.contains('navigation__link')) {
            const clickedLink = e.target;
            removeSelectedLinks();
            selectClickedLink(clickedLink);
        }
    })
}

const removeSelectedLinks = () => {
    links.forEach(link => {
        link.classList.remove('active');
    })
}

const selectClickedLink = (clickedLink) => {
    clickedLink.classList.add('active');
}

addNavigationClickHandler();



let object_train = {
    training_mode: false, 
}

const toggleTrainPlay = () => {
    switcher.addEventListener('change', () => {
        cards.forEach(card => {
            card.classList.toggle('card-play');
        })
        navigation.classList.toggle('train');
        object_train.training_mode = object_train.training_mode ? false : true;
        if (mainCards.classList.contains('hidden') && object_train.training_mode) {
            document.querySelector('.start-game').classList.remove('hidden');
            cardsPlayMode();
        } else {
            document.querySelector('.start-game').classList.add('hidden');
            removeCardsPlayMode();
        }
    })
}

toggleTrainPlay();


const cardsPlayMode = () => {
    rotate.forEach(r => {
        r.classList.add('hidden');
    })
    card_header.forEach(c => {
        c.classList.add('hidden');
    })
    front_side_card.forEach(f => {
        f.style.cssText += "background-size: inherit; border-radius: 25px; background-position: 50%; width: 100%;"
    })
}

const removeCardsPlayMode = () => {
    card_header.forEach(c => {
        c.classList.remove('hidden');
    })
    rotate.forEach(r => {
        r.classList.remove('hidden');
    })
}

const startGameBtn = () => {
    start_game_button.addEventListener('click', () => {
        alert('Sorry, game mode is not working yet...')
    })
}

startGameBtn();


const audioPlay = () => {
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('front') && !object_train.training_mode) {
            let audioName = e.target.querySelector('.card-header').innerHTML;
            const sound = new Audio();
            sound.src = `assets/mp3/${audioName}.mp3`;
            sound.play();
        }
    })
}

audioPlay();

const rotateCard = (e) => {
    card.forEach(c => {
        if (e.target.classList.contains('rotate')) {
            e.target.parentNode.classList.add('translate');
        }
        e.target.parentNode.addEventListener('mouseleave', (element) => {
            element.target.classList.remove('translate');
        })
    })
}

document.addEventListener('click', rotateCard);