const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FQRSHAZZ#tT_JKobLwbuBUFQfzh0XjpJg0SSIK-J_1L-XnBRO7R0",
MONGODB: process.env.MONGODB || "mongodb+srv://nameishara:gKEy6jKkFKg8Ribf@cluster0.9mkcf.mongodb.net/"
};
