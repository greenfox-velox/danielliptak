import sys

def swich():
        txt = read_file('main_list.txt')
        if len(txt) == 0:
            print('No todos for today! :)')
        elif len(sys.argv) > 1:
            if sys.argv[1] == '-l':
                print(print_main_list('main_list.txt'))
            elif sys.argv[1] == '-m':
                add_new_task('main_list.txt')
                print(print_main_list('main_list.txt'))
            try:
                if sys.argv[1] == '-r' and int(sys.argv[2]) <= len(read_file('main_list.txt')):
                    remove_task('main_list.txt')
                    print(print_main_list('main_list.txt'))
                else:
                    raise Exception('Unable to remove: Index is out of bound')
            except ValueError:
                print('Unable to remove: Index is not a number')
            except IndexError:
                print('Unable to remove: No index is provided')
            except Exception as Error:
                print('Unable to remove: Index is out of bound')
        else:
            print(menu('todo.txt'))


def menu(file_name):
    options = open(file_name)
    result = options.read()
    options.close()
    return result

def print_main_list(file_name):
    result = read_file(file_name)
    bullet_list = list()
    for index in range(1, len(result)+1):
        bullet_list.append(index)
    for index2 in range(len(bullet_list)):
        result[index2] = str(index2+1) + ' - ' + result[index2]
    new_result = ''.join(result)
    return new_result

def read_file(file_name):
    opener = open(file_name)
    txt = opener.readlines()
    opener.close()
    return txt

def add_new_task(file_name):
    opener = open(file_name, 'a')
    opener.write(str(sys.argv[2]) + '\n')
    opener.close()

def remove_task(file_name):
    opener = open(file_name, 'r')
    txt = opener.readlines()
    opener.close()
    if int(sys.argv[2]) > len(txt):
        del txt[int(sys.argv[2])-1]
    opener = open(file_name, 'w')
    for i in txt:
        opener.write(i)
        opener.close()





swich()
