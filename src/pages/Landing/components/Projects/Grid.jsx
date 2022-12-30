import React, { useState, useEffect }from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { shadows } from '@mui/system';
import Card from './Card';
import Consts from '../../../../consts';


const Grid = () => {

	const [numProjects, setNumProjects] = useState(Consts.PROJECTS.length)

	const Row = styled(Box)(() => ({
	  width: '100%',
	  display: 'flex',
	  justifyContent: 'space-around',
	  margin: '10px 0'
	}));

	const Col = styled(Box)(() => ({
		display: 'inline-flex',
		boxSizing: 'border-box',
	  	width: `calc(50% - 40px)`,
	  	borderRadius: '10px',
	}));


	return (
		<>
		{Consts.PROJECTS.map((item,i) => (
			<>
				{i%2 == 0 ? 
					(<Row key={i}>
						<Col sx={{ boxShadow: 2 }} key={i}>
							<Card title={Consts.PROJECTS[i].cardHeader} text={Consts.PROJECTS[i].cardText} link={Consts.PROJECTS[i].link}/>
						</Col>
						{Consts.PROJECTS[i+1] &&
							<Col sx={{ boxShadow: 2 }} key={i+1}>
								<Card title={Consts.PROJECTS[i+1].cardHeader} text={Consts.PROJECTS[i+1].cardText} link={Consts.PROJECTS[i].link}/>
							</Col>
						}
					</Row> )
				:
					(null)
				}
			</>
		))}
		</>
	)
}

export default Grid