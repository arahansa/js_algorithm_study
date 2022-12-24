export class DuplicateError extends Error{
  constructor() {
    super("중복된 값 발견 예외");
  }
}
