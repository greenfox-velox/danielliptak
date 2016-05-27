# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from tkinter import *
root = Tk()
width = 300
height = 300
canvas = Canvas(root, width=width, height=height)
canvas.pack()

def draw_line(x):
  startx = (width/2) - (x/2)
  starty = (height/2) - (x/2)
  endx = (width/2) + (x/2)
  endy = (height/2) + (x/2)
  return canvas.create_rectangle(startx, starty, endx, endy, fill='lime green')

draw_line(100)
draw_line(50)
draw_line(20)


root.mainloop()
