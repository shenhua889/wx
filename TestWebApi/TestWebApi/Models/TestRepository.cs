using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;

namespace TestWebApi.Models
{
    public class TestRepository:ITestRepository
    {
        public bool Update(Test test)
        {
            if(test==null)
            {
                throw new ArgumentException("test");
            }
            else
            {
                MySqlParameter[] msp=new MySqlParameter[5];
                msp[0] = new MySqlParameter("?Name", MySqlDbType.VarChar, 255);
                msp[0].Value = test.name;
                msp[1] = new MySqlParameter("?Address", MySqlDbType.VarChar, 255);
                msp[1].Value = test.add;
                msp[2] = new MySqlParameter("?Tel", MySqlDbType.VarChar, 255);
                msp[2].Value = test.tel;
                msp[3] = new MySqlParameter("?Age", MySqlDbType.VarChar, 255);
                msp[3].Value = test.age;
                msp[4] = new MySqlParameter("?Datetime", MySqlDbType.VarChar, 255);
                msp[4].Value = DateTime.Now.ToString();
                //MySqlHelper msh = new MySqlHelper("Database='test';Data Source='127.0.0.1';User Id='root';Password='Lala85459666';charset='utf8';pooling=true");
                MySqlHelper msh = new MySqlHelper("Database='test';Data Source='127.0.0.1';User Id='root';Password='85459666';charset='utf8';pooling=true");
                msh.ExecuteNonQuery("INSERT into test(`name`,tel,`add`,age,datetime) VALUES(?Name,?Tel,?Address,?Age,?Datetime)", msp);
                return true;
            }
        }
    }
}