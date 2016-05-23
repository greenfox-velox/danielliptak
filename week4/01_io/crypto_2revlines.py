# Create a method that decrypts texts/reversed_zen_lines.txt
def decrypt(file_name):
    txt = open('texts/reversed_zen_lines.txt')
    raw_text = txt.readlines()
    my_text = ''
    for line in raw_text:
        my_text += line[-2::-1] + '\n'
    txt.close()
    return my_text
