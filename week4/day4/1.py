# 1. write a recursive function
# that takes one parameter: n
# and counts down from n

def count_down(number):
  if number <= 0:
    pass
  else:
    print(number)
    count_down(number-1)

count_down(5)
