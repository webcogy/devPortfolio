import React from 'react';

function List({ list }) {
    const reg = /[\"\[\]]/g; // 특수 문자 "[] 3가지 제거
    
    return (
        <div className="contents">
            <ul>
                {
                    list.map((item, i) => 
                        <li key={i}>
                            <div className="cpl_wrap">
                                <div className="cpl_info">
                                    <div className="cpli_title">
                                        <strong>{item.title}</strong>
                                        <span>{item.kind1}</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <strong><mark>SKILL</mark></strong>
                                            <span>
                                                { !item.kind2
                                                    ? ''
                                                    : JSON.stringify(item.kind2).replace(reg, '')
                                                }
                                            </span>
                                        </li>
                                        <li>
                                            <strong><mark>WORK</mark></strong>
                                            <span>100%</span>
                                        </li>
                                        <li>
                                            <strong><mark>GIT</mark></strong>
                                            <span><a href={item.git} target="_blank">{item.git}</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cpl_pic">
                                    <img src={`../frontendPortfolio/images/${item.image}`} className="view_img" />
                                    <div className="cplp_info">
                                        <a href={item.viewUrl} target="_blank">
                                        </a>
                                        <strong>VIEW</strong>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default List;
