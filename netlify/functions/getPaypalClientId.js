exports.handler = async function () {
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" }, // Ensure correct JSON format
        body: JSON.stringify({ clientId: process.env.PAYPAL_CLIENT_ID }) 
    };
};
exports.handler = async function () {
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ envVars: process.env }) // Debugging
    };
};
