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
    $('#about').html(i18n.t('common.about'));
    $('#projects').html(i18n.t('common.projects'));
    $('#contact').html(i18n.t('common.contact'));
    $('#about_me').html(i18n.t('common.about_me'));
    $('#hire_me').html(i18n.t('common.hire_me'));
    $('#title').html(i18n.t('common.title'));
    $('#greeting').html(i18n.t('about.greeting'));
    $('#aproach').html(i18n.t('about.approach'));
    $('#commitment').html(i18n.t('about.commitment'));
    $('#projektek').html(i18n.t('common.projects'));
    $('#skills').html(i18n.t('skills.title'));
    $('#cook_book').html(i18n.t('cook_book'));




    


}

function updateLang (lang) {
   
  i18n.changeLanguage(lang);
  updateContent();
}

const enButton = document.getElementById('language-button-en');
const roButton = document.getElementById('language-button-ro');
const huButton = document.getElementById('language-button-hu');



enButton.addEventListener('click', () =>  updateLang('en'));
roButton.addEventListener('click', () =>  updateLang('ro'));
huButton.addEventListener('click', () =>  updateLang('hu'));
