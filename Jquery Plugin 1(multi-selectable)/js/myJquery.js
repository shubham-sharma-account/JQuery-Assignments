$(document).ready(function(){
    $("button").click(function(){
        var fname=$("#fname").val();
        var lname=$("#lname").val();
        var email=$("#email").val();
        var phone=$("#phnum").val();
        var address=$("#address").val();
        var course=$("#course").val();
        var sub=$("input[name=Subject]");
        var time=$("#time").val();
        var date=$("#date").val();
        var values=true;

        /* firstname validation */
        if(fname==""){
            $("#fnameerr").fadeIn('slow', function(){
                $('#fnameerr').delay(2000).fadeOut(); 
             });
            $("#fnameerr").html("First name is required");
            values=false;
        }
        else if (!(fname.match(/^[a-zA-Z ]*$/))){
            $("#fnameerr").fadeIn('slow', function(){
                $('#fnameerr').delay(2000).fadeOut(); 
             });
            $("#fnameerr").html("Only alphabets allowed");
            values=false;
        }else if(fname.length < 4 || fname.length > 10){
            $("#fnameerr").fadeIn('slow', function(){
                $('#fnameerr').delay(2000).fadeOut(); 
             });
            $("#fnameerr").html("The length should be in between 3 to 10");
            values=false;
        }else{
            $("#fnameerr").hide();
        }
        /* lastname validation */
        if(lname==""){
            $("#lnameerr").fadeIn('slow', function(){
                $('#lnameerr').delay(2000).fadeOut(); 
             });
            $("#lnameerr").html("Last name is required");
            values=false;
        }else if (!(lname.match(/^[a-zA-Z ]*$/))){
            $("#lnameerr").fadeIn('slow', function(){
                $('#lnameerr').delay(2000).fadeOut(); 
             });
            $("#fnameerr").html("Only alphabets allowed");
            values=false;
        }else if(lname.length < 4 || lname.length > 10){
            $("#lnameerr").fadeIn('slow', function(){
                $('#lnameerr').delay(2000).fadeOut(); 
             });
            $("#fnameerr").html("The length should be in between 3 to 10");
            values=false;
        }else{
            $("#lnameerr").hide();
        }
        /* email validation */
        if(email==""){
            $("#emailerr").fadeIn('slow', function(){
                $('#emailerr').delay(2000).fadeOut(); 
             });
            $("#emailerr").html("Email is required");
            values=false;
        }else if (!(email.match(/^[\w\W]*@([\w\W]{3,15}).([\w\W]{2,4})$/))){
            $("#emailerr").fadeIn('slow', function(){
                $('#emailerr').delay(2000).fadeOut(); 
             });
            $("#emailerr").html("Enter a valid email");
            values=false;
        }else if(email.length < 7 || email.length > 120){
            $("#emailerr").fadeIn('slow', function(){
                $('#emailerr').delay(2000).fadeOut(); 
             });
            $("#emailerr").html("The length should be in between 6 to 120");
            values=false;
        }else{
            $("#emailerr").hide();
        }
        /* phone number validation */
        if(phone==""){
            $("#phoneerr").fadeIn('slow', function(){
                $('#phoneerr').delay(2000).fadeOut(); 
             });
            $("#phoneerr").html("Phone number is required");
            values=false;
        }else if(!(phone.match(/[+91]-[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{1}/))){
            $("#phoneerr").fadeIn('slow', function(){
                $('#phoneerr').delay(2000).fadeOut(); 
             });
            $("#phoneerr").html("Only numbers are allowed and follow this formet (+91-xxx-xxx-xxx-x)");
            values=false;
        }else{
            $("#phoneerr").hide();
        }
        /* Address Validation */
        if (!(address.match(/^[a-zA-Z#, ]*$/))){
            $("#addresserr").fadeIn('slow', function(){
                $('#addresserr').delay(2000).fadeOut(); 
             });
            $("#addresserr").html("Only alphabet and special symbol are allowed");
            values=false;
        }else if(address.length < 5 || address.length > 120){
            $("#addresserr").fadeIn('slow', function(){
                $('#addresserr').delay(2000).fadeOut(); 
             });
            $("#addresserr").html("The length should be in between 5 to 500");
            values=false;
        }else{
            $("#addresserr").hide();
        }
        /* course validation */
        if (course==""){
            $("#courseerr").fadeIn('slow', function(){
                $('#courseerr').delay(2000).fadeOut(); 
             });
            $("#courseerr").html("Course is required");
            values=false;
        }else{
            $("#courseerr").hide();
        }
            /*if(course=="10th"){
                $("#sst,#sstlbl").hide();
                $("#sc,#sclbl").hide();
            }
            if(course=="12th"){
                $("#hin,#hinlbl").hide();
                $("#sst,#sstlbl").hide();
            }
            if(course=="BCA"){
                $("#sst,#sstlbl").hide();
                $("#sc,#sclbl").hide();
            }
            if(course=="MCA"){
                $("#hin,#hinlbl").hide();
                $("#sc,#sclbl").hide();
            }*/
        /* subject validation */
            if($('input[type=checkbox]:checked').length < 2){
                $("#subjecterr").fadeIn('slow', function(){
                    $('#subjecterr').delay(2000).fadeOut(); 
                 });
                $("#subjecterr").html("Atleast two subjects are required");
                values=false;
            }else{
                $("#subjecterr").hide();
            }
        /* time validation */
        if (time==""){
            $("#timeerr").fadeIn('slow', function(){
                $('#timeerr').delay(2000).fadeOut(); 
             });
            $("#timeerr").html("Time period is required");
            values=false;
        }else{
            $("#timeerr").hide();
        }
        /* date validation */
        if (date==""){
            $("#dateerr").fadeIn('slow', function(){
                $('#dateerr').delay(2000).fadeOut(); 
             });
            $("#dateerr").html("Date is required");
            values=false;
        }
        if(!(date.match(/^([0-3][0-9])-([0-1][1-9])-([1-9][0-9][0-9][0-9])$/))){
            $("#dateerr").fadeIn('slow', function(){
                $('#dateerr').delay(2000).fadeOut(); 
             });
            $("#dateerr").html("Enter a valid date");
            values=false;
        }else{
            $("#dateerr").hide();
        }
        /* display values */
        if(values==true)
        {
            $("#p1").html("<b>First name : </b>"+fname);
            $("#p2").html("<b>Last name : </b>"+lname);
            $("#p3").html("<b>Email : </b>"+email);
            $("#p4").html("<b>Phone : </b>"+phone);
            $("#p5").html("<b>Address : </b>"+address);
            $("#p6").html("<b>Course : </b>"+course);
            $("#p7").html("<b>Date : </b>"+date);
            var sel_cbox="";
            for(var j=0; j<sub.length; j++)
            {
                if(sub[j].checked==true)
                sel_cbox+=sub[j].value+',';
            }
            $("#p_sub").html("<b>Subjects : </b>"+sel_cbox.substring(0,sel_cbox.length-1));
        }
        return false;
    });
});
