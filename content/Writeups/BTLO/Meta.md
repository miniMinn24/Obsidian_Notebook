---
date: 2026-05-17
tags:
  - challenge
  - defensive
  - forensic
---
**BTLO Challenge**: https://blueteamlabs.online/home/challenge/meta-b976cec9e2

> [!quote] Scenario
> The attached images were posted by a criminal on the run, with the caption "I'm roaming free. You will never catch me". We believe you can assist us in proving him wrong.


# Tools Used
- [ExifTool](https://exiftool.org/) to analyze metadata of image files. 
- **OSINT** to gather specific information through the internet.

# Questions & Answers

## Q-1. What is the camera model?

The basic security analysis usually starts from analyzing the metadata (Date, Accessed, File type, etc) of the evidence files. So, we shall check those 2 images metadata using a tool like `exiftool`:

```bash
exiftool uploaded_1.JPG uploaded_2.png
```

This will outputs so much metadata information, but we just need to focus on finding the specific metadata field related to **Model**, **Device**, **Camera** or anything relevant to camera model. That's when `grep` comes in to help finding out the specific strings:

```bash
exiftool uploaded_1.JPG uploaded_2.png | grep -i -E "model|device"
```

`grep` flags explanation:
- `-i` for case-insensitive matching.
- `-E` to combine searching multiple patterns.

Now, we can see the camera model we're looking for.

![[Pasted image 20260517131113.png]]

## Q-2. When was the picture taken? 

For this, we should focus on finding **Created** or **Modified** metadata fields when was the image files created. The metadata field names and the name in my mind might be slightly different (e.g., "Modified" could be "Modification Date" instead), so I combined the patterns just to focus on the word:

```bash
exiftool uploaded_1.JPG uploaded_2.png | grep -i -E "modifi*|creat*"
```

And we found the information we're looking for:

![[Pasted image 20260517133609.png]]

## Q-3. What does the comment on the first image says?

To find the metadata related to **comment** on the first image, I did the same way to find the pattern:

![[Pasted image 20260517133826.png]]

## Q-4. Where could the criminal be?

I tried searching for the GPS location in the metadata, which it seems exists:

![[Pasted image 20260517134204.png]]

But when I try to search for its location on the web, the location doesn't really exist. This could only be malformed as the comment said. However, the [Google's Image Search](https://google.com) did the job instead of needing to decode GPS:

![[Pasted image 20260517135159.png]]



