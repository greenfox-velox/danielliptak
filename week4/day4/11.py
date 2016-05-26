from Tkinter import *
root = Tk()
width = 630
height = 630
canvas = Canvas(root, width = width, height = height)
canvas.pack()

def draw_fractal(x, y, size):
  canvas.create_rectangle(x, y-size, x+size, y)
  canvas.create_rectangle(x+size, y, x+2*size, y+y)
  canvas.create_rectangle(x, y+size, x+size, y+size)
  canvas.create_rectangle(x-size, y, x, y+size)
  if size < 7:
    pass
  else:
    draw_fractal(x+(size/3), y-2*(size/3), size/3)
    draw_fractal(2*x+(size/3), y+(size/3), size/3)
    draw_fractal(x+(size/3), 2*y, size/3)


draw_fractal(210, 210, 210)
root.mainloop()


  # canvas.create_rectangle(x, y, x+size, y+size)
  # canvas.create_rectangle()
  # canvas.create_rectangle()
  # canvas.create_rectangle()
