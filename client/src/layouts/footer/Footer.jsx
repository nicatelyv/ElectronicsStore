import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Footer() {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value)
  }

  return (

    <footer className='footer'>
      <div className="footerLeft">
        <div className="footerLDiv">
          <li>{t("Məlumat")}</li>
          <ul>
            <Link><li>{t("Kampaniyalar")}</li></Link>
            <Link><li>{t("Müştəri kartı")}</li></Link>
            <Link><li>{t("Brendlər")}</li></Link>
            <Link><li>{t("Bloq")}</li></Link>
          </ul>
          <div className='footerPayment'>
            <p className='footerPaymentP'>{t("Ödəniş")}:</p>
            <div className='paymentIcons'><i className="fa-brands fa-cc-visa"></i> <i className="fa-brands fa-cc-mastercard"></i></div>
          </div>
        </div>
        <div className="footerLDiv">
          <li>{t("Şirkət")}</li>
          <ul>
            <Link><li>{t("Şirkət haqqında")}</li></Link>
            <Link><li>{t("Mağazalar")}</li></Link>
            <Link><li>{t("Vakansiyalar")}</li></Link>
            <Link><li>{t("Korporativ satışlar")}</li></Link>
          </ul>
          <div className='footerPayment'>
            <p className='footerPaymentP'>{t("Bizə qoşulun")}:</p>
            <div className='paymentIcons'>
              <Link><i className="fa-brands fa-facebook-f" style={{ color: '#305998' }}></i></Link>
              <Link><i className="fa-brands fa-instagram" style={{ color: "#be2d73" }}></i></Link>
              <Link><i className="fa-brands fa-youtube" style={{ color: "#d90000" }}></i></Link>
            </div>
          </div>
        </div>
        <div className="footerLDiv">
          <li>{t("Alıcılara")}</li>
          <ul>
            <Link><li>{t("Çatdırılma və ödəniş")}</li></Link>
            <Link><li>{t("Zәmanәt")}</li></Link>
            <Link><li>{t("Servis mərkəzləri")}</li></Link>
            <Link><li>{t("Nisyə alış")}</li></Link>
          </ul>
          <div className='footerPayment'>
            <p className='footerPaymentP'></p>
            <div className='copyrigt'>
              <p>© Electronics Store 2024</p>
              <Link><p>{t("Məxfilik siyasəti")}</p></Link>
            </div>
          </div>
        </div>
        <div className="footerLDiv">
          <li>{t("Üstünlüklər")}</li>
          <ul>
            <Link><li>{t("Arxayın al")}</li></Link>
            <Link><li>{t("İndi al, 3 ay sonra ödə")}</li></Link>
            <Link><li>{t("İkiqat zəmanət")}</li></Link>
            <Link><li>{t("3 aya böl, hissə-hissə ödə")}</li></Link>
          </ul>
          <br />
          <br />
        </div>
      </div>

      <div className="footerRight">
        <div className="fRightMain">
          <div className='fRighTexts'>
            <p>{t("Məlumat mərkəzi")}</p>
            <span>9:00 - 20:00 {t("hər gün")}</span>
          </div>
          <div className='fRighTexts'>
            <Link target='/' to={'tel:+994705002045'}><i className="fa fa-phone"></i> {t("Zəng et")}</Link>
            <span>info@electronicsstore.az</span>
          </div>
          <div className='fRighTexts'>
            <p>{t("Saytın hazırlanması")}</p>
            <Link style={{ fontWeight: "400", fontSize: "20px" }} target='/' to={'https://nicateliyev.vercel.app'}>{t("Nicat Əliyev")} <i style={{ fontSize: "16px", marginTop: "10px", marginLeft: "1px", gap: "2px" }} className="fa-solid fa-arrow-pointer fa-beat"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer