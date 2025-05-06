let arr;
async function fetchData(){
	let res = await fetch('employess.json');
	let data = await res.json();
	arr = data;
	arr.sort((a,b)=>a.age-b.age);
	console.log(arr);
}

fetchData();
