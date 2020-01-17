$(".alert").hide();
var total=0;
$("#dp").click(function() { 
    $("#res1").slideUp();
    $("#dan1").slideUp();
     var npat=/^[0-9]+$/;
     var com=$("#amt").val();
     var ok=com.search(npat);
     var count=Number($("#amt").val());
     if(ok)
     alert("Please Enter the minimum amount of 100");
     else{
        if(count>=0 && count <100){
            $("#dan").text("Amount deposit failed!");
            $("#dan1").slideDown();  
        }
        else{
            $("#alert").text("Amount deposit successfull");
            $("#alert1").slideDown();
            total+=count;
            $("#ch").click(function(){
                $("#alert1").slideUp();
                $("#dan1").slideUp();
                $("#res").text(total);
                $("#res1").slideDown();
            });
        }
     }    
});  
$("#ch").click(function(){ 
    $("#res1").slideDown(); 
    $("#dan1").slideUp();

});
$("#wd").click(function () {
    $("#res1").slideUp();
    $("#dan1").slideUp();

    var npat=/^[0-9]+$/;
     var com=$("#amt").val();
     var ok=com.search(npat);
     var count1=Number($("#amt").val());
     if(ok)
     alert("Please Enter the minimum amount of 100");
     else{
        if(count1>=0 && count1 <100){
            $("#dan").text("Amount withdraw failed!");
            $("#dan1").slideDown();  
        }
        else{
            $("#alert").text("Amount withdrawn successfully");
            $("#alert1").slideDown();
            total-=count1;
            if(total<0){
                alert("account balance is zero cannot be withdrawned");
                total=0;
            }
            $("#ch").click(function(){
                $("#alert1").slideUp();
                $("#res").text(total);
                $("#res1").slideDown();
            });
        }
     } 
});
