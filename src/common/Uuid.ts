import { v4 as uuidv4 } from 'uuid';

export class Uuid {
  private readonly value: string;

  private constructor(value: string) {
    if (!Uuid.valid(value)) {
      throw new TypeError(`${value} is not a valid UUID`);
    }

    this.value = value;
  }

  public static generate(): Uuid {
    return new Uuid(uuidv4());
  }

  public static fromString(value: string): Uuid {
    return new Uuid(value);
  }

  public static valid(value: string): boolean {
    return new RegExp('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}').test(value);
  }

  public equals(other: Uuid | string): boolean {
    return this.toString() === other.toString();
  }

  public toString(): string {
    return this.value;
  }

  public toJSON(): string {
    return this.value;
  }
}
