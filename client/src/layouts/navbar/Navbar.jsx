import React, { useContext } from 'react'
import "./navbar.scss"
import { DarkModeContext } from '../../context/DarkMode';
import { NavLink } from 'react-router-dom';
import Languageoption from '../../components/language-dropdown';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Navbar() {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { t } = useTranslation();
    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value)
    }
    return (
        <nav>
            <div className="container">
                <NavLink id='navH1' to={"/"}><h1>Electronics <span>Store</span></h1></NavLink>
                <ul className='topnavUls'>

                    <li id='navLi'>{t('Kataloq')}
                        <ul className='dropdownMenu'>

                            <li id='navLi2'>{t("Telefon və aksesuarlar")} <i class="fa-solid fa-arrow-right-long"></i>
                                <ul className='dropdownMenu2'>
                                    <ul>
                                        <li style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>{t("Mobil telefonlar")}</li>
                                        <li>Apple</li>
                                        <li>OPPO</li>
                                        <li>Samsung</li>
                                        <li>Xiaomi</li>
                                        <li>HUAWEI</li>
                                        <li>Realme</li>
                                        <li>OnePlus</li>
                                        <li>Blackview</li>
                                        <li>Honor</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>{t("Planşetlər")}</li>
                                        <li>Apple</li>
                                        <li>OPPO</li>
                                        <li>Samsung</li>
                                        <li>Xiaomi</li>
                                        <li>Blackview</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>{t("Telefon aksessuarları")}</li>
                                        <li>{t("Qoruyucu şüşə")}</li>
                                        <li>{t("Simsiz enerji toplama cihazı")}</li>
                                        <li>{t("Qoruyucu örtük")}</li>
                                        <li>{t("Enerji toplama üçün naqillər")}</li>
                                        <li>Powerbank</li>
                                        <li>{t("Telefon adapterləri")}</li>
                                        <li>{t("MagSafe aksessuarları")}</li>
                                        <li>{t("SD kartlar")}</li>
                                        <li>{t("Micro kartlar")}</li>
                                    </ul>
                                </ul>
                            </li>

                            <li id='navLi2'>{t("Böyük məişət texnikası")} <i class="fa-solid fa-arrow-right-long"></i>
                                <ul className='dropdownMenu2'>
                                    <ul>
                                        <li style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>İqlim</li>
                                        <li>Kondisioner</li>
                                        <li>Kombi sistemləri</li>
                                        <li>Kombi aksesuarları</li>
                                        <li>İran sobaları</li>
                                        <li>Sərinkeş</li>
                                        <li>Radiatorlar</li>
                                        <li>Qızdırıcılar</li>
                                        <li>Su qızdırıcı kalonkalar</li>
                                        <li>Hava təmizləyicilər</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Stasionar</li>
                                        <li>Soyuducu</li>
                                        <li>Paltaryuyan maşınlar</li>
                                        <li>Qabyuyanlar</li>
                                        <li>Sobalar</li>
                                        <li>Mikrodalğalı soba</li>
                                        <li>Qurutma Maşınları</li>
                                        <li>Dondurucu</li>
                                        <li>Dispenser</li>
                                    </ul>
                                </ul>
                            </li>

                            <li id='navLi2'>{t("Kiçik məişət texnikası")} <i class="fa-solid fa-arrow-right-long"></i></li>
                            <li id='navLi2'>{t("Tv və audio")} <i class="fa-solid fa-arrow-right-long"></i></li>
                            <li id='navLi2'>{t("Foto texnika")} <i class="fa-solid fa-arrow-right-long"></i></li>
                            <li id='navLi2'>{t("Notbuk, planşet və kompüter texnikası")} <i class="fa-solid fa-arrow-right-long"></i></li>
                        </ul>
                    </li>
                    <NavLink to={"/magazalar"}><li>{t('Mağazalar')}</li></NavLink>
                </ul>
                <div className='topnavRight'>
                    <div id='topnavCart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p id='cartCount'>0</p>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                    {darkMode ? <i title='Light Mode' onClick={toggle} style={{ color: "white", cursor: "pointer" }} class="fa-regular fa-lightbulb"></i> : <i title='Dark Mode' onClick={toggle} style={{ cursor: "pointer" }} class="fa-solid fa-moon"></i>}
                    <Languageoption onChange={e => handleClick(e)} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar