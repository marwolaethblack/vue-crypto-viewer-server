#!/bin/bash
for file in *; do
#PTH = ${file%.*}
cwebp -q 80 "$file" -o "webp/${file%.*}.webp"
done;