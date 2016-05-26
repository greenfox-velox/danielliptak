from Tkinter import *

root = Tk()
canvas = Canvas(root, width='300', height='300')
canvas.pack()

line1 = canvas.create_line(0, 0, 300, 300, fill='lime green')
line2 = canvas.create_line(0, 300, 300, 0, fill='lime green')

root.mainloop()
