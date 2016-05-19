# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise


# WRONG!!!!!!!!!!!!!!!!
# class pirate():
#     pirate = 0
#     def drink_rum():
#         pirate += 1
#         if pirate >= 5:
#             def hows_goin_mate():
#             return 'Arrrrrrr!'
#         else
#             def hows_goin_mate():
#
# Captain = pirate()

class pirate():
    def __init__(self):
        self.rum = 0
    def drink_rum(self):
        self.rum += 1
    def hows_goin_mate(self):
        if self.rum >= 5:
            return "Arrrrr!"
        else:
            return "Nothin"

C = pirate()
C.drink_rum()
C.drink_rum()
C.drink_rum()
C.drink_rum()
C.drink_rum()
print(C.hows_goin_mate())
