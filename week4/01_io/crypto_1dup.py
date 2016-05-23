# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file_name):
    txt = open('texts/duplicated_chars.txt')
    raw_text = txt.read()
    my_text = ''
    for letter in range(len(raw_text)):
        if raw_text[letter] == '\n':
            my_text += raw_text[letter]
        elif letter % 2 == 0:
            my_text += raw_text[letter]

    return my_text
