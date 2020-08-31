# Vedha Krishna Yarasuri
--- 
<p align="center">
    <img src="https://store-images.s-microsoft.com/image/apps.4294.13510798886736958.a650f2a3-9e4d-4aeb-8aff-d1ce5d232c80.cf7f9fcd-4d78-4d3f-8a03-98ed771f89c1" alt="OCR" width="200"  height="165">
</p>

<h3 align="center">Optical Character Recognition (OCR)</h3>

## Table Of Contents
- [Dependencies](#dependencies)
- [What's included](#whats-included)
- [Image Dataset](#image-data)
- [Architecture](#architecture)

## Dependencies
<p>This current repo requires 
    - Python Dependencies
    <ul>
        <li>tensorflow(=2.3.0)</li>
        <li>tensorflow.js(=2.3.0)</li>
        <li>matplotlib(=1.18.5)</li>
        <li>numpy(=1.18.5)</li>
        <li>PIL(=7.0.0)</li>
    </ul>
    - Web App Dependencies
    <ul>
        <li>Node(=10.15.3)</li>
        <li>npm(=6.4.1)</li>
        <li>express(=4.17.1)</li>
        <li>@tensorflow/tfjs(=6.4.1)</li>
        <li>multer(=1.4.2)</li>
    </ul>
</p>

## What's included
Within the download you'll find the following directories and files. You'll see something like this:
```text
vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/
├──IIIT5K/
|    ├──train/
|    |   ├─img1.png
|    |   ├─img1rot15.jpg
|    |   ├─img1rot-15.jpg
|    |   ├─img1blur.jpg
|    |     .
|    |     .
|    |     .
|    ├──test/
|    |    ├─test_img1.png
|    |    ├─test_img2.png
|    |      .
|    |      .
|    |          
|    ├──Train_labels.txt
|    ├──Test_labels.txt     
|    ├──traindata.m
|    └──testdata.m
|
├──Web/
|   ├──Templates/
|   |     └──index.html
|   |
|   ├──modals/
|   |     ├──web_feature_extractor/
|   |     |        ├──model.json
|   |     |        ├──group1-shard1of30.bin
|   |     |        ├── .
|   |     |        ├── .
|   |     |         
|   |     └──seq2seq/ 
|   |              ├──model.json
|   |              ├──group1-shard1of30.bin
|   |              ├── .
|   |              ├── .
|   |
|   |
|   ├──uploads/
|   └──index.js
|   
|
└──main_file_OCR.ipynb

```
<p>IIIT5K is the dataset folder. This dataset was found from <a href="https://cvit.iiit.ac.in/research/projects/cvit-projects/the-iiit-5k-word-dataset">click here</a>
You can find a tar file named IIIT 5K-word which when extracted you will get a folder named IIIT5K. Due to its size, I cannot upoad it to the git hub. Initially there will be normal images, but due to data augumentation you will find images with name img1rot15, img1rot-15, img1blur</p>

<p>Uploads contains the files uploaded by the user using web-app. The image is then taken from this folder for predictions.</p> 
<p>The models folder contains json models generated using tensorflow converter.</p>

## Image Dataset
These are a few instances taken from IIIT5K dataset.
<p>
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/image1.png">
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/image2.png">
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/image3.png">
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/image4.png">
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/image5.png">
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/image6.png">
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/image7.png">
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/image8.png">
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/image9.png">
</p>

## Architecture
<h3 align="center">The Model</h3>
<p align="center">
    <img src="https://camo.githubusercontent.com/c756a5d464b9189f0ed72e3b156898c5e056d5f5/687474703a2f2f63732e636d752e6564752f7e79756e7469616e642f4f43522d322e6a7067">
</p><h3>The Process</h3>
Given an image as an input
<ol>
    <li>The image is resized to (299,299,3) and converted to numpy.ndarray</li>
    <li>The image is fed to the Inception-Resnet-v2 model and features are extracted at the layer mixed_7a.</li>
    <li>The output features are of size=(m, 8, 8, 2080) then unrolled to size=(m, 64, 2080).</li>
    <li>The un-rolled features are then given to a sequence to sequence attention model to get the oututs.</li>
    <li>The outputs are then decoded to corresponding word.</li>
</ol>
<h3 align="center">The Web-App</h3>
<p>
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/web1.png">
    <img src="https://github.com/yvkrishna/vedhakrishna_yarasuri_9849877047_IITB-Assignment-Jul-Dec2020-Batch2/blob/master/Images/web2.png">
</p>

<h3>The Process</h3>
<p>The process remain same. But the image is uploaded by the user through web application and the image is sent to the server using rest api with multer as middleware.</p>
<p>The uploaded image is stored in uploads folder.</p>

<h4>API Signature</h4>
<p>Rest Api has been created using express server. It has 3 GET request routes. One is for the client side application. The second one is used for getting the feature generator model. The third one is used for sequence to sequence model which gives output as a label.</p>
