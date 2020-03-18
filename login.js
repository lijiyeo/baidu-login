$(function(){
    var $user=$('#user');
    var $phone=$('#phone');
    var $passw=$('#passw');
    var $tw=$('#tw');
    var $btn=$('#btn');
    var $gettw=$('#gettw');

    $btn.click(function(){
        if(!validate("#user")||!validate("#phone")||!validate("#passw")||!validate("#tw")){
            $('#usertip').html("用户名不能为空");
            $('#phonetip').html("手机号不能为空");
            $('#passwtip').html("密码不能为空");
        }
    });
    $gettw.click(function(){
        $("#tw").removeAttr("disabled");
        $("#gettw").attr("disabled","disabled");
        $("#twtip").html("");
        var time=50;
        var hander=setInterval(function() {
            if (time <= 0 && $tw.val()=='') {
                clearInterval(hander); 
                $("#gettw").val("获取验证码");
                $("#twtip").html("请求超时，请稍后再试");
                $("#gettw").removeAttr("disabled");
                return false;
            }
            if (time <= 0 && $tw.val()!=='') {
                clearInterval(hander); 
                $("#gettw").val("获取验证码");
                $("#gettw").removeAttr("disabled");
                return false;
            }
            else {
                if(time>=0){
                    $("#gettw").val((time--)+"s");
                }
            }
        }, 1000);
    });
    $user.blur(function(){
        if(!validate("#user")) $user.select();
    })
    $phone.blur(function(){
        if(!validate("#phone")) $phone.select();
    })
    $passw.blur(function(){
        if(!validate("#passw")) $passw.select();
    })
    

    function validate(a){
        var $data=$(a);
        if(a=="#user"){
            if($data.val()===""){
                $('#usertip').html("用户名不能为空");
                $data.select();
                return false
            }
            if(/^[a-z-A-Z]{1}([a-z-A-Z0-9]|[._]){4,19}$/.test($data.val())==false){
                $('#usertip').html("用户名仅支持中英文、数字和下划线，且不能为纯数字");
                $data.select();
                return false
            }

        }
        if(a=="#phone"){
            if($data.val()===""){
                $('#phonetip').html("手机号不能为空");
                $data.select();
                return false
            }   
            if(/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/.test($data.val())==false){
                $('#phonetip').html("手机号码格式不正确");
                $data.select();
                return false
            }
        }
        if(a=="#passw"){ 
            if($data.val()===""){
                $('#passwtip').html("密码不能为空");
                $data.select();
                return false
            }  
            if(/^[a-zA-Z]\w{5,17}$/.test($data.val())==false){
                $('#passwtip').html("密码设置不符合要求");
                $data.select();
                return false
            } 
        }
        if(a=="#tw"){
            if($data.val()===""){
                console.log(1111)
                $('#twtip').html("验证码不能为空");
                // $data.select();
                return false
            }   
        }
        $('#usertip').html("");
        $('#phonetip').html("");
        $('#passwtip').html("");
        $('#twtip').html("");
        return true;
    }
})
