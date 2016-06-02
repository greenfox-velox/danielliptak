import sys
from methods import *
from csv import *

def swich():
    try:
        txt = read_csv()
        order_list = ['-l', '-a', '-r', '-c']
        if len(sys.argv) == 1:
            print(read_menu())
        elif sys.argv[1] in order_list:
            if sys.argv[1] == '-l':
                print(list_orders())
            elif sys.argv[1] == '-a':
                add_task()
            elif sys.argv[1] == '-r':
                remove_orders()
            elif sys.argv[1] == '-c':
                print(marking_orders())
        else:
            print('Unsupported argument')
    except FileNotFoundError:
        open('todo.csv', 'a')
swich()
