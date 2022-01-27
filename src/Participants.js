import logo from './pp1.png';
import mpav from './mpav_general_2021_01.png';

function Participants() {
	return (
		<div className='container'>
			<div className='logoCont'>
				<img className='smallLogo' src={logo} alt='logo' />
			</div>
			<div className='content'>
				<h2>Team</h2>

				<p>TO COME</p>
				<h2>Workshop Leaders:</h2>

				<ul>
					<li>Space Saloon - Danny Wills, Gian Maria Socci, Rebecca van Beeck</li>
					<li>Sam Holleran</li>
				</ul>
				<h2>M_Pavilion:</h2>

				<ul>
					<li>Jen Zielinska</li>
					<li>Molly Braddon</li>
				</ul>
				<div className='spacer'>
					<a href='//mpavilion.org' target='_blank' rel='noreferrer'>
						<img src={mpav} alt='Mpavilion' />
					</a>
				</div>

				<h2>Support:</h2>
				<p>Bloomberg Philanthropies</p>

				<h2>Web Design:</h2>
				<p>Damon Black</p>
			</div>
		</div>
	);
}

export default Participants;
