import { validateSync } from 'class-validator'

export default abstract class Base {
  public validate(): this {
    const errors = validateSync(this)

    if (errors.length > 0) {
      throw errors
    }

    return this
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static create<T extends Base>(this: new (...args: any[]) => T, ...args: any[]): T {
    return new this(...args).validate()
  }
}
