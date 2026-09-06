import numpy as np
from PIL import Image
from scipy.ndimage import label, find_objects, binary_dilation

img = Image.open('scratch_sprite.png').convert('RGBA')
arr = np.array(img)

# Non-white pixels
# A pixel is background if it's white (R>240, G>240, B>240)
r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
mask = (r < 240) | (g < 240) | (b < 240)

# Dilate slightly to group characters into single blocks (e.g. 10M+)
mask_dilated = binary_dilation(mask, iterations=50)

labeled_array, num_features = label(mask_dilated)
print(f"Found {num_features} text blocks")

objs = find_objects(labeled_array)
for i, obj in enumerate(objs):
    sy, sx = obj
    print(f"Block {i}: y={sy.start}-{sy.stop}, x={sx.start}-{sx.stop}")
    
    # Extract the block
    cropped = arr[sy, sx].copy()
    
    # Make background transparent inside the block
    # Actually, we should use the original mask to keep the text colored
    block_mask = mask[sy, sx]
    # Optionally, we can set alpha = 0 for white pixels
    r_c, g_c, b_c = cropped[:,:,0], cropped[:,:,1], cropped[:,:,2]
    white_mask = (r_c > 240) & (g_c > 240) & (b_c > 240)
    cropped[white_mask, 3] = 0 # set alpha to 0 for white background
    
    Image.fromarray(cropped).save(f"public/extracted_text_{i}.png")
