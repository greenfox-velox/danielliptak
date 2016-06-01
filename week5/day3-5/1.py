
# create a function that takes a number and divides ten with it and prints the result
# it should print "fail" if it is divided by 0
def divide_ten(number):
    try:
        print(10/number)
    except ZeroDivisionError:
        print("Don't use Zero")

divide_ten(int(input('Pick a number:')))
