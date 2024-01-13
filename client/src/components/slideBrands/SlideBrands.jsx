import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './slideBrands.scss'

const SliderImages = [
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/34/brand-lg.svg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/35/brand-lenovo.svg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/90/bosch-logo.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/816/fakir-logo-157ad97981-seeklogocom.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/1244/tefal-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/204/acer-2011svg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/3109/2560px-jvc-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/2430/asus-logo-1995-present.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/2368/baseus-logo-black.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4508/jbl-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/568/new-beko-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/848/download-4.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/1024/braun-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/3445/2560px-canon-wordmarksvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/2487/800px-dell-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/928/demirdokum-logo.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4494/edifier-logo-2016.jpg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/3435/2560px-fujifilm-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/573/hisense-logo.jpg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/2453/hp-new-logo-2dsvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/95/indesit-logo-logotype.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/3522/forward.svg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/1/apple-authorized-reseller-seeklogo.svg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/7/gnb-desktop-120x32.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/8/xiaomi-logo-2021.svg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/5/oppo-logo-2019.svg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/6/realme-realme-logo-box-rgb-01-with-out-back-ground.svg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/2/huawei-honor-logo-1-2.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/10596/logo-1.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/3/nokia-refreshed-logo-2-1.webp' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4/oneplus-logo.svg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/1267/2560px-kenwood-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4252/logitech-logo.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/571/midea.svg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/2608/bez-nazvaniya-5.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/3466/nikon-logo-98e900aa11-seeklogocom.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/597/panasonic-logo-bluesvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/1023/2560px-philips-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4573/2560px-pioneer-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4211/razer-symbol.jpg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/3029/2560px-sony-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4321/download.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/5733/png-clipart-logo-product-design-brand-trademark-gree-electric-design-blue-text.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/5884/logo-krmz.jpg' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/7517/b5f2204850b73f08325e99ff869f9af9.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/7612/tecno-smartphone-logo-d6aff06a48-seeklogocom.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/9948/1920px-zte-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/12402/2560px-dyson-logosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/12462/nintendosvg.png' },
    { imgUrl: 'https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/1240/1280px-karcher-logo-2015svg.png' },
]

function SlideBrands() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    return (
        <div className='slideBrands'>
            {/* <h5 id='OurChefSliderH5'>EN İYİSİ</h5>
            <h2 id='OurChefSliderH2'>İŞ SEÇİMİ</h2> */}
            <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                className='slideBrandsCarousel' >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 5300 + width, left: - 5300 }}
                    className='inner-slideBrandsCarousel'>
                    {SliderImages.map(image => {
                        return (
                            <motion.div key={image} className='itemCarousel'>
                                <img src={image.imgUrl} alt='foto' />
                            </motion.div>
                        )
                    })}
                </motion.div>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 2600 + width, left: - 2600 }}
                    className='inner-slideBrandsCarouselMobile'>
                    {SliderImages.map(image => {
                        return (
                            <motion.div key={image} className='itemCarousel'>
                                <img src={image.imgUrl} alt='foto' />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div >
    )
}

export default SlideBrands