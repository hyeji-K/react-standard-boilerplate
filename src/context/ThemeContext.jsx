import { createContext, useContext, useState } from 'react';

/**
 * src/context/ThemeContext.jsx
 * 
 * [Context 폴더의 역할]
 * - 전역 상태(Global State)를 관리하는 Context를 모아두는 곳입니다.
 * - 로그인 정보, 테마(다크모드), 언어 설정 등 앱 전체에서 공유해야 하는 데이터를 관리합니다.
 */

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
