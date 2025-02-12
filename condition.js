console.log(' ');

// Task-1
{
    const amount = 1000;
    
    console.log("Task-1:");

    if(amount>=500){
        console.log('free Coke');
    }
    else{
        console.log('30tk');
    }
}

console.log(' ');

// Task-2
{
    let weight = 55;
    let height = 1.524;
    const BMI = (weight/(height)**2).toFixed(2)

    console.log("Task-2:");

    if (BMI < 18.5) {
        console.log('Your BMI (',BMI,')','says, you are underweight.');
    }
    else if (BMI >= 18.5 && BMI <=24.9) {
        console.log('Your BMI (',BMI,')','says, you are normal.');
    }
    else if(BMI >=25 && BMI <= 29.9){
        console.log('Your BMI (',BMI,')','says, you are overweight.');
    }
    else {
        console.log('Your BMI (',BMI,')','says, you are obese.');
    }
}

console.log(' ');

// Task-3
{
    let marks = 34;

    console.log("Task-3:")

    if(marks>=95 && marks<=100){
        console.log("You got A++");
    }
    else if(marks>=90 && marks<=94){
        console.log("You got A+");
    }
    else if(marks>=85 && marks<=89){
        console.log("You got A");
    }
    else if(marks>=80 && marks<=84){
        console.log("You got A-");
    }
    else if(marks>=75 && marks<=79){
        console.log("You got B+");
    }
    else if(marks>=70 && marks<=74){
        console.log("You got B");
    }
    else if(marks>=65 && marks<=69){
        console.log("You got B-");
    }
    else if(marks>=60 && marks<=64){
        console.log("You got C+");
    }
    else if(marks>=55 && marks<=59){
        console.log("You got C");
    }
    else if(marks>=40 && marks<=44){
        console.log("You got C-");
    }
    else if(marks>=35 && marks<=39){
        console.log("You got D");
    }
    else{
        console.log("You have failed.");
    }
    
}

console.log(' ')

// Task-4
{
    const myScore = 60;
    const friScore = 35;

    console.log("Task-4:")

    if (myScore >= 80) {

        if (friScore >= 80) {
            console.log("Go for a lunch.");
        } else if (friScore >= 60) {
            console.log("Good luck next time.");
        } else if (friScore >= 40) {
            console.log("Keep your friend's message unseen.");
        } else if(friScore<40){
            console.log("Block your friend.");
        }
    } else {
        console.log("Go home, sleep, and act sad.");
    }
}

console.log(' ');

// Task-5
{
    const num1 = 30;
    const num2 = 20;
    let result;

    console.log('Task-5 Part-1:');
    num1>num2?result=num1*2: result=num1+num2;
    console.log(result);

    console.log(' ');

    console.log('Task-5 Part-2:');
    if(num1>num2){
        console.log(result=num1*2);
    }
    else{
        console.log(result=num1+num2);
    }
}

console.log(' ');

// Task-6
{
    const ticketPrice = 800;
    let age = 40;
    let isStudent = true;

    console.log('Task-6:')
    if(age<=10){
        console.log("Free");
    }
    else if (age>=60){
        let discount = ticketPrice*(15/100);
        let finalPrice = ticketPrice-discount 
        console.log('pay:',finalPrice,"Taka");
    }
    else if(isStudent){
        let discount=ticketPrice*(50/100)
        let finalPrice = ticketPrice-discount
        console.log("pay:",finalPrice,"Taka");
    }
    else{
        console.log("pay 800 Taka")
    }
}