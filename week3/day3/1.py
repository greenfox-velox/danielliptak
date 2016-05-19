# Create a `Circle` class that takes it's radius as cinstructor parameter
# It should have a `get_circumference` method that returns it's circumference
# It should have a `get_area` method that returns it's area

class Circle():
    pi = 3.1415
    def __init__(self, radius):
        self.radius = radius
    def get_circumference(self):
        return self.radius * 2 * 3.1415
    def get_area(self):
        return self.radius ** 2 * 3.1415

ring = Circle(2)
print (ring.get_circumference())
