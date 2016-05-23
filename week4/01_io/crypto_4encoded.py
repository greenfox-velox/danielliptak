# Create a method that decrypts texts/encoded_zen_lines.txt
def decrypts(file_name):
  txt = open('texts/encoded_zen_lines.txt')
  raw_text = txt.read()
  my_text = ''
  translate = []
  for letter in raw_text:
    if not letter == ' ' or '\n':
      translate.append(ord(letter)-1)
    else:
      translate.append(ord(letter)
decrypts('texts/encoded_zen_lines.txt')
