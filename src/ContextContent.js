import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function ContextContent() {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
        <div
            className='content'
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black'
            }}
        >
            <p>{user}님 안녕하세요?</p>
        </div>
    );
}

export default ContextContent;