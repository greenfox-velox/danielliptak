from tkinter import *
from tiles import *

class Board(object):
    def __init__(self, canvas, wall_pic, floor_pic):
        self.size = 72
        self.wall_pic = wall_pic
        self.floor_pic = floor_pic
        self.canvas = canvas
        self.create_board()
        self.draw_board()
    def create_board(self):
        self.board_lista = list()
        self.table =[[0,0,1,0,0,0,0,0,0,0],
                [0,0,1,0,0,1,1,1,0,1],
                [0,1,0,0,0,1,1,1,0,1],
                [0,1,0,0,0,1,0,0,0,1],
                [0,1,1,1,1,1,0,1,0,1],
                [0,0,0,0,0,0,0,1,0,1],
                [0,1,1,1,1,1,1,1,0,1],
                [0,1,0,0,0,1,1,1,0,1],
                [0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,1,0,1]]
        for y in range(10):
            row = list()
            for x in range(10):
                if self.table[y][x] == 0:
                    row.append(Floor(x, y, self.canvas, self.floor_pic))
                elif self.table[y][x] == 1:
                    row.append(Wall(x, y, self.canvas, self.wall_pic))
            self.board_lista.append(row)

    def draw_board(self):
        for row in self.board_lista:
            for tile in row:
                tile.draw()

    def get_accessable(self, y, x):
        return self.table[y][x]
