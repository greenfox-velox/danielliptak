# Create a method that decrypts texts/encoded_zen_lines.txt
def decrypt(file_name):
  txt = open('texts/encoded_zen_lines.txt')
  raw_text = txt.read()
  my_text = ''
  translate = []
  for letter in raw_text:
    if letter == ' ':
      translate.append(ord(letter))
    elif letter == '\n':
      translate.append(ord(letter))
    else:
      translate.append(ord(letter)-1)
  for num in translate:
    my_text += chr(num)
  txt.close()
  return (my_text)
