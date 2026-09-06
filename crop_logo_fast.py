import numpy as np
from PIL import Image

img = Image.open("scratch_sprite.png").convert("RGBA")
img_np = np.array(img)

# Vectorized transparency: anything mostly white becomes transparent
mask = (img_np[:, :, 0] > 240) & (img_np[:, :, 1] > 240) & (img_np[:, :, 2] > 240)
img_np[mask, 3] = 0

# Find non-transparent rows
non_empty_rows = np.where(np.any(~mask, axis=1))[0]

if len(non_empty_rows) > 0:
    first_row_y = non_empty_rows[0]
    
    # Find the gap after the first row
    gap_y = first_row_y
    for i in range(first_row_y, len(img_np)):
        if np.all(mask[i, :]): # if this row is completely empty
            # check if the next 10 rows are also empty (a real gap)
            if np.all(mask[i:i+10, :]):
                gap_y = i
                break
                
    # Crop the first block
    cropped = img_np[max(0, first_row_y-20) : gap_y+20, :]
    
    # Find horizontal bounds
    non_empty_cols = np.where(np.any(cropped[:, :, 3] > 0, axis=0))[0]
    if len(non_empty_cols) > 0:
        first_col = non_empty_cols[0]
        last_col = non_empty_cols[-1]
        cropped = cropped[:, max(0, first_col-20) : last_col+20]

    Image.fromarray(cropped).save("public/Dhwani_generated.png")
    print("Cropped logo saved!")
else:
    print("No content found.")
