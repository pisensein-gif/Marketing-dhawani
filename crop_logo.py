import numpy as np
from PIL import Image
from skimage.measure import label, regionprops

# Load image and convert to RGBA
img = Image.open("scratch_sprite.png").convert("RGBA")
img_np = np.array(img)

# Convert to grayscale for thresholding
gray = np.mean(img_np[:,:,:3], axis=2)

# Assuming white background, objects are dark
mask = gray < 240

# Label connected components
labeled = label(mask)
regions = regionprops(labeled)

# Filter by area to keep only significant objects (letters/logos)
valid_regions = [r for r in regions if r.area > 500]

# Sort regions by Y coordinate (top to bottom)
valid_regions.sort(key=lambda r: r.bbox[0])

# Group regions into rows based on Y coordinate overlap
rows = []
current_row = []
current_y_min = valid_regions[0].bbox[0]
current_y_max = valid_regions[0].bbox[2]

for r in valid_regions:
    min_row, min_col, max_row, max_col = r.bbox
    # If this region overlaps significantly vertically with the current row
    if min_row < current_y_max:
        current_row.append(r)
        current_y_min = min(current_y_min, min_row)
        current_y_max = max(current_y_max, max_row)
    else:
        rows.append(current_row)
        current_row = [r]
        current_y_min = min_row
        current_y_max = max_row

if current_row:
    rows.append(current_row)

print(f"Found {len(rows)} rows of objects.")
for i, row in enumerate(rows):
    print(f"Row {i} has {len(row)} objects")

# The top row is likely the "DHWANI" logo or the first row of letters.
# Let's crop the bounding box that contains all objects in the first row.
top_row = rows[0]
min_row = min(r.bbox[0] for r in top_row)
max_row = max(r.bbox[2] for r in top_row)
min_col = min(r.bbox[1] for r in top_row)
max_col = max(r.bbox[3] for r in top_row)

# Add some padding
padding = 20
min_row = max(0, min_row - padding)
max_row = min(img_np.shape[0], max_row + padding)
min_col = max(0, min_col - padding)
max_col = min(img_np.shape[1], max_col + padding)

# Crop the top logo
cropped = img_np[min_row:max_row, min_col:max_col]

# Make background transparent (white pixels to transparent)
for y in range(cropped.shape[0]):
    for x in range(cropped.shape[1]):
        r, g, b, a = cropped[y, x]
        if r > 240 and g > 240 and b > 240:
            cropped[y, x] = [255, 255, 255, 0]

# Save as PNG
Image.fromarray(cropped).save("public/Dhwani_generated.png")
print("Saved top logo to public/Dhwani_generated.png")
