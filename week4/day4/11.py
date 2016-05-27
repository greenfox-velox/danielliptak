from tkinter import *
root = Tk()
width = 900
height = 900
canvas = Canvas(root, width = width, height = height)
canvas.pack()

def draw_fractal(x, y, size):
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
    draw_fractal(x-2*(size/3), y+size, size/3 )




draw_fractal(300, 0, 300)
root.mainloop()
