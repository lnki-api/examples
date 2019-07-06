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
            req.url = "https://maps.google.com";
            req.lifetime_days = 5;
            req.sms_message = "Hello from {{url}}";
            req.sms_numbers = new List<string> { { "5555551212" } };


            var resp = client.Send(req);

            Console.WriteLine(resp.url);





        }
    }
}
