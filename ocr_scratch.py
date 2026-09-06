import cv2
import pytesseract
from PIL import Image

# Use pytesseract to get text bounding boxes
try:
    img = cv2.imread('scratch_sprite.png')
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY_INV)

    d = pytesseract.image_to_data(thresh, output_type=pytesseract.Output.DICT)
    n_boxes = len(d['text'])
    for i in range(n_boxes):
        if int(d['conf'][i]) > 50:
            if d['text'][i].strip():
                print(f"Found: {d['text'][i]} at (x={d['left'][i]}, y={d['top'][i]}, w={d['width'][i]}, h={d['height'][i]})")
except Exception as e:
    print(f"OCR Error: {e}")
