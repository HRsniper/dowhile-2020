import time
# pip install opencv-python
import cv2
# pip install ahk
from ahk import AHK
# pip install python_imagesearch
from python_imagesearch.imagesearch import imagesearch


def busca_por_imagem(name_img):
    # pos[0]=x pos[1]=y
    pos = imagesearch(f"./data/{name_img}.JPG")
    # print(pos)
    img = cv2.imread(f"./data/{name_img}.JPG")
    # height,width,channels
    size = img.shape
    # print(size)
    if pos[0] != -1:
        ahk = AHK(executable_path='./ahk_folder/AutoHotkeyA32.exe')
        ahk.mouse_move(x=pos[0] + (size[1]/2), y=pos[1] + (size[0]/2))
        ahk.click(direction='down')
        time.sleep(0.008)
        ahk.click(direction='up')
    else:
        busca_por_imagem(name_img)


def click_cord(cord):
    ahk = AHK(executable_path='./ahk_folder/AutoHotkeyA32.exe')
    ahk.mouse_move(x=cord[0], y=cord[1])
    ahk.click(direction='down')
    time.sleep(0.008)
    ahk.click(direction='up')


def send_input(texto):
    ahk = AHK(executable_path='./ahk_folder/AutoHotkeyA32.exe')
    ahk.send_input(texto)
    ahk.key_down('Enter')
    time.sleep(0.008)
    ahk.Key_up('Enter')