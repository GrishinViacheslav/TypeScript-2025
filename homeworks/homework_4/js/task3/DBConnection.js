export default class DBConnection {
    constructor(config) {
        this._config = config;
    }
    connect() {
        const { host, port, username, password } = this._config;
        if (password) {
            console.log(`Connection at ${host}:${port} with username ${username} and password ***`);
        }
        else {
            console.log(`Connection at ${host}:${port} with username ${username}`);
        }
    }
}
