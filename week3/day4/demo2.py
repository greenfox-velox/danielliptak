def search_palindromes(in_put):
  palindrome_list = []
  length = 3
  while length < len(in_put)-1:
    for i in range(len(in_put)-length+1):
      end = i + length
      word_size = in_put[i:end]
      if word_size == word_size[::-1]:
        palindrome_list.append(word_size)
    length += 1
  return palindrome_list

output = search_palindromes('dog goat dad duck doodle never')
print(output)
