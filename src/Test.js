import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable'; // The default
// import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

function Test(props) {
	const { images } = props;

	let retDrag = generateDOM(images);
	return retDrag;
}

function generateDOM(images) {
	let els = images.map(function(image, i) {
		let tid = i + 'tt';
		let positionStyle = useRef({
			position: 'absolute',
			top: getRandomNumber(0, winHeight),
			left: getRandomNumber(0, winWidth)
			// transform: 'translate(-50%, -50%)'
		});

		return (
			<div key={i}>
				<Draggable>
					<img
						style={positionStyle.current}
						data-for={tid}
						data-tip='hello world'
						draggable={false}
						className='midsize'
						src={image}
						alt=''
					/>
				</Draggable>
				<ReactTooltip
					id={tid}
					overridePosition={({ left, top }, currentEvent, currentTarget, node) => {
						left = left + 10;
						top = top + 50;

						return { top, left };
					}}
					class='toolTip'
					delayHide={300}
					delayShow={700}
					effect='solid'
					arrowColor='transparent'
					getContent={() => {
						return (
							<div>
								<Link to='/test'>
									<h3>Contribution {i}</h3>
									<p className='contr'>by Sam Holleran</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
										fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</p>
								</Link>
							</div>
						);
					}}
				/>
			</div>
		);
	});
	return els;
}

function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

export default Test;
