# def greet(ae):
#     print ("Greetings,", ae)
# greet ("Joszi")


ae = "Joszi"
def greet(name):
    return "hello, " + name

print(greet(ae))

def test(expected, actual):
    if expected == actual:
        print("check")
    else:
        print("JAJ")
