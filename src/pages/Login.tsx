import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Login: FC = () => {
	return (
		<>
			<h1>Login</h1>
			<Link to='/register'>Register page</Link>
			<Link to='/'>Main page</Link>
		</>
	);
};
