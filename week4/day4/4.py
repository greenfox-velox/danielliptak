
# 4. Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared)

def powerN(base, index):
  if base < 0 or index < 1:
    return 1
  else:
    result = base * powerN(base, index-1)
    return result

print(powerN(4, 2))
