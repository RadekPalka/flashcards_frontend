import { FC, FormEvent, useState } from 'react';
import { registerAction } from '../api/userApi';

export const RegisterForm: FC = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [confirmedPassword, setConfirmedPassword] = useState('');

	const registerUser = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (confirmedPassword !== password && login.length < 4) return;
		try {
			const response = await registerAction(login, password);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<form onSubmit={registerUser}>
				<label htmlFor='login'>Login</label>
				<input type='text' id='login' onChange={(e) => setLogin(e.target.value)} />
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label htmlFor='confirm-password'>Confirm password</label>
				<input
					type='password'
					id='confirm-password'
					onChange={(e) => setConfirmedPassword(e.target.value)}
				/>
				<button>Register</button>
			</form>
		</>
	);
};
