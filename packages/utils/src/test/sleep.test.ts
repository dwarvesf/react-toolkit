import sleep from '../sleep'

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

test('wait delay 5 seconds before continue', () => {
  sleep(5000)
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000)
})
