from tkinter import *
from random import randint

class Character(object):
    def __init__(self, x, y, canvas, max_hp, DP, SP, level):
        self.y = y
        self.x = x
        self.canvas = canvas
        self.max_hp = max_hp
        self.dp = DP
        self.sp = SP
        self.level = 1
        print (self.level)
    def draw_character(self, pic):
        self.canvas.create_image(self.x * 72, self.y * 72, anchor=NW, image=pic)
    def attak(self, enemy):
        enemy.current_hp -= self.sp


class Hero(Character):
    def __init__(self, canvas, level, pic):
        x = 0
        y = 0
        DP = 60
        SP = 40
        max_hp = 100
        super().__init__(x, y, canvas, max_hp, DP, SP, level)
        self.draw_character(pic)
        self.current_hp = self.max_hp

    def move_char(self, direction, pic):
        if direction == 'down':
            self.y += 1
            self.draw_character(pic)
        elif direction == 'up':
            self.y -= 1
            self.draw_character(pic)
        elif direction == 'right':
            self.x += 1
            self.draw_character(pic)
        elif direction == 'left':
            self.x -= 1
            self.draw_character(pic)

    def __str__(self):
        return 'Hero     (Level{})     HP: {}/{} |   DP:{}   |   SP: {}'.format(self.level, self.max_hp, self.current_hp, self.dp, self.sp)

class Skeleton(Character):
    def __init__(self,x ,y, canvas, max_hp, DP, SP, level, skeleton):
        super().__init__(x, y, canvas, max_hp, DP, SP, level)
        self.skeleton = skeleton
        self.draw_character(self.skeleton)
        self.x = x
        self.y = y
        self.current_hp = self.max_hp

    def __str__(self):
        return 'Skeleton     (Level{})     HP: {}/{} |   DP:{}   |   SP: {}'.format(self.level,self.max_hp, self.current_hp, self.dp, self.sp)

class Boss(Character):
    def __init__(self, x, y, canvas, max_hp, DP, SP, level, boss):
        super().__init__(x, y, canvas, max_hp, DP, SP, level)
        self.boss = boss
        self.draw_character(self.boss)
        self.x = x
        self.y = y

    def __str__(self):
        return 'Boss     (Level{})     HP: {}/{} |   DP:{}   |   SP: {}'.format(self.level,self.max_hp, self.current_hp, self.dp, self.sp)
