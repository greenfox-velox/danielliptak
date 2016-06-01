# Write a Person class that have a name and a birth_date property
# It should raise an error of the birthdate is less than 0 or more than 2016
class Person:
    def __init__(self, name, birth_date):
        self.name = name
        if birth_date <= 0 or birth_date > 2016:
            raise ValueError('cuysdku')
        else:
            self.birth_date = birth_date

    def get_name_and_birthdate(self):
        return(self.name+str(self.birth_date))

John = Person('John', 152)
print(John.get_name_and_birthdate())
print (John.name)
