import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Register: FC = () => {
	return (
		<>
			<h1>Register</h1>
			<Link to='/login'>Login page</Link>
			<Link to='/'>Main page</Link>
		</>
	);
};
