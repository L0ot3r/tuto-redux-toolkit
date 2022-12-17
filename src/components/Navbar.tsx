import React from 'react';

const Navbar = () => {
	return (
		<nav className='sticky top-0 w-full bg-slate-400 p-3 mb-5'>
			<ul className='flex justify-center gap-5'>
				<li>
					<a className='text-white text-lg' href='/'>
						Home
					</a>
				</li>
				<li>
					<a className='text-white text-lg' href='/contact'>
						Counter
					</a>
				</li>
				<li>
					<a className='text-white text-lg' href='/login'>
						Login
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
