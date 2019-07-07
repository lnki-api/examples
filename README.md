# lnki.io Examples

See folders above for langage specific examples.

## Example POST data:
```json
{
	"url": "https://www.google.com/maps/place/Fremont+Troll/@47.6496755,-122.3646033,14.01z/data=!4m5!3m4!1s0x5490150128a784bd:0x9ddb04f1ce7199df!8m2!3d47.6512453!4d-122.3476821",
	"lifetime_days": 5,
	"sms_numbers": ["5555551212"],
	"sms_message": "Hello from {{url}}"
}
```

## Call 
`curl --header "Authorization: Bearer YOUR_API_KEY"  --header "Content-Type: application/json" --request POST  --data '{"url":"http://really.long.url","sms_numbers":["5555551212"], "sms_message": "please visit {{url}}" }' https://lnki.io/link`

## Result
```json
{
	"url": "https://lnki.io/yi46",
	"expires": "\/Date(1562682853451-0500)\/",
	"sms_errors": []
}
```
