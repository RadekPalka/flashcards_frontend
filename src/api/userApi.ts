import { axiosInstance } from './axios';

export const registerAction = (login: string, password: string) => {
	return axiosInstance.post('register', {
		login,
		password,
	});
};
