# Create a `Stack` class that stores elements
# It should have a `size` method that returns number of elements it has
# It should have a `push` method that adds an element to the stack
# It should have a `pop` method that returns the last element form the stack and also deletes it from it

# please don`t use the built in methods
class Stack():
    def __init__(self, list):
        self.list = list
    def size(self):

    def push(self, extra):
        self.list += [extra]
        return self.list
    def pop(self):
        pass


list = [1, 3, 4, 5, 2, 8]
Elements = stack(list)
print(Elements.push(2))
