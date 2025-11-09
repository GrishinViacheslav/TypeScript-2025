export default function (message: string): never {
  throw new Error(`Error! ${message}`);
}
