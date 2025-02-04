const accountId = 12345
let accountEmail = "fakiyat@gmail.com"
var accountPassword = "1234"
accountCity = "kashmir"
let accountState; // if there is only a key and that key has no variable string anything inside it then the console shows it as Undefined(accountEmail)= key --------("fakiyat@gmail.com")=value

// accountId = 3 not allowed
accountEmail = "hc@mail.com"
accountPassword = "232312"
accountCity = "Bengaluru"


/*
var is not used everywhere or is prefered not to use
because of issue in Block scope and functional scope
*/


console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);
