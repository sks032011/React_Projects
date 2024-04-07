import React, { useState } from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
    const[color,setColor]=useState()

    const { themeMode, lightTheme, darkTheme } = useTheme();
    const onChangeBtn = (e) => {
    const darkModeStatus=e.currentTarget.checked
    if(darkModeStatus){
        darkTheme()
        setColor("black")
    }
    else{
        lightTheme()
        setColor("white")
    }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                checked={themeMode === "dark"}
                // checked h to dark rhega 
                onChange={onChangeBtn}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span style={{color:color}} className="ml-3 text-sm font-medium  ">Toggle Theme</span>
        </label>
    );
}



