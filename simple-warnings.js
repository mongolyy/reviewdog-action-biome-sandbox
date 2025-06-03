// Valid JavaScript code that should trigger warnings according to user's biome.json

// useNamingConvention warning - snake_case instead of camelCase
const user_name = "john";
const api_key = "secret";

// noConsole error - console.info not in allowed list (per user's config)
console.info("This should be an error");

// noConsole warning - console.log should be allowed per user's config
console.log("This should be allowed");
console.warn("This should be allowed");
console.error("This should be allowed");

// noUnusedVariables warning
const unusedVariable = "not used anywhere";

function processUser() {
    return user_name + api_key;
}

// Export to avoid unused function warning
export { processUser };
