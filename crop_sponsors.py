import os
from PIL import Image

def crop_image(image_path, output_dir, start_idx):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    print(f"Processing {image_path}...")
    img = Image.open(image_path).convert("RGB")
    width, height = img.size
    pixels = img.load()

    # Find rows that contain white pixels
    row_has_white = []
    for y in range(height):
        has_white = False
        # Sample every 5th pixel to speed up
        for x in range(0, width, 5):
            r, g, b = pixels[x, y]
            # White boxes usually have RGB near 255. Let's use > 230 to be safe.
            if r > 230 and g > 230 and b > 230:
                has_white = True
                break
        row_has_white.append(has_white)

    # Group into row bands
    row_bands = []
    in_band = False
    start_y = 0
    for y in range(height):
        if row_has_white[y] and not in_band:
            in_band = True
            start_y = y
        elif not row_has_white[y] and in_band:
            in_band = False
            # Filter noise (bands must be at least 30px tall)
            if y - start_y > 30:
                row_bands.append((start_y, y))
    
    # If currently in band at the end of image
    if in_band and height - start_y > 30:
        row_bands.append((start_y, height))

    print(f"Found {len(row_bands)} row bands.")

    count = start_idx
    
    # For each row band, find the column bands
    for ry1, ry2 in row_bands:
        col_has_white = []
        for x in range(width):
            has_white = False
            # Sample every 5th pixel in the y range
            for y in range(ry1, ry2, 5):
                r, g, b = pixels[x, y]
                if r > 230 and g > 230 and b > 230:
                    has_white = True
                    break
            col_has_white.append(has_white)

        col_bands = []
        in_col = False
        start_x = 0
        for x in range(width):
            if col_has_white[x] and not in_col:
                in_col = True
                start_x = x
            elif not col_has_white[x] and in_col:
                in_col = False
                if x - start_x > 30:
                    col_bands.append((start_x, x))
                    
        if in_col and width - start_x > 30:
            col_bands.append((start_x, width))

        print(f"Row {ry1}-{ry2} has {len(col_bands)} columns.")

        # Crop each cell
        for cx1, cx2 in col_bands:
            box = (cx1, ry1, cx2, ry2)
            cropped = img.crop(box)
            out_path = os.path.join(output_dir, f"sponsor_{count}.png")
            cropped.save(out_path)
            print(f"Saved {out_path}")
            count += 1
            
    return count

if __name__ == "__main__":
    images = [
        r"C:\Users\abhis_9c5q4lg\.gemini\antigravity-ide\brain\045c9af5-7920-44a6-998e-fbada1e55d5f\media__1785616369806.png",
        r"C:\Users\abhis_9c5q4lg\.gemini\antigravity-ide\brain\045c9af5-7920-44a6-998e-fbada1e55d5f\media__1785616369921.png",
        r"C:\Users\abhis_9c5q4lg\.gemini\antigravity-ide\brain\045c9af5-7920-44a6-998e-fbada1e55d5f\media__1785616369962.png"
    ]
    
    out_dir = r"c:\Users\abhis_9c5q4lg\Desktop\Dhwani 26\Sponsorship Web\Designs\D5\dhwani-sponsorship\public\sponsors"
    
    idx = 1
    for img_path in images:
        if os.path.exists(img_path):
            idx = crop_image(img_path, out_dir, idx)
        else:
            print(f"Image not found: {img_path}")
