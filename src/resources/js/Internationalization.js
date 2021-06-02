import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translations: {
                    "Belarusian photographers": "Фотографы Беларуси",
                    "Photographers": "Фотографы",
                    "EN": "RU",
                    "Search...": "Поиск...",
                    "This portal is dedicated to photographers and their work":
                        "Данный портал посвящен фотографам и их творчеству",
                    "Photography is a relatively young art. The first black and white photograph was taken in 1822, but it has not survived, so":
                        "Фотография – это относительно молодое искусство. Первый черно-белый снимок был сделан в 1822 году, но он не сохранился, поэтому ",
                    "many editions are based on the \"View from the Window\" made by Joseph Niepce in 1826. He was also the author of the unsaved picture.":
                        "многие издания за основу берут «Вид из окна», сделанный Жозефом Ньепсом в 1826. Автором несохраненной картинки тоже был он.  ",
                    "After this event, the photo begins to develop rapidly. Grayscale and blurry silhouettes turn into crisp black and white images.":
                        "После этого события фото начинает стремительно развиваться. Серые и расплывчатые силуэты превращаются в четкие черно-белые картинки. ",
                    "Soon, in 1861, color photography appeared. In our time, photography has long gone to the digital level.":
                        "Вскоре, в 1861 году появляется и цветная фотография. В наше время фотография уже давно перешла на цифровой уровень. ",
                    "People who devote their lives to the art of capturing are called photographers.":
                        "Людей, которые посвящают свою жизнь искусству запечатления, называют фотографами. ",
                    "A photographer is a bright and extraordinary personality. A person who knows how to convey the full range of emotions in photography, making people cry or laugh.":
                        "Фотограф – это яркая и неординарная личность. Человек, который умеет передавать в фотографии весь спектр эмоций, заставляя людей плакать или смеяться.",
                    "Read": "Читать",
                    "Pavel Gordeyuk": "Павел Гордеюк",
                    "Marya Mashkova": "Мария Машкова",
                }
            }
        },
        fallbackLng: "en",
        debug: false,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: false
    });

export function changeLanguage() {
    if (i18n.language === "en") {
        i18n.changeLanguage("ru");
    } else {
        i18n.changeLanguage("en");
    }
}

export default i18n;