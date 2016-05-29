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
    create_rectangle_fractal(x+1.5*(size/4), y+s/4, s/4)

def draw_rectangle_fractal(x, y, size):
  canvas.create_rectangle(x, y, x+size, y+size)
  canvas.create_rectangle(x+size, y+size, x+2*size, y+2*size)
  canvas.create_rectangle(x-size, y+size, x, y+2*size)
  canvas.create_rectangle(x, y+2*size, x+size, y+3*size)

  if size < 7:
    pass
  else:
    draw_fractal(x+(size/3), y, size/3)
    draw_fractal(x+size+size/3, y+size, size/3)
    draw_fractal(x+(size/3), y+2*size, size/3)
    draw_fractal(x-2*(size/3), y+size, size/3)

create_fractal(10, 10, 600)
root.mainloop()
