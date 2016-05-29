from tkinter import *
from math import *
root = Tk()
width = 700
height = 700
canvas = Canvas(root, width = width, height = height)
canvas.pack()


def create_hexagon(x, y, size):
  canvas.create_polygon([x, y, x+size, y, x+3*size/2, y+(sqrt(3)/2)*size, x+size, y+(sqrt(3)/2)*size*2, x, y+(sqrt(3)/2)*size*2, x-size/2, y+(sqrt(3)/2)*size], fill='yellow', outline='black')

def create_fractal(x, y, size):
  if size < 10:
    pass
  else:
    create_hexagon(x, y, size)
    create_fractal(x, y, size/3)
    create_fractal(x+2*(size/3), y, size/3)
    create_fractal(x+size, y+2*(sqrt(3)/2)*size/3, size/3)
    create_fractal(x-size/3, y+2*(sqrt(3)/2)*size/3, size/3)
    create_fractal(x, y+4*(sqrt(3)/2)*size/3, size/3)
    create_fractal(x+2*(size/3), y+4*(sqrt(3)/2)*size/3, size/3)
    # create_fractal(x+(size/3), y+2*(sqrt(3)/2)*size/3, size/3)


create_fractal(160, 10, 300)
root.mainloop()
