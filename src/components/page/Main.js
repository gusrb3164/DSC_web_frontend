import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';

const Main = () => {
	return (
		<Grid className="main">
			<Link to={`/create`}>
				<Button className="main-button">방 생성</Button>
			</Link>
			<Link to={`/enter`}>
				<Button className="main-button">방 입장</Button>
			</Link>
		</Grid>
	);
};

export default Main;
