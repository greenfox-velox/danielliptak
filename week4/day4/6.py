
# 6. We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
# (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
# have 3 ears, because they each have a raised foot. Recursively return the
# number of "ears" in the bunny line 1, 2, ... n (without loops or
# multiplication).
def ear_count(bunny):
  num_ears = 0
  if bunny < 1:
    return  0
  elif bunny % 2 is 0:
    num_ears += ear_count(bunny-1) + 3
  else:
    num_ears += ear_count(bunny-1) + 2
  return num_ears
print ear_count(4)
