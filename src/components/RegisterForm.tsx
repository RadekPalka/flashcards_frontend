import { FC } from 'react';

export const RegisterForm: FC = () => {
	return (
		<>
			<form onSubmit={}>
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
