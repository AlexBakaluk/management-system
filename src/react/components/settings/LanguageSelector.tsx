import React from "react";
import {Select} from 'antd';
import {changeLanguage} from "../../../redux/reducers/actions/Actions";
import styles from './LanguageSelector.module.css'
import {useAppDispatch, useAppSelector} from "../../../index";

const {Option} = Select;

const LanguageSelector = () => {

    const language = useAppSelector(state => state.languages.language)
    const dispatch = useAppDispatch()

    return (
        <Select className={styles.selector}
                value={language}
                style={{width: 120}}
                onChange={() => dispatch(changeLanguage())}>
            <Option value="Русский">Русский</Option>
            <Option value="English">English</Option>
        </Select>
    )
}


export default LanguageSelector