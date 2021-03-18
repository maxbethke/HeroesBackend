export default class RuntimeError extends Error {
  constructor(
    public statusCode: number,
    public message: string
  ) {
    super();
  }
}