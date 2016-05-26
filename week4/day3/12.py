# create a 300x300 canvas.
# fill it with a checkerboard pattern.
from Tkinter import *
root = Tk()
width = 300
height = 300
canvas = Canvas(root, width = width, height = height)
canvas.pack()
num = 0
startx = 0
starty = 0
endy = 20
endx = startx + 20

def line_maker():
  endx = startx + 20
  while endx <= width:
    line = canvas.create_rectangle(startx, starty, endx, endy)
    row_maker(line)
    startx == endx
    endx += 20
    print(line)

def row_maker(line):
  endy = 20
  while endy <= height:
    line = canvas.create_rectangle(startx, starty, endx, endy)
    starty == endy
    endy += 20
    print(line)


line_maker()
root.mainloop()
