godiz = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]
# create a function that takes a list of students,
# then returns how many candies are own by students
# under 10

# print (students[1]['name'])

# for student in students:
#     print(student['age'])

def count(input):
    total = []
    for student in input:
        if student['age'] < 10:
            total += [student['candies']]
    return total

print(count(godiz))
