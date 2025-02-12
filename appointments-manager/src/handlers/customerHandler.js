const CustomerService = require('../services/customerService');

module.exports.createCustomer = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const customer = await CustomerService.createCustomer(body);

        return {
            statusCode: 201,
            body: customer
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
  };
  