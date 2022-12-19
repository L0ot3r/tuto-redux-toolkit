import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='sticky top-0 w-full bg-slate-400 p-3 mb-5'>
			<ul className='flex justify-center gap-5'>
				<li>
					<Link className='text-white text-lg' to='/'>
						Home
					</Link>
				</li>
				<li>
					<Link className='text-white text-lg' to='/contact'>
						Counter
					</Link>
				</li>
				<li>
					<Link className='text-white text-lg' to='/login'>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
