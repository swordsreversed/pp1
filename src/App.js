import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import imageArray from './images.js';
import About from './About.js';
import Home from './Home.js';
import Participants from './Participants.js';
import Post from './Post.js';

function App() {
	let shuffArray = shuffleArray(imageArray);

	const [ items ] = useState(9);
	const [ images ] = useState(shuffArray);
	return (
		<div className='App'>
			<header>
				<Router>
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
						</ul>

						<hr />
						<Switch>
							<Route exact path='/'>
								<Home items={items} images={images} />
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
