import { useState } from 'react';
import logo from './pp1.png';
import image from './Photo_02.png';
import YoutubeEmbed from './Youtube';

function Post() {
	const [ embedId ] = useState('WgiJCrheBaA');

	return (
		<div className='container'>
			<div className='logoCont'>
				<img className='smallLogo' src={logo} alt='logo' />
			</div>
			<div className='content'>
				<YoutubeEmbed embedId={embedId} />
				<h2>Thesis 30</h2>
				<p>
					The alienation of the spectator to the profit of the contemplated object is expressed in the
					following way: The more [the spectator] contemplates the less he lives; the more he accepts
					recognizing himself in the dominant images of need, the less he understands his own existence and
					desires. – Debord
				</p>
				<span>
					<img src={image} alt='' />
				</span>
			</div>
		</div>
	);
}

export default Post;
