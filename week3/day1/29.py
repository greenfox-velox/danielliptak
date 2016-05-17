ab = 123
credits = 100
is_bonus = False
if credits >= 50 and is_bonus == False:
    ab -= 2
elif credits < 50 and is_bonus == False:
    ab -= 1
elif is_bonus == True:
    pass
print (ab)
