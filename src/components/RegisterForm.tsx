import { FC, FormEvent } from 'react';

export const RegisterForm: FC = () => {
	const registerUser = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={registerUser}>
				<label htmlFor='login'>Login</label>
				<input type='text' id='login' />
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' />
				<label htmlFor='confirm-password'>Confirm password</label>
				<input type='password' id='confirm-password' />
				<button>Register</button>
			</form>
		</>
	);
};
