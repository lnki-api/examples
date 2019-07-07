import { JsonServiceClient } from '@servicestack/client';
import { shortenLinkRequest, shortenLinkResponse } from './dtos';
import {environment} from './environment';

var client = new JsonServiceClient("https://lnki.io");
 
var request = new shortenLinkRequest();
request.url = "https://reaaaaalllllllllllylongurl.com";
request.sms_numbers = ["5555551212"];
request.sms_message = "Hello, please visi {{url}}";
client.bearerToken = environment.apikey

try {
     const response = client.post(request); //response:shortenLinkResponse
 
    console.log(`New url was created: ${r.url}`);
   
} catch(e) {
    console.log("Failed to create url: ", e.responseStatus);
}