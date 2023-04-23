// Write a function in JS to find the prime factors of any integer. This function should take 
// an integer as a parameter and should return a list of prime factors for that number. 
// Suggest the time complexity of your written function.


const getPrimeFactors = (number) => {
    let lstFactors  = []                                               // Time Complexity : 1
    for (let index = 2; index < number; index++) {                     // Time Complexity : n
        if(number % index == 0){
            lstFactors.push(index)
        }
    }

    let lstPrimeFactors = checkPrimeNumber(lstFactors)                 // Time Complexity : n^2

    return lstPrimeFactors                                             // Time Complexity : 1
}


const checkPrimeNumber = (lstFactors) => {

    let lstPrimeNumbers = []                                            // Time Complexity : 1

    // Time Complexity : n ^ 2 because there is a nested loop.

    for (let index = 0; index < lstFactors.length; index++) {           // Time Complexity : n
        let isPrime = true
        for (let j = 2; j < lstFactors[index]; j++) {                    // Time Complexity : n
            if(lstFactors[index] % j == 0){
                isPrime = false
            }
        }
        if(isPrime){
            lstPrimeNumbers.push(lstFactors[index])
        }
    }

    return lstPrimeNumbers                                                // Time Complexity : 1
}


answer = getPrimeFactors(20)
console.log(answer)



// The time complexity of the function is n^2 
// because the function checkPrimeNumber has two for loops
// which is used in the main function getPrimeFactors.



