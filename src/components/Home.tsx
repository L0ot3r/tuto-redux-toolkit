import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home = () => {
	const { count } = useSelector((state: RootState) => state.counter.value);
	const { userName } = useSelector((state: RootState) => state.user.value);

	return (
		<>
			<h1 className='text-4xl text-center mt-4 mb-7'>
				Bienvenue sur la démo Redux
			</h1>
			<h2 className='text-3xl text-center font-semibold px-5'>
				Le compteur: {count}
			</h2>
			<h2 className='text-3xl text-center font-semibold px-5'>
				Le user:{' '}
				{userName === 'defaultValue'
					? "Personne n'est connecté"
					: `${userName} est connecté(e)`}
			</h2>
		</>
	);
};

export default Home;
