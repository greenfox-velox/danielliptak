def counter(input):
    fakt = 1
    for i in range(input, 1, -1):
        fakt *= i
    return fakt

print(counter(5))
