def revert(numbers):
    reverse = []
    for i in range(len(numbers)-1, -1, -1):
        reverse += [numbers[i]]
    return reverse

print(revert([3, 4, 5, 6, 7]))
