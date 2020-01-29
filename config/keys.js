dbPassword = 'mongodb+srv://USER_NAME:'+ encodeURIComponent('PASSWORD') + '@SESSION_NAME.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};
