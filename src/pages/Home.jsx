import { Link } from 'react-router-dom';
import Button from '../components/Button';
import useFetch from '../hooks/useFetch';
import { useTheme } from '../context/ThemeContext';

/**
 * src/pages/Home.jsx
 * 
 * [Pages 폴더의 역할]
 * - 라우트에 매핑되는 '페이지 단위' 컴포넌트입니다.
 * - 여러 컴포넌트(Header, Button 등)를 조합하여 화면을 구성합니다.
 * - 비즈니스 로직을 연결하는 역할을 합니다.
 */

const Home = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{ padding: '20px', background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <h2>Home Page</h2>
            <p>Standard React Architecture Example</p>

            <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                <h3>API Service Test (useFetch)</h3>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data && (
                    <pre style={{ textAlign: 'left', background: '#f4f4f4', padding: '10px', color: '#333' }}>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                )}
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3>UI Component Test (Button)</h3>
                <Button onClick={toggleTheme}>
                    Toggle Theme (Current: {theme})
                </Button>
            </div>

            <div style={{ marginTop: '20px' }}>
                <Link to="/about">Go to About Page</Link>
            </div>
        </div>
    );
};

export default Home;
