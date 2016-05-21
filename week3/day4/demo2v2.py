def search_palindromes(in_put):
  palindrome_list = []
  length = 3
  end = i + length
  temporary = in_put[i:end]
  while length < len(in_put)-1:
    for i in range(len(in_put)-length+1):
      if temporary == temporary[::-1]:
        palindrome_list.append(temporary)
    length += 1
  return palindrome_list

output = search_palindromes('dog goat dad duck doodle never')
print(output)
