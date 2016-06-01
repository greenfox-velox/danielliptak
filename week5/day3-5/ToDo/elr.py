
def swich():
    txt = read_file('main_list.txt')
    if len(txt) == 0:
        print('No todos for today! :)')
    elif len(sys.argv) == 1:
        print(menu('todo.txt'))
    else:
        print(print_main_list('main_list.txt'))
