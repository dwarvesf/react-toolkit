import truncate from '../truncate'

test.each`
  str               | num    | middle   | maskChar     | expected
  ${'abcdefghjkmn'} | ${10}  | ${false} | ${undefined} | ${'abcdefghjk...'}
  ${'abcdefghjkmn'} | ${999} | ${false} | ${undefined} | ${'abcdefghjkmn'}
  ${'abcdefghjkmn'} | ${0}   | ${false} | ${undefined} | ${'...'}
  ${'abcdefghjkmn'} | ${1}   | ${false} | ${undefined} | ${'a...'}
  ${'abcdefghjkmn'} | ${12}  | ${false} | ${undefined} | ${'abcdefghjkmn'}
  ${'abcdefghjkmn'} | ${10}  | ${true}  | ${undefined} | ${'abcdefg...kmn'}
  ${'abcdefghjkmn'} | ${12}  | ${true}  | ${undefined} | ${'abcdefghjkmn'}
  ${'abcdefghjkmn'} | ${5}   | ${true}  | ${undefined} | ${'abc...mn'}
  ${'abcdefghjkmn'} | ${5}   | ${true}  | ${'*'}       | ${'abc***mn'}
  ${'abcdefghjkmn'} | ${1}   | ${false} | ${'*'}       | ${'a***'}
`(
  'truncate($str, $num, $middle, $maskChar)',
  ({ str, num, middle, maskChar, expected }) => {
    expect(truncate(str, num, middle, maskChar)).toBe(expected)
  },
)
