import { ref } from 'vue';

export const useLogin = () => {
    const login = ref('');
    const password = ref('');

    const submitLogin = () => {
        console.log('Form data: ', { login, password });
    };

    return { login, password, submitLogin };
};
