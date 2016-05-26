# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

from Tkinter import *
root = Tk()
root.title('3 50 long lines')
width = 300
height = 300
canvas = Canvas(root, width=width, height=height)
canvas.pack()


def draw_line(x,y):
  return canvas.create_line(x, y, x+50, y, fill='blue')

draw_line(10, 20)
draw_line(250, 250)
draw_line(80, 50)
root.mainloop()
