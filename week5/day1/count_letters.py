def count_letters(sentence):
  d = dict()
  n = 1
  for i in sentence:
    if i in d:
      d[i] += 1
    else:
      d.update({i:n})
  return d

print (count_letters('i want dddddancee'))
