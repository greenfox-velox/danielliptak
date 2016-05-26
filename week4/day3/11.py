
# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

from Tkinter import *
root = Tk()
width = 300
height = 300
canvas = Canvas(root, width = width, height = height)
canvas.pack()

def draw_square(x, colour):
  size = x / 2
  startx = (width / 2) - size
  starty = (height / 2) - size
  endx = (width / 2) + size
  endy = (height / 2) + size
  rainbow = ['Orange','Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
  n = 5
  for piece in range(150, -0, -30):
    size = (x + piece) / 2
    print (canvas.create_rectangle(startx - size, starty - size, endx + size, endy + size, fill=rainbow[n] ))
    n -= 1
  print (canvas.create_rectangle(startx, starty, endx, endy, fill = colour))

draw_square(50, 'red')
root.mainloop()
