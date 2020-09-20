import React from 'react';
import './Header.css';

export default ({black})=>{
    return(
        <header className={black ? 'black':''}>
            <div className="header--logo">
                <a href="/"><h2>Netflix</h2></a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png" alt="user" />
                </a>
            </div>
        </header>
    )
}