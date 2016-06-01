# write a function that takes a filename and returns the number of lines the
# file consists. It should return zero if the file not exists

def divide_ten(filename):
    try:
        my_file = open(filename)
        line_number = len(my_file.readline())
        my_file.close()
        print(line_number)
    except:
        print(0)

divide_ten('reversed_zen_order.txt')
