import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import imageArray from './images.js';
import About from './About.js';
import Home from './Home.js';
import Participants from './Participants.js';
import Post from './Post.js';
import Test from './Test.js';
import logo from './pp1.png';

function App() {
	let shuffArray = shuffleArray(imageArray);

	const [ items ] = useState(9);
	const [ images ] = useState(shuffArray);
	return (
		<div className='App'>
			<header>
				<Router>
					<div className='heading'>
						<div>
							<Link to='/'>
								<img className='midsize' src={logo} alt='logo' />
							</Link>
						</div>
						<div>
							<ul>
								<li>
									<Link to='/'>Home</Link>
								</li>
								<li>
									<Link to='/about'>About</Link>
								</li>
								<li>
									<Link to='/team'>Participants</Link>
								</li>
								<li>
									<Link to='/test'>Content</Link>
								</li>
								<li>
									<Link to='/oldtest'>Test Drag</Link>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<Switch>
							<Route exact path='/'>
								<Test images={images} />
							</Route>
							<Route path='/about'>
								<About />
							</Route>
							<Route path='/team'>
								<Participants />
							</Route>
							<Route path='/test'>
								<Post />
							</Route>
							<Route path='/oldtest'>
								<Home items={items} images={images} />
							</Route>
						</Switch>
					</div>
				</Router>
			</header>
		</div>
	);
}

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

export default App;
