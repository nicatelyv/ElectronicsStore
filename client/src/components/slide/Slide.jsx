import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./style.css"

const SlideShow = () => {

    return (
        <div className='slideShow'>
            <Slide
                autoplay={true}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
            >
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: 'url(https://www.91-cdn.com/hub/wp-content/uploads/2023/09/iphone-15-battery-life.jpg)' }}>
                        {/* <span></span> */}
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: 'url(https://dubaiofw.com/wp-content/uploads/2023/03/How-to-Buy-Electronics-on-Installment-in-UAE-Without-Credit-Card.jpg)' }}>
                        {/* <span> </span> */}
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: 'url(https://nypost.com/wp-content/uploads/sites/2/2022/02/air-pods.png)' }} >
                        {/* <span></span> */}
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default SlideShow;