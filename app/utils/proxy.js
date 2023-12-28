const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const response = await axios.post('https://emailcampigns.adaptable.app/user/login', JSON.parse(event.body));

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
      headers: {
        'Access-Control-Allow-Origin': 'https://658457de17dc8b0009b0e24c--friendly-halva-89d6cc.netlify.app',
      },
    };
  } catch (error) {
    return {
      statusCode: error.response.status || 500,
      body: JSON.stringify({ error: error.message }),
      headers: {
        'Access-Control-Allow-Origin': 'https://658457de17dc8b0009b0e24c--friendly-halva-89d6cc.netlify.app',
      },
    };
  }
};