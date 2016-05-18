numbers = [3, 4, 5, 6, 7]
# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens

def filter(input):
    even = []
    for number in input:
        if number % 2 == 0:
            even += number
    return even
filter(numbers)
print(even)
