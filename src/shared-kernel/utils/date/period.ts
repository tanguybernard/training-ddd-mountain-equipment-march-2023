import { ValueObject } from "../../value-object";
import PeriodException from "./period-exception";

export class Period extends ValueObject<{ startDate: Date; endDate: Date }> {
  private constructor(public readonly startDate: Date, public readonly endDate: Date) {
    super({ startDate, endDate });
  }

  public static create(startDate: Date, endDate: Date){
    if(this.isValid(startDate, endDate)) {
      return new Period(startDate, endDate)
    }
    throw new PeriodException("Period invalid")
  }

  private static isValid(startDate: Date, endDate: Date){
    return (startDate < endDate) && startDate > new Date();
  }

}
