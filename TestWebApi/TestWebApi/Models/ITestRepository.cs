using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestWebApi.Models
{
    interface ITestRepository
    {
        bool Update(Test test);

    }
}
