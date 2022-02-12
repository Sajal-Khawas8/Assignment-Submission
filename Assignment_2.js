// Using for loop
console.log("Printing values using for loop");
for(let i = 0; i < employee.length; i++)
{
	console.log("Employee name:", employee[i].name);
	console.log("Employee id:", employee[i].id);
}
			
// Using forEach loop
console.log("\nPrinting values using forEach loop");
employee.forEach(
	function(employee, index)
	{
		console.log("Employee name:", employee.name);
		console.log("Employee id:", employee.id);
	}
)