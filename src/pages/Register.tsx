import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';

export const Register: FC = () => {
	return (
		<>
			<h1>Register</h1>
			<RegisterForm />
			<Link to='/login'>Login page</Link>
			<Link to='/'>Main page</Link>
		</>
	);
};
