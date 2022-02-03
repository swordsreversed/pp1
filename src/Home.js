import GridLayout from 'react-grid-layout';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import logo from './pp1.png';

function Home(props) {
	const { items, images } = props;
	const layout = generateLayout(items);
	return (
		<GridLayout
			className='layout'
			items={items}
			layout={layout}
			allowOverlap={true}
			cols={60}
			rowHeight={50}
			width={1200}
			isResizable={false}
			autoSize={true}
			compactType={'Horizonal'}
			useCSSTransforms={true}>
			{generateDOM(items, images)}

			<div key='9'>
				<img draggable={false} className='midsize' src={logo} alt='' />
			</div>
		</GridLayout>
	);
}

function generateLayout(items) {
	let ia = Array.from(Array(items).keys());
	return ia.map(function(item, i) {
		const w = Math.ceil(Math.random() * 4);
		const y = Math.ceil(Math.random() * 4) + 1;
		return {
			x: (i * 2) % 12,
			y: Math.floor(i / 6) * y,
			w: w,
			h: y,
			i: i.toString()
		};
	});
}

function generateDOM(items, images) {
	let els = images.map(function(image, i) {
		let tid = i + 'tt';
		return (
			<div key={i}>
				<div data-for={tid} data-tip='hello world'>
					<img draggable={false} className='midsize' src={image} alt='' />
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
									</Link>
								</div>
							);
						}}
					/>
				</div>
			</div>
		);
	});
	return els;
}

export default Home;
