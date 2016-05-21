def create_triangle(hypotenuse):
  if hypotenuse % 2 == 0:
    print('Please give me odd number')
  else:
    for line in range(hypotenuse + 1):
      star = line * '*'
      space = int((hypotenuse - line) / 2) * ' '
      if not line % 2 == 0:
        print(space + star)
    for line in range(hypotenuse-1, -1, -1):
      star = line * '*'
      space = int((hypotenuse - line) / 2) * ' '
      if not line % 2 == 0:
        print(space + star)


create_triangle(11)
