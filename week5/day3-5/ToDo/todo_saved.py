import sys
from methods import *
from csv import *

def swich():
    try:
        txt = read_file('todo.csv')
        order_list = ['-l', '-a', '-r']
        if len(sys.argv) == 1:
            print(menu('menu.txt'))
        elif sys.argv[1] in order_list:
            if sys.argv[1] == '-l':
                print(list_orders())
            elif sys.argv[1] == '-a':
                add_new_task()
            elif sys.argv[1] == '-r':
                print(remove_orders())

        elif len(txt) == 0:
            print('No todos for today! :)')
        else:
            print('Unsupported argument')
    except FileNotFoundError:
        open('todo.csv', 'a')
swich()
