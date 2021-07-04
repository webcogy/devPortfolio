import React from 'react';

function List({ dbList }) {
    return (
        <div className="contents">
            <ul>
                <li>
                    <div className="cpl_wrap">
                        <div className="cpl_info">
                            <div className="cpli_title">
                                <strong>{dbList}</strong>
                                <span></span>
                            </div>
                            <ul>
                                <li>
                                    <strong><mark>CLIENT</mark></strong>
                                    <span>주식회사 비티씨코리아닷컴</span>
                                </li>
                                <li>
                                    <strong><mark>WORK</mark></strong>
                                    <span>php, codeIgniter</span>
                                </li>
                                <li>
                                    <strong><mark>URL</mark></strong>
                                    <span><a>pickthumb.com</a></span>			
                                </li>
                            </ul>
                        </div>
                        <div className="cpl_pic">
                            <div className="cplp_info">
                                <a><span className="blind">MORE</span></a>
                                <strong>VIEW</strong>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="cpl_wrap">
                        <div className="cpl_info">
                            <div className="cpli_title">
                                <strong>픽썸 ICO 상장커뮤니티</strong>
                                <span></span>
                            </div>
                            <ul>
                                <li>
                                    <strong><mark>CLIENT</mark></strong>
                                    <span>주식회사 비티씨코리아닷컴</span>
                                </li>
                                <li>
                                    <strong><mark>WORK</mark></strong>
                                    <span>php, codeIgniter</span>
                                </li>
                                <li>
                                    <strong><mark>URL</mark></strong>
                                    <span><a>pickthumb.com</a></span>			
                                </li>
                            </ul>
                        </div>
                        <div className="cpl_pic">
                            <div className="cplp_info">
                                <a><span className="blind">MORE</span></a>
                                <strong>VIEW</strong>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default List;
