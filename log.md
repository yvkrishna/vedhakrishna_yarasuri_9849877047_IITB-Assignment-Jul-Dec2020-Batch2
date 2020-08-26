## Day - 1 ( 23-08-2020 )
<ul><li>Studied suggested research paper titled "Attention-based Extraction of Structured
Information from Street View Imagery
"and learnt about attention models at coursera sequence models.</li>
<li>Searched for various articles about designing OCR systems.</li>
</ul>

## Day - 2 ( 24-08-2020 )
<ul><li>Referred various datasets for the training of the model.But Found very difficult in getting the data.</li>
<li>created a colab notebook and imported pre-trained inception_resnet_v2 trained on imagenet dataset for feature extraction.</li>
<li>studied attention models to concatinate with the feature maps obtained from inception_resnet_v2 model.</li></ul>

## Day - 3 ( 25-08-2020 )
<ul>
<li>Found a dataset ('IIIT5K') consisting of 5000 cropped images consisting of textual data.</li>
<li>Added rotations to the train dataset and resized to the required input size.</li>
<li>Loaded inception_resnet_v2 model trained on imagenet dataset and taken features by giving images as input.</li>
<li>Visualized the features for a test image.</li>
<li>Started with Seq2Seq model with Attention models.</li>
</ul>

## Day - 4 ( 26-08-2020 )
<ul>
<li>Image Augumented techiniques like rotation blurring have been implemented.</li>
<li>Selected few of the best layers which give a good performance by referring the suggested paper. The selected feature extractor layers are used for training the attention based model.</li>
<li>Created a node based web-app which can able to take in any image provided by the user.Bootstrap has been used for front end application.</li>
<li>Started writing documentation for each part in colab.</li>
</ul>
