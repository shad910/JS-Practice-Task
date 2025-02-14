// For Looping Tasks
console.log(" ");
{console.log('Task-1:');

    for(let i = 1; i<=60; i++){
        console.log(`${i}: I will invest at least 6 hrs every single day for next 60 days!`);
    }
}
console.log(" ");
{console.log('Task-2:');

    console.log('Subtask-1: Find all the Odd numbers from 61 to 100.');
    let oddArray = [];
    for(let odd = 61; odd<=100; odd++){
        if(odd%2===1){
            console.log(odd);
            oddArray.push(odd);   
        }
    }
    console.log('Even Array:',oddArray)

    console.log('Subtask-2: Find all the Even numbers from 78 to 98.');
    let evenArray = [];
    for(let even = 78; even<=98; even++){
        if(even%2===0){
            console.log(even);
            evenArray.push(even);   
        }
    }
    console.log('Even Array:',evenArray)
}
console.log(" ");
{console.log('Task-3:');

    console.log('Subtask-1: Display sum of all the Odd numbers from 91 to 129.');

    let sumOfOdd = 0;
    for(let odd = 91; odd <= 129; odd++){
        if(odd%2===1){
            console.log('Odd Number:',odd);
            sumOfOdd += odd;
            console.log('Sum of Odd Numbers:',sumOfOdd);
        }
    }
    console.log('Final sum of Odd Numbers:',sumOfOdd);

    console.log(" ");
    console.log('Subtask-1: Display sum of all the Odd numbers from 51 to 85.');  
    
    let sumOfEven = 0;
    for(let even = 1; even <=85; even++){
        if(even%2===0){
            console.log('Even Number:',even);
            sumOfEven += even;
            console.log('Sum of Even Numbers:',sumOfEven);
        }
    }
    console.log('Final sum of Even Numbers:',sumOfEven);
}
console.log(" ");
{console.log('Task-4:')

    // Generate a multiplication table for number 9
    const num = 9;

    for(let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${num*i}`)
    }
}
console.log(" ");
{console.log('Task-5:');

    // Implement a countdown timer that counts down from 81 to 65.
    for(i=81; i >= 65; i--){
        console.log('count:',i);
    }
    console.log("Countdown finished!");
}