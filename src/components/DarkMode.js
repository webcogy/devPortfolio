import React, {useState, useEffect} from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

function DarkMode({ appRef }) {
    const [isDark, setIsDark] = useState(false);
    

    useEffect(() => {
        const viewMode = localStorage.getItem('viewMode');
        if( viewMode === 'dark' ) fetchToDark();
    }, []);

    const fetchToLight = () => {
        appRef.current.classList.remove('darkMode') 
        localStorage.removeItem('viewMode');
        setIsDark(false);
    }
    
    const fetchToDark = () => {
        appRef.current.classList.add('darkMode') 
        localStorage.setItem('viewMode', 'dark');
        setIsDark(true);
    }


    return (
        <div className="darkModeComponent">
            {
                isDark === false
                ? <button class="btn_light" onClick={fetchToDark}>
                    <WbSunnyIcon />
                    <span>Light</span>
                </button>
                : <button class="btn_dark" onClick={fetchToLight}>
                    <Brightness2Icon />
                    <span>Dark</span>
                </button>
            }
        </div>
    );
}

export default DarkMode;
