async function hello(){
	try {
		let response = await fetch('employees');
		let data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

const jsonData = hello();
jsonData = jsonData.sort((a,b)=>a.age-b.age);
console.log(jsonData);
