import time
# pip install opencv-python
import cv2
# pip install ahk
from ahk import AHK
# pip install python_imagesearch
from python_imagesearch.imagesearch import imagesearch


def search_for_images(name_img):
    # pos[0]=x pos[1]=y
    pos = imagesearch(f"./data/{name_img}.JPG")
    # print('posicao',pos)
    img = cv2.imread(f"./data/{name_img}.JPG")
    # height,width,channels
    size = img.shape
    # print('size',size)
    if pos[0] != -1:
        ahk = AHK(executable_path='./ahk_folder/AutoHotkeyA32.exe')
        ahk.mouse_move(x=pos[0] + (size[1]/2), y=pos[1] + (size[0]/2))
        ahk.double_click()
        # time.sleep(5)
        # ahk.key_down('Left')
        # ahk.key_up('Left')
        # time.sleep(0.5)
        # ahk.key_down('Enter')
        # ahk.key_up('Enter')
    else:
        search_for_images(name_img)
