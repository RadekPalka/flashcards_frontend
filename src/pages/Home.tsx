import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Home: FC = () => {
	return (
		<>
			<h1>Flashcards application</h1>
			<Link to='/register'>Sign in</Link>
			<Link to='/login'>Sign up</Link>
		</>
	);
};
