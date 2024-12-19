
import { LoginResponse } from '../types';
import apiClient from './index';

export const loginUser = async (
    username: string,
    password: string
): Promise<LoginResponse> => {
    try {
        const response = await apiClient.post('/auth/login', { username, password });
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
};
