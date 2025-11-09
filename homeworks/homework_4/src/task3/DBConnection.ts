import IDatabaseConfig from "./IDatabaseConfig.js";
export default class DBConnection {
  private _config: IDatabaseConfig;
  constructor(config: IDatabaseConfig) {
    this._config = config;
  }
  connect(): void {
    const { host, port, username, password } = this._config;
    if (password) {
      console.log(`Connection at ${host}:${port} with username ${username} and password ***`);
    } else {
      console.log(`Connection at ${host}:${port} with username ${username}`);
    }
  }
}
