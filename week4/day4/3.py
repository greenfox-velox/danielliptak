# 3. Given a non-negative int n,
# return the sum of its digits recursively (no loops).
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
# while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

def digit_counter(number):
  if number <= 0:
    return  0
  else:
    summ = number % 10 + digit_counter(number // 10)
    return summ

print(digit_counter(89772))
