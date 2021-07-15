import React, {useEffect, useState} from 'react';
import Footer from '../components/Footer';

function FooterContainer({ pageRef }) {

    const [isShowGoTop, setIsShowGoTop] = useState(null);

    // goTop 버튼 클릭시 최상단으로
    const clickGoTop = () =>  window.scrollTo(0, 0);

    // goTop 버튼 show / hide
    useEffect(() => {
        if(pageRef==null) return;
        
        const fetchObserver = new IntersectionObserver(
            ([{ isIntersecting }]) => {
                isIntersecting === true 
                    ? setIsShowGoTop(false)
                    : setIsShowGoTop(true)
            }
        );

        fetchObserver.observe(pageRef)
    }, [pageRef]);


    return (
        <Footer 
            clickGoTop={clickGoTop}
            isShowGoTop={isShowGoTop}
        />
    );
}

export default FooterContainer;
