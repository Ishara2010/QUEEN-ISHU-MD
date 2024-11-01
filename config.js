const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-MD=rdt3VZyQ#rjzmgwLq-Bf1zca37DazQmhT0kZmrJgWhi75_v7vS_0",
MONGODB: process.env.MONGODB || "mongodb+srv://nameishara:gKEy6jKkFKg8Ribf@cluster0.9mkcf.mongodb.net/"
};
