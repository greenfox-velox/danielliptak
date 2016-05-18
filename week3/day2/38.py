numbers = [7, 5, 8, -1, 2]

def find_minimum(input):
    minimum = input[0]
    for item in input:
        if item < minimum:
            minimum = item
    return minimum
print(find_minimum(numbers))
