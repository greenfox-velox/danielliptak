# create a 300x300 canvas.
# fill it with a checkerboard pattern.
from tkinter import *
root = Tk()
width = 300
height = 300
canvas = Canvas(root, width = width, height = height)
canvas.pack()

def square_maker(x, y, colour):
  line = canvas.create_rectangle(x, y, x+25, y+25, fill=colour)

def line_maker(x, y, colour):
  while x <= width:
    if not y%2 == 0 and x%2 == 0:
      square_maker(x, y, 'black')
      x += 25
    elif y % 2 == 0 and not x%2 == 0:
      square_maker(x, y, 'black')
      x += 25
    else:
      square_maker(x, y, colour)
      x += 25

def row_maker(x, y, colour):
  while y <= height:
    if y % 2 == 0:
      line_maker(x, y, colour)
      y += 25
    else:
      line_maker(x, y, colour)
      y += 25

row_maker(0, 0, 'white')
root.mainloop()
