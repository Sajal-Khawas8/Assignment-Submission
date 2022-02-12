console.log("\nPercentage and Grade of student:")
let percentage = ((maths + physics + chemistry + english + hindi) / 500) * 100;
            
console.log("Percentage: ", percentage);
            
if(percentage >= 85)
{
	console.log("Grade: O");
}
else if((percentage < 85) && (percentage >= 60))
{
	console.log("Grade: A");
}
else if((percentage < 60) && (percentage >= 45))
{
	console.log("Grade: B");
}
else if((percentage < 45) && (percentage >= 33))
{
	console.log("Grade: C");
}
else
{
	console.log("Grade: D");
	console.log("You Failed");
}