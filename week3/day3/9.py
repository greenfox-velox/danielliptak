# Create a function that prints a triangle like this:
#   *
#   **
#   ***
#   ****
#   *****
#   ******
# It should take a number as parameter that describes how many lines the triangle has

def create_triangle(max_line):
  for max_line in range(max_line + 1):
    star = max_line * '*'
    print(star)

create_triangle(7)
