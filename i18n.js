import i18n from 'i18next';
import en from './locales/en.json'
import hu from './locales/hu.json'
import ro from './locales/ro.json'

i18n.init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
        en: {
            translation: en,
        },
        ro: {
            translation: ro,
        },
        hu: {
            translation: hu,
        }
    }
})
document.getElementById('about_me').innerHTML = i18n.t('common.about_me')

function updateContent() {
    $('#logo').html(i18n.t('logo'));
    $('.about').html(i18n.t('common.about'));
    $('.projects').html(i18n.t('common.projects'));
    $('.contact').html(i18n.t('common.contact'));
    $('#about_me').html(i18n.t('common.about_me'));
    $('#hire_me').html(i18n.t('common.hire_me'));
    $('#title').html(i18n.t('common.title'));
    $('#greeting').html(i18n.t('about.greeting'));
    $('#aproach').html(i18n.t('about.approach'));
    $('#commitment').html(i18n.t('about.commitment'));
    $('#projektek').html(i18n.t('common.projects'));
    $('#skills').html(i18n.t('skills.title'));
    $('#cook_book').html(i18n.t('cook_book'));
    $('#greeting_mobil').html(i18n.t('about.greeting'));
    $('#approach_mobil').html(i18n.t('about.approach'));
    $('#commitment_mobil').html(i18n.t('about.commitment'));










}

function updateLang(lang) {

    i18n.changeLanguage(lang);
    updateContent();
}






document.addEventListener("DOMContentLoaded", function() {
    var enButtonMob = document.getElementById("mob-language-button-en");
    var roButtonMob = document.getElementById("mob-language-button-ro");
    var huButtonMob = document.getElementById("mob-language-button-hu");

    if (enButtonMob) {
        enButtonMob.addEventListener("click", function() {
            updateLang('en')
        });
    } else {
        console.error("Element with ID 'language-button-en' not found");
    }

    if (roButtonMob) {
        roButtonMob.addEventListener("click", function() {
            updateLang('ro')
        });
    } else {
        console.error("Element with ID 'language-button-ro' not found");
    }

    if (huButtonMob) {
        huButtonMob.addEventListener("click", function() {
            updateLang('hu')
        });
    } else {
        console.error("Element with ID 'language-button-hu' not found");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var enButton = document.getElementById("language-button-en");
    var roButton = document.getElementById("language-button-ro");
    var huButton = document.getElementById("language-button-hu");

    if (enButton) {
        enButton.addEventListener("click", function() {
            updateLang('en')
        });
    } else {
        console.error("Element with ID 'language-button-en' not found");
    }

    if (roButton) {
        roButton.addEventListener("click", function() {
            updateLang('ro')
        });
    } else {
        console.error("Element with ID 'language-button-ro' not found");
    }

    if (huButton) {
        huButton.addEventListener("click", function() {
            updateLang('hu')
        });
    } else {
        console.error("Element with ID 'language-button-hu' not found");
    }
});
