# 2. write a recursive function
# that takes one parameter: n
# and adds numbers from 1 to n

def counter(number):
  if number <= 0:
    return  0
  else:
    number += counter(number - 1)
    return number

print(counter(6))
