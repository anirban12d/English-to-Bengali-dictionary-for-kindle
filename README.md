
# English to Bengali dictionary for kindle

I have a kindle and it's frustating that there are not many english to bengali dictionaries out there. So, I thoght of making my own dictionary.
Here I am giving every details required for making a dictionary of your own.

## Download
I have already made a dictionary which you can [download](https://github.com/anirban12d/English-to-Bengali-dictionary-for-kindle/raw/main/English%20to%20Bengali%20dictionary%20by%20Anirban%20Das.mobi).
But if you want to create your own dictionary then the guide below can help you do that.

## How does it work
This basically converts a csv file which is in in x, y format into an array and then from the array we create html elements for each item in the array. Then we can collect those elements and use them accordingly.
## Step - 1
We take a csv file which looks like 
```csv
English-Word, Bengali-Word
```


## Step - 2
Open the index.html with live-server, there you will be able to upload the .csv file
## 

[![screenshot-1.png](https://i.postimg.cc/bvwDZQyr/screenshot-1.png)](https://postimg.cc/3kzJ60DQ)


## 
Depending on your .csv elements this might take some time. After the process if completed you will be able to see the results.
## 
[![screenshot-2.png](https://i.postimg.cc/QN4xxHVN/screenshot-2.png)](https://postimg.cc/Sj9pgQWH)
## Step - 3
After all the words are visible in the window. Save the .html file
## 
[![screenshot-3.png](https://i.postimg.cc/tCvDy38r/screenshot-3.png)](https://postimg.cc/QH5cJT85)
## Step - 4
After downloading the .html file, open it in a code editor of your choice and then copy this tag and everything in between
```html
<mbp:frameset>
      [YOUR WORDS GOES HERE]
    </mbp:frameset>
```
## Step - 5
Open or create a content.html file and replace the entire <mbp: frameset> tag with the copied value.
```html
<html xmlns:math="http://exslt.org/math" xmlns:svg="http://www.w3.org/2000/svg"
      xmlns:tl="https://kindlegen.s3.amazonaws.com/AmazonKindlePublishingGuidelines.pdf"
      xmlns:saxon="http://saxon.sf.net/" xmlns:xs="http://www.w3.org/2001/XMLSchema"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:cx="https://kindlegen.s3.amazonaws.com/AmazonKindlePublishingGuidelines.pdf"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:mbp="https://kindlegen.s3.amazonaws.com/AmazonKindlePublishingGuidelines.pdf"
      xmlns:mmc="https://kindlegen.s3.amazonaws.com/AmazonKindlePublishingGuidelines.pdf"
      xmlns:idx="https://kindlegen.s3.amazonaws.com/AmazonKindlePublishingGuidelines.pdf">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style>
      h5 {
          font-size: 1em;
          margin: 0;
      }
      dt {
          font-weight: bold;
      }
      dd {
          margin: 0;
          padding: 0 0 0.5em 0;
          display: block
      }
    </style>
  </head>
  <body>
    <!-- delete this element and replace it with the copied items -->
    <mbp:frameset>
      [YOUR WORDS GOES HERE]
    </mbp:frameset>
    <!-- Copied values goes above this -->
  </body>
</html>
```
## 
[![screenshot-4.png](https://i.postimg.cc/ZYGpjbzc/screenshot-4.png)](https://postimg.cc/G9j4m128)
## Step - 6
Open or create a cover.html file and insert the required values as below. You can change the name and created by name according to your preferance.
```html
<html>
  <head>
    <meta content="text/html" http-equiv="content-type">
  </head>
  <body>
    <h1>English to Bengali dictionary</h1>
    <h3>Created by Anirban Das</h3>
  </body>
</html>
```
## 
[![screenshot-6.png](https://i.postimg.cc/gJ6HT0zH/screenshot-6.png)](https://postimg.cc/34YGyYDk)
## Step - 7
Now create a copyright.html file, this is optional but if you want to include it then you can make a simple html file and fill with some appropriate details.
## 
[![screenshot-5.png](https://i.postimg.cc/R0hRwR28/screenshot-5.png)](https://postimg.cc/hJFTB9Db)
## Optional
If you want to create a usage page then you can do that by simply creating a new html file and naming it as usage and fill it with the details that you would like.
## Step - 8
Make an .opf file. This is a XML file ant=d it is really important. I have named this file as dictionary.opf.
##### Below you can see an example of the dictionary.opf file. I haven't used any cover picture for this particular dictionary but if you want to use a cover picture then you can edit the line 7 and uncomment line 15.
## 
[![Screenshot-7.png](https://i.postimg.cc/QCdQTFVr/Screenshot-7.png)](https://postimg.cc/Pp0vGrm6)
```javascript
<?xml version="1.0"?>
<package version="2.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId">
  <metadata>
    <dc:title>English to Bengali dictionary by Anirban Das</dc:title>
    <dc:creator opf:role="aut">Anirban Das</dc:creator>
    <dc:language>en-us</dc:language>
    <meta name="cover" content="my-cover-image" />
    <x-metadata>
      <DictionaryInLanguage>en-us</DictionaryInLanguage>
      <DictionaryOutLanguage>en-us</DictionaryOutLanguage>
      <DefaultLookupIndex>default</DefaultLookupIndex>
    </x-metadata>
  </metadata>
  <manifest>
    <!-- <item href="cover-image.jpg" id="my-cover-image" media-type="image/jpg" /> -->
    <item id="cover"
          href="cover.html"
          media-type="application/xhtml+xml" />
    <item id="copyright"
          href="copyright.html"
          media-type="application/xhtml+xml" />
    <item id="content"
          href="content.html"
          media-type="application/xhtml+xml" />
  </manifest>
  <spine>
    <itemref idref="cover" />
    <!-- <itemref idref="usage" /> -->
    <itemref idref="copyright"/>
    <itemref idref="content"/>
  </spine>
  <guide>
    <reference type="index" title="IndexName" href="content.html"/>
  </guide>
</package>
```
## Step - 9
Put all the files that you have created so far in a folder. Download a tool called 'kindlegen'. Thought kindlegen is not supported anymore, If you want to use it, you can still find it through the Internet Archive.
## 
[![Screenshot-8.png](https://i.postimg.cc/KcgN2MLd/Screenshot-8.png)](https://postimg.cc/hhcx8h2r)
## Step - 10
Open a command prompt and navigate to the path of the folder in which you have kept all the files that we created.
##### example - 
``` command
cd C:\Users\"YOUR USERNAME"\Desktop\English to Bengali dictionary for kindle
```
#### 
[![Screenshot-9.png](https://i.postimg.cc/HxP8cBMT/Screenshot-9.png)](https://postimg.cc/8JMzxdwY)
## Step - 11
Now in the command prompt, type the path of the kindlegen software that you had downloaded and extracted. Then give a space in-between and then type the name of the .opf file that you have created.
##### Example -
``` command
C:\Users\'YOUR USERNAME'\Desktop\English to Bengali dictionary for kindle>C:\Users\'YOUR USERNAME'\Downloads\kindlegen_win32_v2_9\kindlgen dictionary.opf
```
[![Screenshot-10.png](https://i.postimg.cc/4xWGgdhh/Screenshot-10.png)](https://postimg.cc/RWJy1vdM)

##### 
After the process is complete, you will be able to see the below screen, there will be some warnings but ignore that, the dictionary will work like it should.
##### 
[![Screenshot-11.png](https://i.postimg.cc/7Lcy5W9H/Screenshot-11.png)](https://postimg.cc/5HwrGpDT)
##### 
You can check the folder and there you should find a .mobi file and the name will be the same of the .opf file.
## Step - 12
Connect your kindle with your computer using usb and then you can navigate to the documents/dictionaries folder. Paste the .mobi file that you have just created.
## Step - 13
After copying the file to the kindle, eject the kindle. Then go to your kindle's settings and from there go to language and dictionaries, from there go to the dictionaries section and there you will be able to see the english option, click on that and you should see the dictionary which you have trarsferred. Select that and press ok.
Now open any english book and select a word by touching and holding to it and you should see the meaning of that word in bengali.

##### Enjoy!
## Acknowledgements

 - Thanks to [Jake McCrary](https://github.com/jakemcc) for his awesome guide of making kindle dictionaries
 - Thanks to [Minhas Kamal](https://github.com/MinhasKamal) for his huge database of english to bengali words

