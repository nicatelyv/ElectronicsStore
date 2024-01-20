import React, { useContext } from 'react'
import "./navbar.scss"
import { DarkModeContext } from '../../context/DarkMode';
import { Link, NavLink } from 'react-router-dom';
import Languageoption from '../../components/language-dropdown';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ShoppingMenu from "../../components/shoppingMenu/ShoppingMenu"
import ProfileButton from "../../components/profileButton/ProfileButton"
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

function Navbar() {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { t } = useTranslation();
    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value)
    }
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <nav id='nav'>
            <div className="container">
                <NavLink id='navH1' to={"/"}><h1>Electronics <span>Store</span></h1></NavLink>
                <ul className='topnavUls'>

                    <li id='navLi'>{t('Kataloq')}
                        <ul className='dropdownMenu'>

                            <li id='navLi2'>{t("Telefon və aksesuarlar")} <i className="fa-solid fa-arrow-right-long"></i>
                                <ul className='dropdownMenu2'>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Mobil telefonlar")}</li>
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
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Planşetlər")}</li>
                                        <li>Apple</li>
                                        <li>OPPO</li>
                                        <li>Samsung</li>
                                        <li>Xiaomi</li>
                                        <li>Blackview</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Telefon aksessuarları")}</li>
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
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Qulaqlıqlar")}</li>
                                        <li>{t("Apple")}</li>
                                        <li>{t("Samsung")}</li>
                                        <li>{t("Xiaomi")}</li>
                                        <li>{t("Honor")}</li>
                                        <li>{t("A4tech")}</li>
                                        <li>{t("Baseus")}</li>
                                        <li>{t("Beats")}</li>
                                        <li>{t("JBL")}</li>
                                        <li>{t("QCY")}</li>
                                        <li>{t("Remax")}</li>
                                        <li>{t("TCL")}</li>
                                        <li>{t("Aiwa")}</li>
                                        <li>{t("Lenovo")}</li>
                                        <li>{t("Borofone")}</li>
                                    </ul>
                                </ul>
                            </li>

                            <li id='navLi2'>{t("Böyük məişət texnikası")} <i className="fa-solid fa-arrow-right-long"></i>
                                <ul className='dropdownMenu2'>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("İqlim")}</li>
                                        <li>{t("Kondisioner")}</li>
                                        <li>{t("Kombi sistemləri")}</li>
                                        <li>{t("Kombi aksesuarları")}</li>
                                        <li>{t("İran sobaları")}</li>
                                        <li>{t("Sərinkeş")}</li>
                                        <li>{t("Radiatorlar")}</li>
                                        <li>{t("Qızdırıcılar")}</li>
                                        <li>{t("Su qızdırıcı kalonkalar")}</li>
                                        <li>{t("Hava təmizləyicilər")}</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Stasionar")}</li>
                                        <li>{t("Soyuducu")}</li>
                                        <li>{t("Paltaryuyan maşınlar")}</li>
                                        <li>{t("Qabyuyanlar")}</li>
                                        <li>{t("Sobalar")}</li>
                                        <li>{t("Mikrodalğalı soba")}</li>
                                        <li>{t("Qurutma Maşınları")}</li>
                                        <li>{t("Dondurucu")}</li>
                                        <li>{t("Dispenser")}</li>
                                    </ul>
                                </ul>
                            </li>

                            <li id='navLi2'>{t("Kiçik məişət texnikası")} <i className="fa-solid fa-arrow-right-long"></i>
                                <ul className='dropdownMenu2'>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Mətbəx")}</li>
                                        <li>{t("Ətçəkənlər")}</li>
                                        <li>{t("Şirəçəkən")}</li>
                                        <li>{t("Mikser")}</li>
                                        <li>{t("Blenderlər")}</li>
                                        <li>{t("Çaydanlar")}</li>
                                        <li>{t("Multibişiricilər")}</li>
                                        <li>{t("Tosterlər")}</li>
                                        <li>{t("Mətbəx robotu")}</li>
                                        <li>{t("Fritozlar")}</li>
                                        <li>{t("Doğrayıcılar")}</li>
                                        <li>{t("Buxarlı bişiricilər")}</li>
                                        <li>{t("Elektrikli sac")}</li>
                                        <li>{t('Su filtri')}</li>
                                        <li>{t('Samovarlar')}</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Robot tozsoranlar")}</li>
                                        <li>Xiaomi</li>
                                        <li>Kyvol</li>
                                        <li>Roborock</li>
                                        <li>Eufy</li>
                                        <li>Samsung</li>
                                        <li>Yeedi</li>
                                        <li>Ecovacs</li>
                                        <li>Fakir</li>
                                        <li>Tefal</li>
                                        <li>Karcher</li>
                                        <li>Viomi</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Tozsoran")}</li>
                                        <li>Hotpoint Ariston</li>
                                        <li>Panasonic</li>
                                        <li>Samsung</li>
                                        <li>Xiaomi</li>
                                        <li>LG</li>
                                        <li>Fakir</li>
                                        <li>Philips</li>
                                        <li>Karcher</li>
                                        <li>Tefal</li>
                                        <li>Baseus</li>
                                        <li>Bosch</li>
                                        <li>Hitachi</li>
                                        <li>Kenwood</li>
                                        <li>Arnica</li>
                                        <li>Gorenje</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Qab-qacaq")}</li>
                                        <li>{t("Qazanlar")}</li>
                                        <li>{t("Tavalar")}</li>
                                        <li>{t('Bıçaqlar')}</li>
                                        <li>{t('Çörəkqabı')}</li>
                                        <li>{t("Termoslar")}</li>
                                        <li>{t("Mətbəx ləvazimatları")}</li>
                                        <li>{t("Yemək dəsti")}</li>
                                        <li>{t("Cehizlik dəst")}</li>
                                    </ul>
                                </ul>
                            </li>

                            <li id='navLi2'>{t("Tv və audio")} <i className="fa-solid fa-arrow-right-long"></i>
                                <ul className='dropdownMenu2'>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Televizorlar")}</li>
                                        <li>Taube</li>
                                        <li>LG</li>
                                        <li>Samsung</li>
                                        <li>Arçelik</li>
                                        <li>JVC</li>
                                        <li>AIWA</li>
                                        <li>Xiaomi</li>
                                        <li>Hisense</li>
                                        <li>TCL</li>
                                        <li>Artel</li>
                                        <li>Tesla</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Televizor aksesuarları")}</li>
                                        <li>{t("TV Box")}</li>
                                        <li>{t("TV çərçivələri")}</li>
                                        <li>{t("Kronşteyn")}</li>
                                        <li>{t("HDMİ Kabellər")}</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Səs-akustika")}</li>
                                        <li>{t("Səs gücləndiricilər")}</li>
                                        <li>{t("Qulaqlıq aksesuarları")}</li>
                                        <li>{t("Pioneer aksesuarları")}</li>
                                    </ul>
                                </ul>
                            </li>
                            <li id='navLi2'>{t("Foto texnika")} <i className="fa-solid fa-arrow-right-long"></i>
                                <ul className='dropdownMenu2'>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Fotoaparatlar")}</li>
                                        <li>Canon</li>
                                        <li>Fujifilm</li>
                                        <li>Nikon</li>
                                        <li>Jabra</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Foto aksesuarlar")}</li>
                                        <li>Manfrotto</li>
                                        <li>Joby</li>
                                        <li>Vanguard</li>
                                        <li>Jabra</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Linzalar")}</li>
                                        <li>Nikon</li>
                                    </ul>
                                </ul>
                            </li>
                            <li id='navLi2'>{t("Notbuk və kompüter texnikası")} <i className="fa-solid fa-arrow-right-long"></i>
                                <ul className='dropdownMenu2'>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Notbuklar")}</li>
                                        <li>Apple</li>
                                        <li>Asus</li>
                                        <li>Acer</li>
                                        <li>Dell</li>
                                        <li>HP</li>
                                        <li>Honor</li>
                                        <li>Lenovo</li>
                                        <li>MSI</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Masaüstü kompüterlər")}</li>
                                        <li>HP</li>
                                        <li>Lenovo</li>
                                        <li>Asus</li>
                                        <li>Dell</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Monitorlar")}</li>
                                        <li>Acer</li>
                                        <li>AOC</li>
                                        <li>Asus</li>
                                        <li>Philips</li>
                                        <li>Dell</li>
                                        <li>HP</li>
                                        <li>Lenovo</li>
                                        <li>Xiaomi</li>
                                        <li>Samsung</li>
                                        <li>X-Game</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{t("Kompüter aksesuarları")}</li>
                                        <li>{t("Qulaqlıq")}</li>
                                        <li>{t("Klaviatura")}</li>
                                        <li>{t("Mouse")}</li>
                                        <li>{t("Mousepad")}</li>
                                        <li>{t("Kamera")}</li>
                                        <li>{t("Modem")}</li>
                                        <li>{t("Portativ HDD")}</li>
                                        <li>{t("SSD")}</li>
                                        <li>{t("USB Flash")}</li>
                                        <li>{t("Antiviruslar")}</li>
                                        <li>{t("Mikrofon")}</li>
                                        <li>{t("Təmizlik vasitələri")}</li>
                                        <li>{t("USB Hub")}</li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/* <NavLink to={"/magazalar"}><li id='stores'>{t('Mağazalar')}</li></NavLink> */}
                    {/* <input type="text" placeholder={t("Axtarış")} /> */}
                    <TextField className='navInput' id="filled-basic" label={t("Axtarış")} variant="filled" />
                </ul>
                <div className='topnavRight'>
                    {localStorage.getItem("username") ?
                        <ProfileButton />
                        : <NavLink to={"/giris"}><i className="fa-solid fa-user fa-fade"></i></NavLink>
                    }
                    <div id='topnavCart'>
                        <ShoppingMenu />
                        <p id='cartCount'>{quantity}</p>
                    </div>
                    <Link to={'/wishlist'}><i className="fa-solid fa-heart"></i></Link>
                    {darkMode ? <i title='Light Mode' onClick={toggle} style={{ color: "white", cursor: "pointer" }} class="fa-regular fa-lightbulb "></i> : <i title='Dark Mode' onClick={toggle} style={{ cursor: "pointer" }} class="fa-solid fa-moon"></i>}
                    <Languageoption onChange={e => handleClick(e)} />
                </div>
                <div className="darkmode"><Languageoption onChange={e => handleClick(e)} /> {darkMode ? <i title='Light Mode' onClick={toggle} style={{ color: "white", cursor: "pointer" }} class="fa-regular fa-lightbulb"></i> : <i title='Dark Mode' onClick={toggle} style={{ cursor: "pointer" }} class="fa-solid fa-moon"></i>}</div>
            </div>
        </nav>
    )
}

export default Navbar