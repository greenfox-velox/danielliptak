from tkinter import *
from math import *
root = Tk()
width = 630
height = 630
canvas = Canvas(root, width = width, height = height)
canvas.pack()


def create_triangle(x, y, size):
  canvas.create_polygon([x, y, x+size, y, x+size/2, y+(sqrt(3)/2)*size], fill='yellow', outline='black')

def create_fractal(x, y, size):
  if size < 10:
    pass
  else:
    create_triangle(x, y, size)
    create_fractal(x+size/2, y, size/2)
    create_fractal(x, y, size/2)
    create_fractal(x+size/4, y+(sqrt(3)/2)*size/2, size/2)

create_fractal(10, 10, 600)
root.mainloop()
