<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="WebTest2.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" style="height:100%;">
<head runat="server">
    <link rel="stylesheet" href="https://cdn.pannellum.org/2.4/pannellum.css"/>
    <script type="text/javascript" src="https://cdn.pannellum.org/2.4/pannellum.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>

    <style>
        #form1{
            display:flex;
            align-items:center;
            justify-content:center;
            height:100%;
            width:100%;
        }
        #vrview{
            width:100%;
            height:100%;
        }
    </style>

</head>
<body style="width:100%;height:100%;margin:0">
    <form id="form1" runat="server">
        <div id="vrview">
        </div>
        <script>
                //function onVrViewLoad() {
                //    var vrView = new VRView.Player('#vrview', {
                //        width: '100%',
                //        height: '100%',
                //        preview: 'http://ow4ffxtt1.bkt.clouddn.com/andes_512.jpg',
                //        image: 'http://ow4ffxtt1.bkt.clouddn.com/andes_2048.jpg',
                //        is_stereo: true  //区分是mono还是stereo
                //    });
                //}
                pannellum.viewer('vrview', {
                    "type": "equirectangular",
                    "autoLoad":true,
                    "panorama": "http://ow4ffxtt1.bkt.clouddn.com/mono-360-1.jpg",
                });
        </script>
    </form>
</body>
</html>
