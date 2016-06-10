from tkinter import *
from game import *
# from pygame import *

def main():
    root = Tk()
    width = 800
    height = 800
    canvas = Canvas(root, width = width, height = height)
    canvas.pack()

    game1 = Game(canvas)
    # d = pygame.mixer.Sound('Morse.mp3')
    # f = pygame.mixer.music.load('Morse.mp3')
    #
    # pygame.mixer.sound.play(d)
    # pygame.mixer.sound.play(f)

    root.bind('<Key>', game1.re_draw)
    root.mainloop()

main()
