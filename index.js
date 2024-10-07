// 1. Declare a global variable 'customerName' using 'var' and assign it the value 'bob'.
var customerName = 'bob';

// 2. Function that uppercases the global 'customerName' variable.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function that declares 'bestCustomer' in global scope and assigns it to 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob';  // Notice no 'var', 'let', or 'const', making it global.
}

// 4. Function that overwrites the global 'bestCustomer' variable.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare a constant 'leastFavoriteCustomer' and try to change it in another function.
const leastFavoriteCustomer = 'someone';

// Function that tries to change the constant 'leastFavoriteCustomer'.
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; // This will throw an error because 'leastFavoriteCustomer' is a constant.
}
