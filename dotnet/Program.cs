using System;
using System.Collections.Generic;
using ServiceStack;

namespace lnkisample
{
    [Route("/link", "POST", Summary = "Generates a shortened url and optionally sends an sms messaage replacing \"{{url}}\" with new shortened url")]
    public class shortenLinkRequest : IReturn<shortenLinkResponse>
    {
        public string url { get; set; }
        public int lifetime_days { get; set; }
        public List<string> sms_numbers { get; set; }
        public string sms_message { get; set; }

    }

    public class shortenLinkResponse
    {
        public shortenLinkResponse()
        {
            sms_errors = new List<string>();
        }
        public string url { get; set; }
        public DateTime expires { get; set; }
        public List<string> sms_errors { get; set; }

    }




    class Program
    {
        static void Main(string[] args)
        {
            string baseURL = "https://lnki.io";

             string apikey = Environment.GetEnvironmentVariable("LNKI_IO_API_KEY");


            IServiceClient client = new JsonServiceClient(baseURL);
            client.BearerToken = apikey;

            var req = new shortenLinkRequest();
            req.url = "https://www.google.com/maps/place/Fremont+Troll/@47.6496755,-122.3646033,14.01z/data=!4m5!3m4!1s0x5490150128a784bd:0x9ddb04f1ce7199df!8m2!3d47.6512453!4d-122.3476821";
            req.lifetime_days = 5;
            req.sms_message = "Hello from {{url}}";
            req.sms_numbers = new List<string> { { "5555551212" } };


            var resp = client.Send(req);

            Console.WriteLine(resp.url);





        }
    }
}
