from tkinter import *

root = Tk()
canvas = Canvas(root, width='300', height='300')
canvas.pack()

line1 = canvas.create_line(50, 50, 100, 50, fill='lime green')
line2 = canvas.create_line(100, 50, 100, 100, fill='red')
line3 = canvas.create_line(100, 100, 50, 100, fill='black')
line4 = canvas.create_line(50, 100, 50, 50, fill='yellow')

root.mainloop()
