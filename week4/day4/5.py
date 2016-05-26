# 5. We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies
# recursively (without loops or multiplication).

def ear_count(bunny):
  if bunny <= 0:
    return  0
  else:
    num_ears = ear_count(bunny-1) + 2
    return num_ears
print ear_count(8)
