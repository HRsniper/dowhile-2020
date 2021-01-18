import re
import time
# pip install opencv-python
import cv2
# pip install numpy
import numpy as np
#  pip install pyautogui
import pyautogui
# pip install pytesseract
import pytesseract
# pip install ahk
from ahk import AHK

from functions_mu import busca_por_imagem

#               [ 1 x 2 x 3 x 4 ]
def cortar_e_ocr(area):
    screenshot = pyautogui.screenshot(region=(area))
    template = cv2.cvtColor(np.array(screenshot), cv2.COLOR_BGR2GRAY)
    pytesseract.pytesseract.tesseract_cmd = r'.\Tesseract-OCR\tesseract'
    tes_conf = '--psm 6 outputbase digits'
    # retorna strings com os numeros
    return (pytesseract.image_to_string(template, lang='por', config=tes_conf))


def uppar():
    ahk = AHK(executable_path='./ahk_folder/AutoHotkeyA32.exe')
    while True:
        #                       recorte do level do char
        if re.sub('[^0-9]', '', cortar_e_ocr((930, 200, 50, 20))) != '600':
            #              botão principal de skill
            ahk.mouse_move(1828, 791)
            ahk.click(direction='down')
        else:
            ahk.click(direction='up')
            break


def resetar():
    #                             recortar capacha de reset de level
    for i in re.sub('[^0-9]', '', cortar_e_ocr((1350, 380, 50, 20))):
        busca_por_imagem(i)
    ahk = AHK(executable_path='./ahk_folder/AutoHotkeyA32.exe')
    #              botão ok
    ahk.mouse_move(x=1149, y=649)
    ahk.click(direction='down')
    time.sleep(0.008)
    ahk.click(direction='up')
