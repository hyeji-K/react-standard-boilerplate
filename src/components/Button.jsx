/**
 * src/components/Button.jsx
 * 
 * [Components 폴더의 역할]
 * - 재사용 가능한 UI 컴포넌트들을 모아두는 곳입니다.
 * - 특정 페이지에 종속되지 않고, 앱 전반에서 쓰일 수 있는 '작은 단위'의 UI를 만듭니다.
 * - 예: 버튼, 입력창, 카드, 모달 등
 */

import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.btn} ${styles[variant]}`}
        >
            {children}
        </button>
    );
};

export default Button;
