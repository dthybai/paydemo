

function shield(){
    var s = document.getElementById("test");
    s.style.display = "block";
    
    var l = document.getElementById("log_window");
    l.style.display = "block";
}

function cancel_shield(){
    var s = document.getElementById("test");
    s.style.display = "none";
    
    var l = document.getElementById("log_window");
    l.style.display = "none";
}

function copyContent() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        // 动态创建 input 元素
        var text = document.createElement("input");
        // 获得需要复制的内容
        text.setAttribute("value", document.getElementById("textsOne").innerText);
        // 添加到 DOM 元素中
        document.body.appendChild(text);

        // var text = document.getElementById("urlcontent");
        if (isiOS) {//区分iPhone设备 
            text.setSelectionRange(0, text.value.length);
            if (document.execCommand('copy', false, null)) {
                 layer.open({
				    content: '复制成功'
				    ,skin: 'msg'
				    ,time: 2 //2秒后自动关闭
				  });
            } else {
            	 layer.open({
				    content: '复制失败，您使用的手机暂不支持复制，请升级软件.'
				    ,skin: 'msg'
				    ,time: 2 //2秒后自动关闭
				  });
               
            }
        } else {
            text.select();//选中文本
            document.execCommand("copy");//执行浏览器复制命令    
            layer.open({
				    content: '复制成功'
				    ,skin: 'msg'
				    ,time: 2 //2秒后自动关闭
				  });
        }
        document.body.removeChild(text);
    }
			function copyContentOne() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        // 动态创建 input 元素
        var text = document.createElement("input");
        // 获得需要复制的内容
        text.setAttribute("value", document.getElementById("textsTwo").innerText);
        // 添加到 DOM 元素中
        document.body.appendChild(text);

        // var text = document.getElementById("urlcontent");
        if (isiOS) {//区分iPhone设备 
            text.setSelectionRange(0, text.value.length);
            if (document.execCommand('copy', false, null)) {
                 layer.open({
				    content: '复制成功'
				    ,skin: 'msg'
				    ,time: 1 //2秒后自动关闭
				  });
            } else {
            	 layer.open({
				    content: '复制失败，您使用的手机暂不支持复制，请升级软件.'
				    ,skin: 'msg'
				    ,time: 1 //2秒后自动关闭
				  });
                
            }
        } else {
            text.select();//选中文本
            document.execCommand("copy");//执行浏览器复制命令    
            layer.open({
				    content: '复制成功'
				    ,skin: 'msg'
				    ,time: 1 //2秒后自动关闭
				  });
        }
        document.body.removeChild(text);
    }
			function copysTwo() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        // 动态创建 input 元素
        var text = document.createElement("input");
        // 获得需要复制的内容
        text.setAttribute("value", document.getElementById("textsThr").innerText);
        // 添加到 DOM 元素中
        document.body.appendChild(text);

        // var text = document.getElementById("urlcontent");
        if (isiOS) {//区分iPhone设备 
            text.setSelectionRange(0, text.value.length);
            if (document.execCommand('copy', false, null)) {
                  layer.open({
				    content: '复制成功'
				    ,skin: 'msg'
				    ,time: 1 //2秒后自动关闭
				  });
            } else {
            	 layer.open({
				    content: '复制失败，您使用的手机暂不支持复制，请升级软件.'
				    ,skin: 'msg'
				    ,time: 1 //2秒后自动关闭
				  });
               
            }
        } else {
            text.select();//选中文本
            document.execCommand("copy");//执行浏览器复制命令    
            layer.open({
				    content: '复制成功'
				    ,skin: 'msg'
				    ,time: 1 //2秒后自动关闭
				  });
        }
        document.body.removeChild(text);
    }
			function btns(){

				
			var users= document.getElementById("user").value.length;
			if(users==0){
				  layer.open({
				    content: '请输入存款人姓名'
				    ,skin: 'msg'
				    ,time: 1 //2秒后自动关闭
				  });
			}else{
				layer.open({
				    content: '转账成功秒到账'
				    ,skin: 'msg'
				    ,time: 1 //2秒后自动关闭
				  });
				
				//执行打款人提交流程 
			}
		}
			
		
