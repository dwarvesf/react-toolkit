import truncate from '../truncate'

test.each`
  str               | num    | middle   | expected
  ${'abcdefghjkmn'} | ${10}  | ${false} | ${'abcdefghjk...'}
  ${'abcdefghjkmn'} | ${999} | ${false} | ${'abcdefghjkmn'}
  ${'abcdefghjkmn'} | ${0}   | ${false} | ${'...'}
  ${'abcdefghjkmn'} | ${1}   | ${false} | ${'a...'}
  ${'abcdefghjkmn'} | ${12}  | ${false} | ${'abcdefghjkmn'}
  ${'abcdefghjkmn'} | ${10}  | ${true}  | ${'abcdefg...kmn'}
  ${'abcdefghjkmn'} | ${12}  | ${true}  | ${'abcdefghjkmn'}
  ${'abcdefghjkmn'} | ${5}   | ${true}  | ${'abc...mn'}
`('truncate($str, $num, $middle)', ({ str, num, middle, expected }) => {
  expect(truncate(str, num, middle)).toBe(expected)
})
