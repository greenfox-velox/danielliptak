# create a 300x300 canvas.
# fill it with a checkerboard pattern.
from Tkinter import *
root = Tk()
width = 300
height = 300
canvas = Canvas(root, width = width, height = height)
canvas.pack()


def line_maker():
  num = 0
  start = 0
  end = 20
  while num < width:
    line = canvas.create_rectangle(start, start, end, end)
    start += num
    end += num
    print(line)
    num += 20

line_maker()
root.mainloop()
