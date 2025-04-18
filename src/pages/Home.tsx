import { useState } from 'react';
import { Button } from '@parabit/megatizerui';

const Home = () => {
	const [count, setCount] = useState(0);

	const update = () => setCount((prev) => prev + 1);

	return (
		<>
			<title> App | Home </title>
			<meta name="description" content="This is my home page" />
			<h1> Home Page </h1>
			<p> Counter: {count} </p>
			<Button onClick={() => update()}>Update</Button>
		</>
	);
};

export default Home;
