# def create_palindrome(input):
#     palindrome = input + input[::-1]
#     return palindrome
#
# output = create_palindrome('pear')
# print(output)

def create_palindrome(in_put):
  for i in range(len(in_put)-1, -1, -1):
      in_put += in_put[i]
  return in_put

output = create_palindrome('pear')
print(output)
