import { Period } from "./period";
import PeriodException from "./period-exception";

describe(`${Period.name}`, ()=>{

  it('should return period instance', ()=> {
    // Given
    const start = addDays(new Date(), 1)
    const end = addDays(new Date(), 5)

    // When
    const actual = Period.create(start, end)

    // Then
    expect(actual).toBeDefined()
  })

  it('should throw ...', ()=> {
    // Given
    const start = new Date()
    const end = new Date()
    const expected =  "Period invalid";

    // When
    const actual = () => Period.create(start, end)

    // Then
    expect(actual).toThrow(expected)

  })
})


function addDays(dateTime, count_days = 0){
  return new Date(new Date(dateTime).setDate(dateTime.getDate() + count_days));
}
