function calculateVAT( price ) {

    const vatRate = 7.5/100;
    const vatAmount = price * vatRate;

    if( typeof price === "number" ) {
        if( price <= 0 ) {
            return "Invalid";
        }
        else {
            return vatAmount;
        }
    }
    else {
        return "Invalid";
    }
}

function  validContact( contact ) {

    if ( typeof contact === "string" ) {
        if( contact.length === 11 && contact.startsWith('01') && contact.indexOf(' ') === -1 ) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Invalid';
    }
}

function  willSuccess( marks ) {

    let pass = [];
    let fail = [];

    if(Array.isArray(marks)) {
        for(const mark of marks ) {
            if ( typeof mark !== "number" ) {
                return "Invalid Value";
            }
            else {
                if( mark >= 50 ) {
                    pass.push(mark);
                }
                else {
                    fail.push(mark);
                }
            }
        }

        if(pass.length > fail.length) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Invalid";
    }
}

function  validProposal( person1 , person2 ) {

    if (typeof person1 === "object" && typeof person2 === "object" && !Array.isArray(person1) && !Array.isArray(person2) && person1 !== null & person2 != null ) {

        const ageDifference = Math.abs( person1.age - person2.age);

        if( person1.gender !== person2.gender && ageDifference <= 7 ) {
            return true;
        }
        else{
            return false;
        }
    } 
    else {
        return "Invalid";
    }
}

function  calculateSleepTime( times ) {

    let totalSeconds = 0;
    
    if(Array.isArray(times)){

        for (const time of times) {
            if ( typeof time !== "number" ) {
                return 'Invalid';
            }
            else {
                totalSeconds += time;
            }
        }

        const hours = Math.floor(( totalSeconds / 3600 ));
        const minutes = Math.floor(( ( totalSeconds % 3600 ) / 60 )); 
        const seconds = Math.floor(( totalSeconds % 60 ));

        return {hour: hours, minute: minutes, second: seconds};
    }
    else {
        return false;
    }
}

