const ADD_ACCOUNT_VALIDATOR = {
    body: {
        firstname: 'string|min:2|max:255',
        lastname: 'string|min:2|max:255',
        email: 'string|min:10',
        password: 'string|min:10'
    },
}
const LOGIN_ACCOUNT_VALIDATOR = {
    body: {
      email: 'email',
      password: 'string|min:3'
    }
}

module.exports = {
    ADD_ACCOUNT_VALIDATOR,
    LOGIN_ACCOUNT_VALIDATOR,
}
