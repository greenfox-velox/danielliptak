from tkinter import *
from board import *
from tiles import *
from Character import *


def main():
    root = Tk()
    width = 800
    height = 800
    canvas = Canvas(root, width = width, height = height)
    canvas.pack()
    floor = PhotoImage(file='floor.png')
    wall = PhotoImage(file='wall.png')
    hero_down = PhotoImage(file='hero-down.png')
    hero_up = PhotoImage(file='hero-up.png')
    hero_right = PhotoImage(file='hero-right.png')
    hero_left = PhotoImage(file='hero-left.png')
    skeleton = PhotoImage(file='skeleton.png')

    level = Board(canvas, wall, floor)
    Aladin = Hero(0,0, canvas, level, hero_down, hero_up, hero_right, hero_left)
    skeleton = Skeleton(3, 5, canvas, level, skeleton)

    def deal(key):
        level.draw_board()
        Aladin.move_rout(key)
        skeleton.draw_character()

    root.bind('<Key>', deal)

    root.mainloop()

main()
