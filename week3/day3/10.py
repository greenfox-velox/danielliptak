# Create a function that prints a triangle like this:
#       *
#      ***
#     *****
#    *******
#   *********
#  ***********
#
# It should take a number as parameter that describes how many lines the triangle has

def create_triangle(hypotenuse):
  if hypotenuse % 2 == 0:
    print('Please give me odd number')
  else:
    for line in range(hypotenuse + 1):
      star = line * '*'
      space = int((hypotenuse - line) / 2) * ' '
      if not line % 2 == 0:
        print(space + star)


create_triangle(101)
