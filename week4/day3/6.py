# create a 300x300 canvas.
# draw a green 10x10 square to its center.
from Tkinter import *
root = Tk()
width = 300
height = 300
canvas = Canvas(root, width=width, height=height)
startx = (width/2)-5
starty = (height/2)-5
endx = (height/2)+5
endy = (height/2)+5
rectangle = canvas.create_rectangle(startx, starty, endx, endy, fill='lime green')
canvas.pack()
root.mainloop()
