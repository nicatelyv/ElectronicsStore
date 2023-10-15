import React, { useContext } from 'react'
import "./navbar.scss"
import { DarkModeContext } from '../../context/DarkMode';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const { toggle, darkMode } = useContext(DarkModeContext);

    return (
        <nav>
            <div className="container">
                <h1>Electronics <span>Store</span></h1>
                <ul className='topnavUls'>
                    <li id='navLi'>Kataloq
                        <ul className='dropdownMenu'>
                            <li id='navLi2'>Telefon və aksesuarlar <i class="fa-solid fa-arrow-right-long"></i>
                                <ul className='dropdownMenu2'>
                                    <ul>
                                        <li style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Smartfonlar</li>
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
                                        <li style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Planşetlər</li>
                                        <li>Apple</li>
                                        <li>OPPO</li>
                                        <li>Samsung</li>
                                        <li>Xiaomi</li>
                                        <li>Blackview</li>
                                    </ul>
                                    <ul>
                                        <li style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Telefon aksessuarları</li>
                                        <li>Qoruyucu şüşə</li>
                                        <li>Simsiz enerji toplama cihazı</li>
                                        <li>Qoruyucu örtük</li>
                                        <li>Enerji toplama üçün naqillər</li>
                                        <li>Powerbank</li>
                                        <li>Telefon adapterləri</li>
                                        <li>MagSafe aksessuarları</li>
                                        <li>SD kartlar</li>
                                        <li>Micro kartlar</li>
                                    </ul>
                                </ul>
                            </li>
                            <li id='navLi2'>Böyük məişət texnikası <i class="fa-solid fa-arrow-right-long"></i></li>
                            <li id='navLi2'>Kiçik məişət texnikası <i class="fa-solid fa-arrow-right-long"></i></li>
                            <li id='navLi2'>Tv və audio <i class="fa-solid fa-arrow-right-long"></i></li>
                            <li id='navLi2'>Foto texnika <i class="fa-solid fa-arrow-right-long"></i></li>
                            <li id='navLi2'>Notbuk, planşet və kompüter texnikası <i class="fa-solid fa-arrow-right-long"></i></li>
                            <li id='navLi2'>Outlet <i class="fa-solid fa-arrow-right-long"></i></li>
                        </ul>
                    </li>
                    <NavLink to={"/magazalar"}><li>Mağazalar</li></NavLink>
                </ul>
                <div className='topnavRight'>
                    <div id='topnavCart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p id='cartCount'>0</p>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                    {darkMode ? <i title='Light Mode' onClick={toggle} style={{ color: "white", cursor: "pointer" }} class="fa-regular fa-lightbulb"></i> : <i title='Dark Mode' onClick={toggle} style={{ cursor: "pointer" }} class="fa-solid fa-moon"></i>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar