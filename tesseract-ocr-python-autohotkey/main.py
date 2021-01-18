import time
import re

from functions_mu import busca_por_imagem, click_cord, send_input
from muocr import cortar_e_ocr, resetar, uppar

busca_por_imagem('vip')
busca_por_imagem('server')
busca_por_imagem('entrar')
click_cord([1530, 822])
time.sleep(5)
send_input('/re off')
send_input('/arena11')
uppar()
resetar()
# if re.sub('[^0-9]', '', cortar_e_ocr((930, 200, 50, 20))) == '600':
#     resetar()
