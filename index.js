const user_name = "john";
const api_key = "secret";

console.info("This should trigger an error");
console.log("This should be allowed");

const unusedVariable = "not used anywhere";

function processUser() {
    return user_name + api_key;
}

export { processUser };
