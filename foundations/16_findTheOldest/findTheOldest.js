const findTheOldest = function(people) {
        let oldestPerson;
        let oldestAge = 0;
        let age;
    for(const person of people){
        

    if (person.yearOfDeath !== undefined) {
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        age = new Date().getFullYear() - person.yearOfBirth;
    }

    if(age>oldestAge){
        oldestAge=age;
        oldestPerson = person;
    }

    
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
