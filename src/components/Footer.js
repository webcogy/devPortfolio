import React from 'react';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

function Footer({clickGoTop, isShowGoTop}) {

    return (
        <div className="Footer">
            <div className="f_copyright">
                @2021 
                <strong>daehyun</strong>
            </div>

            {isShowGoTop === true &&
                <a href="javascript:;" className="goTop" onClick={clickGoTop}>
                    <VerticalAlignTopIcon />
                </a>
            }
            
        </div>
    );
}

export default Footer;
