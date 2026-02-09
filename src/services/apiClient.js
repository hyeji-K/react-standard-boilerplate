/**
 * src/services/apiClient.js
 * 
 * [Services 폴더의 역할]
 * - 외부 시스템(API 서버, Firebase 등)과의 통신 로직을 모아두는 곳입니다.
 * - 컴포넌트에서 직접 fetch나 axios를 호출하는 대신, 이곳의 함수를 사용하여
 *   비즈니스 로직과 UI 코드를 분리합니다.
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // 예시 API

export const apiClient = {
    get: async (endpoint) => {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },

    // post, put, delete 구현 예시...
    post: async (endpoint, data) => {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
};
