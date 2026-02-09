import { useState, useEffect } from 'react';

/**
 * src/hooks/useFetch.js
 * 
 * [Hooks 폴더의 역할]
 * - 리액트의 'Custom Hook'들을 모아두는 곳입니다.
 * - 컴포넌트 로직을 재사용 가능하게 분리할 때 사용합니다.
 * - 예: API 호출, 폼 처리, 이벤트 리스너 등록 등
 */

/**
 * 간단한 데이터 페칭 훅
 * @param {string} url - 요청할 API URL
 * @returns {object} - { data, loading, error }
 */
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
