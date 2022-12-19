import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/reducers/counterSlice';
import { RootState } from '../redux/store';

const btnStyles = 'bg-blue-400 text-white p-2 rounded-md uppercase font-semibold px-5';

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter.value);

  const handleInc = () => {
    dispatch(increment({ count: count + 1 }))
  }
  const handleDec = () => {
    dispatch(decrement({ count: count - 1 }))
  }
  

	return (
		<div className='max-w-6xl mx-auto'>
			<h1 className='text-4xl text-center text-blue-400 mb-10'>
				Page du Counter
			</h1>
			<div className='w-[500px] mx-auto'>
				<div className='flex justify-center items-center gap-4'>
					<button 
            className={btnStyles}
            onClick={handleDec}
          >-</button>
					<h2 className='text-3xl font-semibold px-5'>{count}</h2>
					<button 
            className={btnStyles}
            onClick={handleInc}
          >+</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
