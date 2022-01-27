import logo from './pp1.png';

function About() {
	return (
		<div className='container'>
			<div className='logoCont'>
				<img className='smallLogo' src={logo} alt='logo' />
			</div>
			<div className='content'>
				<h2>About</h2>
				<p>
					This four-week workshop invites participants of all ages and backgrounds to expand on M_Pavilion’s
					February’s theme of “Rituals: Marking Life.” A series of weekly Zoom meets and creative actions in
					public space will culminate in a weekend of digital-physical performances that trace and explore the
					mundane and novel ways we use the city through bodily movement, temporary installation, and visual
					documentation.
				</p>
				<p>
					During each week’s meeting, participants will be prompted to react to a particular question about
					public space. Through a series of performative mappings, investigative reports and actions,
					participants will explore different areas of Melbourne as they work at developing new skills in
					spatial analysis. Space Saloon’s interdisciplinary workshop will include inputs from architects,
					urban designers, researchers, choreographers, dancers and scenographers. The approach will be
					experimental and open to new inputs as we collectively reinterpret the ways in which Melbourne is
					used, lived in and perceived today during the global shift imposed by the pandemic.
				</p>
			</div>
		</div>
	);
}

export default About;
