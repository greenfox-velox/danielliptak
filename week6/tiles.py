from tkinter import *
from board import *

class Wall(object):
    def __init__(self, x, y, canvas, pic):
        self.x = x
        self.y = y
        self.canvas = canvas
        self.pic = pic
    def draw(self):
        self.canvas.create_image(self.x * 72, self.y * 72, anchor=NW, image=self.pic)

class Floor(object):
    def __init__(self, x, y, canvas, pic):
        self.x = x
        self.y = y
        self.canvas = canvas
        self.pic = pic
    def draw(self):
        self.canvas.create_image(self.x * 72, self.y * 72, anchor=NW, image=self.pic)
