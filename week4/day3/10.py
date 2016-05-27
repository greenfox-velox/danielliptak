
# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# create a loop that draws 20 squares with that function.

from tkinter import *
root = Tk()
width = 300
height = 300
canvas = Canvas(root, width=width, height=height)
canvas.pack()

def draw_line(x):
  for piece in range(60,-1, -3):
    size = ((x + piece) / 2)
    startx = (width/2) - size
    starty = (height/2) - size
    endx = (width/2) + size
    endy = (height/2) + size
    print (canvas.create_rectangle(startx, starty, endx, endy, fill='green'))

draw_line(100)
root.mainloop()
