# 8. Given a string, compute recursively a new string where all the 'x' chars have been removed.
def remove_X(string):
  if 0 > len(string)-1:
    return ''
  elif string[0] == 'x' or string[0] == 'X':
    return '' + remove_X(string[1:len(string)])
  else:
    return string[0] + remove_X(string[1:len(string)])

print (remove_X('xXXXXXxxxxxZZZXCXzxxxXX'))
