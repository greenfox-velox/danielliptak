import sys
import csv

def read_menu():
    with open('menu.txt') as menu:
        return menu.read()
def done_or_todo():
    temp_csv = read_csv()
    done_sign_list = list()
    for element in temp_csv:
        if str(element[0]) == 'x':
            done_sign_list.append('[X]')
        else:
            done_sign_list.append('[ ]')
    return done_sign_list

def show_csv():
    result = read_csv()
    done_sign_list = done_or_todo()
    bullet_list = list()
    for index in range(1, len(result)+1):
        bullet_list.append(index)
    for index2 in range(len(bullet_list)):
        result[index2] = str(index2+1) + ' - ' + done_sign_list[index2] + ' ' + result[index2][1] + '\n'
    new_result = ''.join(result)
    return new_result

def remove_task():
    temp_csv = read_csv()
    del temp_csv[int(sys.argv[2])-1]
    with open('todo.csv', 'w') as csvfile:
        writeable_csv = csv.writer(csvfile, delimiter=';')
        for i in range(len(temp_csv)):
            writeable_csv.writerow(temp_csv[i])

def read_csv():
    temp_csv = []
    with open('todo.csv', 'r') as csvfile:
        readCSV = csv.reader(csvfile, delimiter=';')
        for row in readCSV:
            temp_csv.append(row)
        return temp_csv

def add_task():
    with open('todo.csv', 'a') as csvfile:
        writeable_csv = csv.writer(csvfile, delimiter=';')
        writeable_csv.writerow(['', sys.argv[2]])

def marker():
    temp_csv = read_csv()
    temp_csv[int(sys.argv[2])-1][0] = 'x'
    with open('todo.csv', 'w') as csvfile:
        writeable_csv = csv.writer(csvfile, delimiter=';')
        for i in range(len(temp_csv)):
            writeable_csv.writerow(temp_csv[i])

def list_orders():
    if len(read_csv()) > 0:
        return show_csv()
    else:
        return 'No todos for today! :)'

def marking_orders():
    try:
        if int(sys.argv[2]) <= len(read_csv()):
            marker()
        elif int(sys.argv[2]) > len(read_csv()):
            return 'Unable to remove: Index is out of bound'
        else:
            return 'Unsupported argument'
    except ValueError:
        return 'Unable to check: Index is not a number'
    except IndexError:
        return 'Unable to check: No index is provided'

def remove_orders():
    try:
        if int(sys.argv[2]) <= len(read_csv()):
            remove_task()
        elif int(sys.argv[2]) > len(read_csv()):
            return 'Unable to remove: Index is out of bound'
        else:
            return 'Unsupported argument'
    except ValueError:
        return 'Unable to remove: Index is not a number'
    except IndexError:
        return 'Unable to remove: No index is provided'
