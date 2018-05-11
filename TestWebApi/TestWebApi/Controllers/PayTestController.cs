using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using System.Text;
using System.IO;
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
            return GetOpenID(loginCode["loginCode"].ToString());
        }
        private string GetOpenID(string loginCode)
        {
            string result = "";
            Dictionary<string, string> dic = new Dictionary<string, string>();
            dic.Add("appid", "wxe59a859083fbcf32");
            dic.Add("secret", "838bd800db4f2120f87baace119a857d");
            dic.Add("js_code", loginCode);
            dic.Add("grant_type", "authorization_code");
            HttpWebRequest req = (HttpWebRequest)WebRequest.Create("https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code");
            req.Method = "POST";
            req.ContentType = "application/x-www-form-urlencoded";
            StringBuilder sb = new StringBuilder();
            int i = 0;
            //参数添加
            foreach(var item in dic)
            {
                if (i > 0)
                    sb.Append("&");
                sb.AppendFormat("{0}={1}", item.Key, item.Value);
                i++;
            }
            //转化格式
            byte[] data = Encoding.UTF8.GetBytes(sb.ToString());
            req.ContentLength = data.Length;
            using (Stream reqstream =req.GetRequestStream())
            {
                reqstream.Write(data, 0, data.Length);
                reqstream.Close();
            }

            HttpWebResponse res = (HttpWebResponse)req.GetResponse();
            Stream resstream = res.GetResponseStream();
            using(StreamReader sr=new StreamReader(resstream,Encoding.UTF8))
            {
                result = sr.ReadToEnd();
            }
            return result;

        }
        public string GetTest()
        {
            return "123";
        }

    }
}
