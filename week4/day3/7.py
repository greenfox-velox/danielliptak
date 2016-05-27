# create a 300x300 canvas.
# fill it with four different size and color rectangles.
from tkinter import *
root = Tk()
width = 300
height = 300
canvas = Canvas(root, width=width, height=height)

def create_rectangle(startx, starty, endx, endy):
  piece = 10
  colour_list = ['yellow', 'red', 'blue', 'black']
  n = 0
  while piece < 50:
    colour = colour_list[n]
    rectangle = canvas.create_rectangle(startx+piece, starty+piece, endx+piece, endy+piece, fill = colour)
    piece += 10
    n += 1

create_rectangle(10, 10, 20, 20)

canvas.pack()
root.mainloop()
