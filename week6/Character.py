from tkinter import *

class Character(object):
    def __init__(self, x, y, canvas, level):
        self.y = y
        self.x = x
        self.canvas = canvas
        self.level = level
    def draw_character(self, pic):
        self.canvas.create_image(self.x * 72, self.y * 72, anchor=NW, image=pic)

class Hero(Character):
    def __init__(self, x, y, canvas, level, hero_down, hero_up, hero_right, hero_left):
        super().__init__(x, y, canvas, level)
        self.hero_down = hero_down
        self.hero_up = hero_up
        self.hero_right = hero_right
        self.hero_left = hero_left
        self.draw_character(self.hero_down)

    def move_rout(self, key):
        if key.keysym == "Down":
            if self.level.get_accessable(self.y + 1, self.x) == 1:
                self.draw_character(self.hero_down)
            else:
                self.y += 1
                self.draw_character(self.hero_down)

        elif key.keysym == "Up":
            if self.level.get_accessable(self.y - 1, self.x) == 1:
                self.draw_character(self.hero_up)
            else:
                self.y -= 1
                self.draw_character(self.hero_up)
        elif key.keysym == "Right":
            if self.level.get_accessable(self.y, self.x + 1) == 1:
                self.draw_character(self.hero_right)
            else:
                self.x += 1
                self.draw_character(self.hero_right)

        elif key.keysym == "Left":
            if self.level.get_accessable(self.y, self.x - 1) == 1:
                self.draw_character(self.hero_left)
            else:
                self.x -= 1
                self.draw_character(self.hero_left)

class Skeleton(Character):
    def __init__(self, x, y, canvas, level, skeleton):
        super().__init__(x, y, canvas, level)
        self.skeleton = skeleton
        self.draw_character(self.skeleton)
