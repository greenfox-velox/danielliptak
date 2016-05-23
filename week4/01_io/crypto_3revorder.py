# Create a method that decrypts texts/reversed_zen_order.txt
def decrypt(file_name):
  txt = open('texts/reversed_zen_order.txt')
  raw_text = reversed(txt.readlines())
  my_text = ''
  for line in raw_text:
    my_text += line
  txt.close()

  return my_text
