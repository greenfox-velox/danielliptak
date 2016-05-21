
# Create a new class called `Person` that has a first_name and a last_name (takes it in it's constructor)
# It should have a `greet` method that prints it's full name

# Create a `Student` class that is the child class of `Person`
# it should have a method to add grades
# it should have a `salute` method that prints it's full name and the average of it's grades as well

class Person:
    def __init__(self, first_name, last_name):
        self.f_n = first_name
        self.l_n = last_name
    def greet(self):
        print('Hi I am:'+ self.f_n + ' ' + self.l_n)

class Student(Person):
    def __init__(self, first_name, last_name):
        self.f_n = first_name
        self.l_n = last_name
        self.grades = []
    def add_grade(self, new_grade):
        self.grades.append(new_grade)
    def salute(self):
        summa = 0
        for grade in self.grades:
            summa += grade
        print(summa/len(self.grades))


adorjan = Student('Adorjan', 'Cseh-Szombathely')
adorjan.add_greet(1)
adorjan.salute()


# class Person:
#     def __init__(self, first_name, last_name):
#         self.f_n = first_name
#         self.l_n = last_name
#     def greet(self):
#         print('Hi I am:'+ self.f_n + ' ' + self.l_n)
#
# class Student(Person):
#     def __init__(self, first_name, last_name):
#         super().__init__(first_name, last_name)
#         self.grades = []
#     def add_grade(self, new_grade):
#         self.grades.append(new_grade)
#     def salute(self):
#         summa = 0
#         for grade in self.grades:
#             summa += grade
#         print(summa/len(self.grades))
