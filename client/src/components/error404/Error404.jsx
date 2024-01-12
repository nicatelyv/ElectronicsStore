import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Error404() {
    const { t } = useTranslation();

    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404"></div>
                <h1>404</h1>
                <h2>{t("Oops! Page Not Found")}</h2>
                <p>{t("Sorry but the page you are looking for does not exist, have been removed or is temporarily unavailable")}</p>
                <Link to={'/'}>{t("Back to homepage")}</Link>
            </div>
        </div>
    )
}

export default Error404