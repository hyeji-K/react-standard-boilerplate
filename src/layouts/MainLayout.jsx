import { Link, Outlet } from 'react-router-dom';
import './MainLayout.css';

/**
 * src/layouts/MainLayout.jsx
 * 
 * [Layouts 폴더의 역할]
 * - 페이지의 공통적인 구조(헤더, 푸터, 사이드바 등)를 정의하는 컴포넌트입니다.
 * - 여러 페이지에서 반복되는 레이아웃을 한 곳에서 관리합니다.
 * - Outlet 컴포넌트(React Router)를 통해 자식 페이지를 렌더링합니다.
 */

const MainLayout = () => {
    return (
        <div className="layout-container">
            <header className="header">
                <h1>My Standard React App</h1>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link>
                </nav>
            </header>

            <main className="main-content">
                {/* 각 페이지 컴포넌트가 이 위치(Outlet)에 렌더링됩니다 */}
                <Outlet />
            </main>

            <footer className="footer">
                <p>© 2024 My Standard React App</p>
            </footer>
        </div>
    );
};

export default MainLayout;
