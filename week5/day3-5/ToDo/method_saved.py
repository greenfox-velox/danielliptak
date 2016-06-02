import sys

def menu(file_name):
    new_result = ''.join(read_file(file_name))
    return new_result

def print_file(file_name):
    result = read_file(file_name)
    bullet_list = list()
    for index in range(1, len(result)+1):
        bullet_list.append(index)
    for index2 in range(len(bullet_list)):
        result[index2] = str(index2+1) + ' - ' + result[index2]
    new_result = ''.join(result)
    return new_result

def read_file(file_name):
    opener = open(file_name, 'r')
    txt = opener.readlines()
    opener.close()
    return txt

def add_new_task():
    opener = open('todo.csv', 'a')
    opener.write(str(sys.argv[2]) + '\n')
    opener.close()

def remove_task(file_name):
    opener = open(file_name, 'r')
    txt = opener.readlines()
    opener.close()
    del txt[int(sys.argv[2])-1]
    opener = open(file_name, 'w')
    for i in txt:
        opener.write(i)
    opener.close()

def remove_orders():
    try:
        if int(sys.argv[2]) <= len(read_file('todo.csv')):
            remove_task('todo.csv')
        elif int(sys.argv[2]) > len(read_file('todo.csv')):
            return 'Unable to remove: Index is out of bound'
        else:
            return 'Unsupported argument'
    except ValueError:
        return 'Unable to remove: Index is not a number'
    except IndexError:
        return 'Unable to remove: No index is provided'

def list_orders():
    if len(read_file('todo.csv')) > 0:
        return print_file('todo.csv')
    else:
        return 'No todos for today! :)'
