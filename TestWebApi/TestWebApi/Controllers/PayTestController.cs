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
        [HttpPost]
        public string GetLoginCode(JObject loginCode)
        {
            return loginCode["loginCode"].ToString();
        }
        public string GetTest()
        {
            return "123";
        }

    }
}
