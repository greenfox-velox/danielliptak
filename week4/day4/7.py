# 7. Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.


def change_lowerx(string):
  n = 0
  if n > len(string)-1:
    return ''
  elif string[n] == 'x':
    return 'y' + change_lowerx(string[n + 1:len(string)])
  else:
    return string[n] + change_lowerx(string[n + 1:len(string)])

print (change_lowerx('xXXXXXxxxxxZZZXCXzxxxXX'))
