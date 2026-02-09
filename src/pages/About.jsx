import Button from '../components/Button';

const About = () => {
    return (
        <div>
            <h2>About Page</h2>
            <p>이 프로젝트는 React 표준 폴더 구조를 학습하기 위해 만들어졌습니다.</p>
            <div style={{ marginTop: '20px' }}>
                <Button onClick={() => alert('Hello!')} variant="secondary">
                    Click Me
                </Button>
            </div>
        </div>
    );
};

export default About;
