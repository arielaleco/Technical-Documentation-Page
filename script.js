$(function(){


    $(".copy-clipboard").click(function(){
       // this.parent().css({"color": "red", "border": "2px solid red"});
        //$(this).parent().css({"color": "red", "border": "2px solid red"});
        //alert($(this).parent().text());
            
        // create a temporary input field
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).parent().text()).select();
        document.execCommand("copy");
        $temp.remove();

        //alert($(this).parent().html());
// alert(this.parent.text);
    });


});