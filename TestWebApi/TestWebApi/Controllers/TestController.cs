using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestWebApi.Models;
using Newtonsoft.Json.Linq;

namespace webapi.Controllers
{
    public class TestWebApi : ApiController
    {
        static readonly ITestRepository repository = new TestRepository();
        [HttpPost]
        public bool PostUpdate(JObject test)
        {
            Test item = new Test();
            if (test != null && test["name"].ToString() != null && test["age"].ToString() != null && test["tel"].ToString() != null && test["add"].ToString() != null)
            {
                item.name = test["name"].ToString();
                item.age = test["age"].ToString();
                item.tel = test["tel"].ToString();
                item.add = test["add"].ToString();
            }
            return repository.Update(item);
        }
    }
}
