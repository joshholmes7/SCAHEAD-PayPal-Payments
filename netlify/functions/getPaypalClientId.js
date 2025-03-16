exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify({ clientId: process.env.PAYPAL_CLIENT_ID })
    };
};
