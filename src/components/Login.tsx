import React, { useState } from 'react';
import { login, logout } from '../redux/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const btnStyles = 'bg-blue-400 text-white p-2 rounded-md uppercase font-semibold';

const Login = () => {
	const [newUserName, setNewUserName] = useState('');
	const { userName } = useSelector((state: RootState) => state.user.value);
	const dispatch = useDispatch();

	const handleLogin = (e: any) => {
		e.preventDefault();
		if(newUserName === '') return;
		dispatch(login({ userName: newUserName }));
	};
	const handleLogout = (e: any) => {
		e.preventDefault();
		dispatch(logout());
	}

	return (
		<div className='max-w-6xl mx-auto'>
			<h1 className='text-4xl text-center text-blue-400 mb-10'>
				Page de Login
			</h1>
			<div className='w-[500px] mx-auto mb-4'>
				{userName === "defaultValue" ? (
					<h2 className='text-3xl mb-4'>Veuillez vous connecter</h2>
				) : (
					<h2 className='text-3xl mb-4'>
						Bonjour <span className='font-bold'>{userName}</span>
					</h2>
				)}
				<form className='w-full flex flex-col justify-center gap-4'>
					<label htmlFor='email' className='text-xl font-semibold'>
						Votre Email:{' '}
					</label>
					<input
						id='email'
						className='border border-[#333] rounded-md p-2'
						onChange={(e) => setNewUserName(e.target.value)}
					/>
					<button onClick={handleLogin} type='submit' className={btnStyles}>
						Login
					</button>
					<button onClick={handleLogout} type='button' className={btnStyles}>
						Logout
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
