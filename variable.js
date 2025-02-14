console.log(' ');

//Task 1 - You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
{
    const amount = 1000;
    let applePrice = 400;
    let orangePrice = 400;
    let Return;
    console.log('Task-1:');
    console.log("The shopkeeper will return: ", Return = amount-(applePrice+orangePrice),"Taka");
}

console.log(' ');

// Task 2 - Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
{
    const mathematics = 75.25;
    const biology = 65;
    const chemistry = 80;
    const physics = 35.45;
    const bangla = 99.50;
    let subAver = ((mathematics+biology+chemistry+physics+bangla)/5).toFixed(2);
    console.log('Task-2:');
    console.log("The average marks are: ",subAver);
}

console.log(' ');

// Task 3 - You task is to divide the given number(119) by 5 and show the remainder as the output.
{
    let num = 119;
    let remainder = num%5;
    console.log('Task-3:');
    console.log("The reminder is ", remainder);
}

console.log(' ');

// Task-4
{
    var a = isNaN("11");
    var b = isNaN(2-10);

    console.log("Task-4:");
    console.log(a);
    console.log(b);
}