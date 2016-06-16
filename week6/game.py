from tkinter import *
from board import *
from tiles import *
from Character import *
from random import randint

class Game():
    def __init__(self, canvas):
        self.floor = PhotoImage(file='floor.png')
        self.wall = PhotoImage(file='wall.png')
        self.hero_down = PhotoImage(file='hero-down.png')
        self.hero_up = PhotoImage(file='hero-up.png')
        self.hero_right = PhotoImage(file='hero-right.png')
        self.hero_left = PhotoImage(file='hero-left.png')
        self.skeleton = PhotoImage(file='skeleton.png')
        self.boss = PhotoImage(file='boss.png')
        self.canvas = canvas
        self.map1 = [[0,0,1,0,0,0,0,0,0,0],
                [0,0,1,0,0,1,1,1,0,1],
                [0,1,0,0,0,1,1,1,0,1],
                [0,1,0,0,0,1,0,0,0,1],
                [0,1,1,1,1,1,0,1,0,1],
                [0,0,0,0,0,0,0,1,0,1],
                [0,1,1,1,1,1,1,1,0,1],
                [0,1,0,0,0,1,1,1,0,1],
                [0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,1,0,1]]
        self.level = Board(self.canvas, self.map1, self.wall, self.floor)
        self.Aladin = Hero(self.canvas, self.hero_down)
        self.skeleton1_id = self.random_gen()
        self.skeleton1 = Skeleton(self.skeleton1_id[1], self.skeleton1_id[0], self.canvas,100, 40, 60, self.skeleton)
        self.skeleton2_id = self.random_gen()
        self.skeleton2 = Skeleton(self.skeleton2_id[1], self.skeleton2_id[0], self.canvas,100, 40, 60, self.skeleton)
        self.skeleton3_id = self.random_gen()
        self.skeleton3 = Skeleton(self.skeleton3_id[1], self.skeleton3_id[0], self.canvas,100, 40, 60, self.skeleton)
        self.boss_id = self.random_gen()
        self.bigboss = Boss(self.boss_id[1], self.boss_id[0], self.canvas,100, 40, 60, self.boss)
        self.status = self.Aladin.__str__()
        self.draw_status_bar()

    def random_gen(self):
        b = randint(0,9)
        a = randint(0,9)
        if self.level.get_accessable(a, b) == True:
            return (a, b)
        return self.random_gen()

    def re_draw(self, key):
        self.level.draw_board()
        self.skeleton1.draw_character(self.skeleton)
        self.skeleton2.draw_character(self.skeleton)
        self.skeleton3.draw_character(self.skeleton)
        self.bigboss.draw_character(self.boss)
        self.move_hero(key)
        self.check_position()

    def move_hero(self, key):
        if key.keysym == 'Down':
            if self.level.get_accessable(self.Aladin.y + 1, self.Aladin.x):
                self.Aladin.move_char('down', self.hero_down)
            else:
                self.Aladin.draw_character(self.hero_down)

        elif key.keysym == 'Up':
            if self.level.get_accessable(self.Aladin.y - 1, self.Aladin.x):
                self.Aladin.move_char('up', self.hero_up)
            else:
                self.Aladin.draw_character(self.hero_up)

        elif key.keysym == 'Right':
            if self.level.get_accessable(self.Aladin.y, self.Aladin.x + 1):
                self.Aladin.move_char('right', self.hero_right)
            else:
                self.Aladin.draw_character(self.hero_right)

        elif key.keysym == 'Left':
            if self.level.get_accessable(self.Aladin.y, self.Aladin.x - 1) == True:
                self.Aladin.move_char('left', self.hero_left)
            else:
                self.Aladin.draw_character(self.hero_left)

    def check_position(self):
        if self.bigboss.x == self.Aladin.x and self.bigboss.y == self.Aladin.y:
            pass

    def draw_status_bar(self):
        self.canvas.delete("status")
        self.canvas.create_text(60, 723, text= self.status, justify=RIGHT, tags="status", anchor=NW, font='arial')
