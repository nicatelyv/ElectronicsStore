import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./style.scss"
// import { Link } from 'react-router-dom';

const SlideShow = () => {

    return (
        <div id='slide-show' className='slideShow'>
            <Slide
                autoplay={true}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
            >
                {/* <Link to={"/"}> */}
                    <div className="each-slide-effect">
                        <div style={{ backgroundImage: 'url(https://bytelecom.az/media/2022/12/08/campaign_image/15403/Ki%C3%A7ik-m%C9%99i-tex.jpg)', backgroundPosition: "left", backgroundRepeat: "no-repeat" }}>
                            {/* <span>New Iphone 15 Pro</span> */}
                        </div>
                    </div>
                {/* </Link> */}
                {/* <Link to={"/"}> */}
                    <div className="each-slide-effect">
                        <div style={{ backgroundImage: 'url(https://irshad.az/cdn-cgi/image/width=876/storage/pages/1971/sayt-cover-2-5.jpg)', backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            {/* <span>New Iphone 15 Pro</span> */}
                        </div>
                    </div>
                {/* </Link> */}
                {/* <Link to={"/"}> */}
                    <div className="each-slide-effect">
                        <div style={{ backgroundImage: 'url(https://aws-obg-image-lb-5.tcl.com/content/dam/brandsite/region/europe/products/tv/x-series/x815/ksp/03_dolby-vision-atmos.png)', backgroundPosition: "center", backgroundRepeat: "no-repeat" }} >
                            {/* <span></span> */}
                        </div>
                    </div>
                {/* </Link> */}
                {/* <Link to={"/"}> */}
                    <div className="each-slide-effect">
                        <div style={{ backgroundImage: 'url(https://banker.az/wp-content/uploads/2021/09/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-8.png)', backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            {/* <span> </span> */}
                        </div>
                    </div>
                {/* </Link> */}
            </Slide>
        </div>
    );
};

export default SlideShow;