ac = 8
time = 120
out = ''
if ac % 4 == 0 and time != 200:
    out = "check"
elif time > 200:
    out = "Time out"
else:
    out = "Run Forest Run!"
print (out)


if time > 200:
    out = "Time out"
elif ac % 4 == 0:
    out = "check"
else:
    out = "Run Forest Run!"
