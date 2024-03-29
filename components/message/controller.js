const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('menssagecontroller');
            reject('datos incorrectos');
            return false;

        }
        console.log(user);
        console.log(message);
        const fullMessage = {
            user: user,
            message: message,
            data: new Date(),
        };
        store.add(fullMessage);
        resolve(fullMessage);
    });
}

function getMessages() {
    return new Promise((resolve, reject) => {

        resolve(store.list);
    })
}

module.exports = {
    addMessage,
    getMessages,
};
