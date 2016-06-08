from tkinter import *
from move import *

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

class Board(object):
    def __init__(self):
        self.size = 72
    def create_board(self):
        self.board_lista = list()
        table =[[0,0,1,0,0,0,0,0,0,0],
                [0,0,1,0,0,1,1,1,0,1],
                [0,1,0,0,0,1,1,1,0,1],
                [0,1,0,0,0,1,0,0,0,1],
                [0,1,1,1,1,1,0,1,0,1],
                [0,0,0,0,0,0,0,1,0,1],
                [0,1,1,1,1,1,1,1,0,1],
                [0,1,0,0,0,1,1,1,0,1],
                [0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,1,0,1]]
        for x in range(10):
            row = list()
            for y in range(10):
                if table[x][y] == 0:
                    row.append(Floor(x, y))
                elif table[x][y] == 1:
                    row.append(Wall(x, y))
            self.board_lista.append(row)

    def draw_board(self, x, y, pic):
        for row in self.board_lista:
            for tile in row:
                tile.draw()
                Character().draw_character(x, y, pic)

    def get_tile_accessible(self):
         for row in self.board_lista:
             for tile in row:
                 return tile.accessible()

class Character(object):
    def __init__(self):
        pass
    def draw_character(self, x, y, pic):
        canvas.create_image(x * 72, y * 72, anchor=NW, image=pic)

class Wall(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.canvas = canvas
    def draw(self):
        self.canvas.create_image(self.x * 72, self.y * 72, anchor=NW, image=wall)
    def accessible(self):
        return False

class Floor(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.canvas = canvas
    def draw(self):
        self.canvas.create_image(self.x * 72, self.y * 72, anchor=NW, image=floor)
    def accessible(self):
        return True

class Hero(Character):
    def __init__(self):
        self.y = 0
        self.x = 0
    def downKey(self, event):
        self.y += 1
        level1.draw_board(self.x,self.y,hero_down)
        print(level1.get_tile_accessible(self.x,self.y))
    def upKey(self, event):
        self.y -= 1
        level1.draw_board(self.x,self.y,hero_up)
        print(level1.get_tile_accessible(self.x,self.y))
    def rightKey(self, event):
        self.x += 1
        level1.draw_board(self.x,self.y,hero_right)
        print(level1.get_tile_accessible(self.x,self.y))
    def leftKey(self, event):
        self.x -= 1
        level1.draw_board(self.x,self.y,hero_left)
        print(level1.get_tile_accessible(self.x,self.y))

level1 = Board()
level1.create_board()
level1.draw_board(0,0,hero_down)
print(level1.get_tile_accessible())
Aladin = Hero()



root.bind('<Left>', Aladin.leftKey)
root.bind('<Right>', Aladin.rightKey)
root.bind('<Up>', Aladin.upKey)
root.bind('<Down>', Aladin.downKey)

root.mainloop()
