using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;

namespace TestWebApi.Controllers
{
    public class PayTestController : ApiController
    {
        struct WxPayOpenId
        {
            public string appid;
            public string secret;
            public string loginCode;
            public string grant_type;
        };
        [HttpPost]
        public string GetLoginCode(JObject loginCode)
        {
            return loginCode["loginCode"].ToString();
        }
        private void GetOpenID(string loginCode)
        {
            WxPayOpenId wxpaypoenid;
            wxpaypoenid.appid = "wxe59a859083fbcf32";
            wxpaypoenid.secret = "838bd800db4f2120f87baace119a857d";
            wxpaypoenid.loginCode = loginCode;
            wxpaypoenid.grant_type = "authorization_code";

        }
        public string GetTest()
        {
            return "123";
        }

    }
}
