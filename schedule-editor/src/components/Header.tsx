import { UserIcon } from '@heroicons/react/outline'

interface HeaderParams {
	isAdmin: boolean
}

const Header = ({ isAdmin } : HeaderParams) => {
	return (
		<header className="w-full">
			<nav className="w-full border-b border-gray-400 p-3">
				<ul className="list-none flex justify-end">
					<li className="inline"></li>
					<li className="inline"></li>
					<li className="inline"></li>
					<li className="inline"></li>
					<li className="inline">
						<button className={`circle-btn ${isAdmin ?
						"bg-red-600" : "bg-green-600"}`}>
							<UserIcon />
						</button>
					</li>
				</ul>
			</nav>
			<div className="flex flex-col align-center my-8">
			<h1>Rozvrhy MKP</h1>
				<span className="text-center text-lg font-light">
					Editor rozvrhů
				</span>
			</div>
		</header>
	)
}

export default Header
