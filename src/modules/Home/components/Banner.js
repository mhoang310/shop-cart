import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Banner = () => {
    return (
        <Carousel autoplay >
            <div>
                <div style={contentStyle}>
                    <img src="https://bachlongmobile.com/bnews/wp-content/uploads/2021/04/concept-iphone-13-1.jpg" alt="image" className="w-full h-full" />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="https://pict.sindonews.net/dyn/620/pena/news/2022/02/01/122/673915/distribusi-samsung-galaxy-s22-series-disebut-bakal-molor-lagi-alx.jpg" alt="image" className="w-full h-full" />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="https://genk.mediacdn.vn/139269124445442048/2022/3/17/photo-1647508094183-16475080946431013410279.png" alt="image" className="w-full h-full" />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/11/1043531/Ipad-Pro.jpg" alt="image" className="w-full h-full" />
                </div>
            </div>
        </Carousel>
    )
}

export default Banner;
