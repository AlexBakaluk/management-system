import React from "react";
import {connect} from 'react-redux'
import LanguageSelector from "./LanguageSelector";
import ThemeChanger from "./ThemeChanger";
import {getWordsByCurrentLanguage} from "../../helpers/GetWordsByCurrentLanguage";

const Settings = ({theme, changeTheme}: any) => {

    const {settingsWords} = getWordsByCurrentLanguage()

    return (
        <div>
            <h1>{settingsWords.language}</h1>
            <LanguageSelector/>
            <h1>{settingsWords.theme}</h1>
            <ThemeChanger changeTheme={changeTheme}/>
            <h1>{theme}</h1>


        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        language: state.languages.language
    }
}

export default connect(mapStateToProps, null)(Settings)