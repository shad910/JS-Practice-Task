
console.log(" ");
{   console.log("Task-1:");
    
    let fruitsArray = ['Apple','Orange','Mango','lychee','Grapes'];
    console.log(fruitsArray[3]);

    let change = fruitsArray[2]='Jambura';
    console.log(fruitsArray);
}
console.log(" ");
{   console.log("Task-2:");

    let touristPlace = ['Coxs Bazar','Sajek','Rangamati'];
    touristPlace.push('Dhaka');
    console.log(touristPlace);

    console.log(" ");

    touristPlace.pop();
    console.log(touristPlace);
}
console.log(" ");
{   console.log("Task-3:");

    let books = ['English','Math','Physics','Chemistry','Bengali'];
    const include = books.includes('Math');
    if(include===true){
        console.log('The element is present in the array');
    }
    else{
        console.log('the element is not present in the array');
    }
}
console.log(" ");
{   console.log("Task-4:");
    const name = 'Shad';
    let arrayOne = [];
    let arrayTwo = [1,10,2,20,40,50];

    console.log(Array.isArray(name))
    console.log(Array.isArray(arrayOne));
    console.log(Array.isArray(arrayTwo));

}
console.log(" ");
{   console.log("Task-5:");
    const nameOne = ['Shad','Monayem','Evan','Abir'];
    const nameTwo = ['Musfiq','Hasibul','Siam','Sajid'];

    let names = nameOne.concat(nameTwo);
    console.log(names)
    for (let name of names) {
        console.log(' ')
        console.log(name);
    }
}