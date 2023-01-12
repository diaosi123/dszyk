<!DOCTYPE html>
<html>
<head>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="referrer" content="never">
<title>dplayer</title>
<link rel="stylesheet" href="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ab987eca-1709-4656-927a-d56741261fae/8f5f5b77-6f55-4ac2-b31c-191c7b21cb56.css" />
<style type="text/css">body,html,.content{background-color:black;padding: 0;margin: 0;width:100%;height:100%;color:#999;}</style>
</head>
<body>
<div id="player" class="content"></div>
<script type="text/javascript" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ab987eca-1709-4656-927a-d56741261fae/4e7206f7-b09f-4d8b-bfb5-63d0cf802954.js"></script>
<script type="text/javascript" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ab987eca-1709-4656-927a-d56741261fae/7ab3d691-7ced-4923-a823-af7620b99afc.js"></script>
<script type="text/javascript">
	    if(parent.player_data.url.indexOf("m3u8")!=-1){
		   var dptype="hls";
		 }else{
		   var dptype="normal";
		 }
	              const dp = new DPlayer({
					    container: document.getElementById('player'),
						autoplay:true,	
						video: {
							url: parent.player_data.url,
							pic: 'https://cbu01.alicdn.com/img/ibank/2019/694/265/11144562496.jpg',
				            type:dptype, 
							},
					    });
		var isiPad = navigator.userAgent.match(/iPad|iPhone|Linux|Android|iPod/i) != null;
		if (isiPad) {
			var html = '<video src="'+parent.player_data.url+'" controls="controls" autoplay="autoplay" poster="https://p16.qhimg.com/t01e86ef32e353cdd8f.gif" width="100%" height="100%"></video>';
			document.getElementById('player').innerHTML = html;
		}	    
</script>
</body>
</html>
