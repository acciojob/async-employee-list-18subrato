async function fetchData(){
	let res = await fetch('employess.json');
	let data = await res.json();
	console.log(data);
}

fetchData();