def anagramm(first, second):
  if not type(first) is str or not type(second) is str:
    return False
  elif sorted(first_spelling(first)) == sorted(second_spelling(second)):
    return True
  else:
    return False

def first_spelling(first):
  list_of_first = []
  for letter in first:
    list_of_first.append(letter)
  return list_of_first

def second_spelling(second):
  list_of_second = []
  for letter in second:
    list_of_second.append(letter)
  return list_of_second

def count_letters(sentence):
  if not type(sentence) is str:
    return False
  else:
    d = dict()
    n = 1
    for i in sentence:
      if i in d:
        d[i] += 1
      else:
        d.update({i:n})
    return d
