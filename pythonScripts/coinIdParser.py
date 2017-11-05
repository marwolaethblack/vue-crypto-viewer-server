import requests
import json
from PIL import Image
import glob

#Gets all coins and their Ids from the api and parses them to a json file containing the coin symbol as key and its ID as value

def coinIdParser():
    x = {}
    coinData = requests.get('https://www.cryptocompare.com/api/data/coinlist/').content;
    coinData = coinData.decode('utf8')
    coinData = json.loads(coinData)
    coinIds = coinData['Data']
    for key, value in coinIds.items():
        x[key] = value['Id']
    with open('coinIds.json', 'w') as outfile:
        json.dump(x, outfile)


coinIdParser()