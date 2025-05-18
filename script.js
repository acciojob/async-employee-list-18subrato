async function hello(){
	try {
		let response = await fetch('employees');
		let data = await response.json();
		data.sort((a,b)=>a.age-b.age);
		return data;
	} catch (error) {
		console.log(error);
	}
}

console.log(hello());
