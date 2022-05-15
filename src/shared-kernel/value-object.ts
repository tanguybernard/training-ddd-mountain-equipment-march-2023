import { isDeepStrictEqual } from "util";

export abstract class ValueObject<T> {
  constructor(public readonly props: T) {}

  public equals(vo: ValueObject<T>): boolean {
    return isDeepStrictEqual(this.props, vo.props);
  }
}
