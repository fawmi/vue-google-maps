export class Env {
  static isServer() {
    return typeof document === 'undefined';
  }
}
