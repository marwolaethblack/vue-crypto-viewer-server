import requests
import json
from PIL import Image
import glob


def imageScraper():
	imgData = requests.get('https://www.cryptocompare.com/api/data/coinlist/').content;
	imgData = imgData.decode('utf8')
	imgData = json.loads(imgData)
	baseImgUrl = imgData['BaseImageUrl']
	coinData = imgData['Data']

	for key in coinData:
		if 'ImageUrl' in coinData[key]:
			url = "{}{}".format(baseImgUrl,coinData[key]["ImageUrl"])
			imgName = '{}.png'.format(key)
			if "*" not in imgName:
				with open(imgName, 'wb') as handler:
					img = requests.get(url).content
					handler.write(img)		
			else:
				imgName = imgName.replace("*", "")
				with open(imgName, 'wb') as handler:
					img = requests.get(url).content
					handler.write(img)


	print(type(coinData))



def imageResizer():
	allImages = glob.glob("*.png")

	for img in allImages:
		try:
			foo = Image.open(img)
			foo = foo.resize((180,180), Image.ANTIALIAS)
			foo.save('./ni/{}'.format(img), optimize=True, quality=85)
		except:
			print("Cant load image")


print("hello");


	
	






