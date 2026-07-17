#!/usr/bin/env python3
"""
YadavHeritage Image Downloader
Run this script locally to download all news/event images into this folder.
Usage: python download-images.py
"""

import urllib.request
import os
import time

IMAGES = [
    {
        "filename": "news16-naveen-yadav-jubilee-hills.jpg",
        "url": "https://static.india.com/wp-content/uploads/2025/11/India.com-2025-11-14T152552.347.jpg",
        "description": "News #16 — Naveen Yadav Jubilee Hills By-Poll Win",
        "license": "All rights reserved — India.com (editorial use)",
    },
    {
        "filename": "news17-nagarjuna-yadav-arrest.jpg",
        "url": "https://cdn.siasat.com/wp-content/uploads/2026/07/Untitled-design-2026-07-12T180105.099.jpg",
        "description": "News #17 — Nagarjuna Yadav YSRCP Arrest",
        "license": "All rights reserved — The Siasat Daily (editorial use)",
    },
    {
        "filename": "news18-doddi-komarayya.webp",
        "url": "https://kpiasacademy.com/wp-content/uploads/2026/07/doddi-komarayya.webp",
        "description": "News #18 — Doddi Komarayya First Martyr",
        "license": "Educational use — KPIAS Academy",
    },
    {
        "filename": "news19-sadar-festival-buffalo-carnival.jpg",
        "url": "https://live.staticflickr.com/3065/2988022629_ec4f8c7f78_z.jpg",
        "description": "News #19 — Sadar Festival Buffalo Carnival (Flickr CC BY-NC-ND 2.0)",
        "license": "CC BY-NC-ND 2.0 — ATTRIBUTION: Vijay Bandari / Flickr",
        "flickr_page": "https://www.flickr.com/photos/vijji_vijju_vjay/2988022629",
    },
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
}

script_dir = os.path.dirname(os.path.abspath(__file__))

print("YadavHeritage Image Downloader")
print("=" * 50)

for img in IMAGES:
    filepath = os.path.join(script_dir, img["filename"])
    print(f"\n{img['description']}")
    print(f"  URL: {img['url']}")

    if os.path.exists(filepath):
        size = os.path.getsize(filepath)
        print(f"  SKIPPED — already exists ({size:,} bytes)")
        continue

    try:
        req = urllib.request.Request(img["url"], headers=HEADERS)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        with open(filepath, "wb") as f:
            f.write(data)
        print(f"  OK — saved {len(data):,} bytes → {img['filename']}")
        if "flickr" in img["url"]:
            print(f"  NOTE: {img['license']}")
    except Exception as e:
        print(f"  FAILED: {e}")
        print(f"  → Download manually from: {img['url']}")

    time.sleep(0.5)

print("\n" + "=" * 50)
print("Done. Check this folder for downloaded images.")
print("Flickr image requires attribution — see image-metadata.json for details.")
