import sys
from methods import *
from csv import *

def switch():
    try:
        order_list = ['-l', '-a', '-r', '-c']
        if len(sys.argv) == 1:
            print(read_menu())
        elif sys.argv[1] in order_list:
            return what_next(sys.argv)
        else:
            print('Unsupported argument')
    except FileNotFoundError:
        open('todo.csv', 'a')

def what_next(command_order):
    if command_order[1] == '-l':
        print(list_orders())
    elif command_order[1] == '-a':
        print(add_task(command_order))
    elif command_order[1] == '-r':
        print(remove_orders(command_order))
    elif command_order[1] == '-c':
        print(marking_orders(command_order))

switch()
