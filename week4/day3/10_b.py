
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
  for piece in range(20,0,-1):
    startx = (width/2) - (x/2) + piece
    starty = (height/2) - (x/2) + piece
    endx = (width/2) + (x/2) + piece
    endy = (height/2) + (x/2) + piece
    square = canvas.create_rectangle(startx, starty, endx, endy, fill='lime green')

draw_line(100)

root.mainloop()
