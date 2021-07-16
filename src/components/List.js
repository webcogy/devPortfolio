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
                                            <strong><mark>URL</mark></strong>
                                            <span><a href={item.url} target="_blank">{item.url}</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cpl_pic">
                                    <div className="cplp_info">
                                        <a href={item.url} target="_blank"></a>
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
