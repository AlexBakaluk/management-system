import {currentLang, RUSSIAN} from "../../redux/reducers/languageReducer";

type SideBar = {
    goods: string,
    goodsAndServices: string,
    remains: string
    procurement: string,
    sales: string,
    counterparties: string,
    money: string,
    analytics: string,
    administration: string,
    settings: string
}

type SettingsWords = {
    language: string,
    theme: string
}

type languageWords = {
    sideBarWords: SideBar,
    settingsWords: SettingsWords
}

const russianWords: languageWords = {
    sideBarWords: {
        goods: "Товары",
        goodsAndServices: "Товары и услуги",
        remains: "Остатки",
        procurement: "Закупки",
        sales: "Продажи",
        counterparties: "Контрагенты",
        money: "Деньги",
        analytics: "Аналитика",
        administration: "Администрирование",
        settings: "Настройки"
    },
    settingsWords: {
        language: "Язык",
        theme: "Тема"
    }
}

const englishWords: languageWords = {
    sideBarWords: {
        goods: "Goods",
        goodsAndServices: "Goods and services",
        remains: "Remains",
        procurement: "Procurement",
        sales: "Sales",
        counterparties: "Counterparties",
        money: "Money",
        analytics: "Analytics",
        administration: "Administration",
        settings: "Settings"
    },
    settingsWords: {
        language: "Language",
        theme: "Theme"
    }
}

export const getWordsByCurrentLanguage = () => {
    if (currentLang.current === RUSSIAN) {
        return russianWords
    } else {
        return englishWords
    }
}