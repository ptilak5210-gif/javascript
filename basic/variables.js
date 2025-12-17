const account_id=12345
let account_email="tilak@gmail.com"
var account_password="12345678"
account_city="ahmedabad"
let account_state;

/*
prefer not use var
because of issue in block scope and functional scope
*/

// account_id=123 // not allowed
account_email="pt123@gmail.com"
account_password="123123"
account_city="gujarat"
console.log(account_id);
console.table([account_id,account_email,account_password,account_city,account_state])
