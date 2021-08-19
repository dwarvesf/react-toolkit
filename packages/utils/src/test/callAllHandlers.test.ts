import callAllHandlers from "../callAllHandlers"

const event = { target: { value: 1 } }

test("should call all passed functions on event triggered", () => {
  let val1 = 0
  let val2 = 0
  const func1 = (e: any) => {
    val1 = e.target.value + 1
  }
  const func2 = (e: any) => {
    val2 = e.target.value + 2
  }

  callAllHandlers(func1, func2)(event)
  expect(val1).toStrictEqual(2)
  expect(val2).toStrictEqual(3)
})
