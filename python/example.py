import requests
import json
import os

class shortenLinkRequest:

    url = ""
    lifetime_days = 90
    sms_numbers = []
    sms_message = "Default message to {{url}}"


url = "https://lnki.io/link"

# *** SET YOUR ENVIRONMENT VARIABLE

apikey = 'Bearer ' + os.environ['LNKI_IO_API_KEY']

request = shortenLinkRequest()
request.lifetime_days = 5
request.sms_message = "Hello from {{url}}"
request.url = "https://www.google.com/maps/place/Fremont+Troll/@47.6496755,-122.3646033,14.01z/data=!4m5!3m4!1s0x5490150128a784bd:0x9ddb04f1ce7199df!8m2!3d47.6512453!4d-122.3476821"

# *** CHANGE THIS TO YOUR PHONE NUMBER
request.sms_numbers = ["5555551212"]

headers = {'Authorization': apikey, 'Accept' : 'application/json', 'Content-Type' : 'application/json' }

jsondata = json.dumps(request.__dict__)
resp = requests.post(url, data=jsondata ,headers=headers)

shortenLinkResponse = json.loads(resp.text)

print(shortenLinkResponse["url"])


