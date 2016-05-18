# def sum(numbers):
#     i = 0
#     summa = 0
#     while i < len(numbers):
#         summa += numbers[i]
#         i += 1
#     print(summa)
#
# sum ([4, 5, 6, 7, 8, 9, 10,])

numbers = [4, 5, 6, 7, 8, 9, 10,]

def summacska(input):
    total = 0
    for num in input:
        total += num
    return total

print(summacska(numbers))
