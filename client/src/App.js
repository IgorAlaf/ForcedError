import { Link } from 'react-router-dom'
function App() {
	return (
		<div className='App bg-white h-screen flex items-center justify-center'>
			<div className='flex flex-col items-center'>
				<h1 className='text-3xl text-[#311E69] font-semibold'>Select cases</h1>
				<ul className='flex gap-5 mt-5'>
					<Link
						className='text-[#8b81ff] text-md font-medium transition-colors duration-300 hover:text-[#311E69]'
						to={'/case1'}
					>
						1
					</Link>
					<Link
						className='text-[#8b81ff] text-md font-medium transition-colors duration-300 hover:text-[#311E69]'
						to={'/case2'}
					>
						2
					</Link>
					<Link
						className='text-[#8b81ff] text-md font-medium transition-colors duration-300 hover:text-[#311E69]'
						to={'/case3'}
					>
						3
					</Link>
					<Link
						className='text-[#8b81ff] text-md font-medium transition-colors duration-300 hover:text-[#311E69]'
						to={'/case4'}
					>
						4
					</Link>
					<Link
						className='text-[#8b81ff] text-md font-medium transition-colors duration-300 hover:text-[#311E69]'
						to={'/case5'}
					>
						5
					</Link>
					<Link
						className='text-[#8b81ff] text-md font-medium transition-colors duration-300 hover:text-[#311E69]'
						to={'/case6'}
					>
						6
					</Link>
					<Link
						className='text-[#8b81ff] text-md font-medium transition-colors duration-300 hover:text-[#311E69]'
						to={'/case7'}
					>
						7
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default App
