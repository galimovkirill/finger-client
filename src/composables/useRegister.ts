import { ref } from 'vue';

export const useRegister = () => {
    const login = ref('');
    const password = ref('');
    const passwordRepeat = ref('');

    const submitRegister = () => {
        console.log('Form data: ', { login, password, passwordRepeat });
    };

    return {
        login,
        password,
        passwordRepeat,
        submitRegister
    };
};
