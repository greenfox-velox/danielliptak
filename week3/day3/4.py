# Create a student Class
# that has a method `add_grade`, that takes a grade from 1 to 5
# an other method `get_average`, that returns the average of the
# gradesn

class student():
    def __init__ (self):
        self.gradelist = []
    def add_grade(self, grade):
        self.gradelist += [grade]
    def get_average(self):
        summacska = 0.0
        for number in self.gradelist:
            summacska += number
        return summacska / len(self.gradelist)

pityu = student()
pityu.add_grade(3)
print(pityu.get_average())
pityu.add_grade(4)
print(pityu.get_average())
pityu.add_grade(6)
print(pityu.get_average())
