
# 9. Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def change_lower(string):
  if 0 > len(string)-1:
    return ''
  else:
    return '*' + string[0] + change_lower(string[1:len(string)])

print (change_lower('xXXXXXxxxxxZZZXCXzxxxXX'))
