const world = {
	what: 'world',
	log: true,
};

function hello ({ what, log }) {
	const base = 'hello';
	const str = `${base} ${what}`;
	if (log) {
		console.log(str);
	}
	return str;
}

hello(world);
