import requests
import json

#Gets all coins and their symbols from the api, creates a json file where key: symbol, value: name

def coinIdParser():
    x = {}
    coinData = requests.get('https://www.cryptocompare.com/api/data/coinlist/').content;
    coinData = coinData.decode('utf8')
    coinData = json.loads(coinData)
    coinIds = coinData['Data']
    for key, value in coinIds.items():
        x[key] = value['CoinName']
    with open('coinSymbols.json', 'w') as outfile:
        json.dump(x, outfile)


coinIdParser()