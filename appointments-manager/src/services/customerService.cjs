'use strict';

const DB = require('./db');

module.exports.createCustomer = async (customerBody) => {
  const { name, lastname, mothersLastname, timezone } = customerBody;

  const { address } =  customerBody?.address || '';

  const query = `
    INSERT INTO 
    customers (name, lastname, mothersLastname, timezone, address)
    VALUES ($1, $2, $3, $4, $5)
  `
  const values = [name, lastname, mothersLastname, timezone, address];

  try {
    const result = await DB.query(query, values);
    return {
      statusCode: 201,
      body: JSON.stringify(result.rows[0])
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
  
};
