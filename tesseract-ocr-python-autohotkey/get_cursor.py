#  pip install pywin32
import win32gui

while True:
    print(win32gui.GetCursorInfo()[2])
