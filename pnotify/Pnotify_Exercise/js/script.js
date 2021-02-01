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
        $('.pnotify').css('display','none');
        
        /* firstname validation */
        if(fname==""){
            setNotify( 'First Name Error','Firstname is required');
            values=false;
        }
        else if (!(fname.match(/^[a-zA-Z ]*$/))){
            setNotify( 'First Name Error','Only alphabets are allowed');
            values=false;
        }else if(fname.length < 4 || fname.length > 10){
            setNotify( 'First Name Error','The length should be in between 3 to 10');            
            values=false;
        }
        /* lastname validation */
        if(lname==""){
            setNotify( 'Last Name Error','Lastname is required');
            values=false;
        }else if (!(lname.match(/^[a-zA-Z ]*$/))){
            setNotify( 'Last Name Error','Only alphabets are allowed');
            values=false;
        }else if(lname.length < 4 || lname.length > 10){
            setNotify( 'Last Name Error','The length should be in between 3 to 10');
            values=false;
        }
        /* email validation */
        if(email==""){
            setNotify( 'Email Error','Email is required');
            values=false;
        }else if (!(email.match(/^[\w\W]*@([\w\W]{3,15}).([\w\W]{2,4})$/))){
            setNotify( 'Email Error','Enter a valid email');
            values=false;
        }else if(email.length < 7 || email.length > 120){
            setNotify( 'Email Error','The length should be in between 6 to 120');
            values=false;
        }
        /* phone number validation */
        if(phone==""){
            setNotify( 'Phone number Error','Enter a valid phone number');
            values=false;
        }else if(!(phone.match(/[+91]-[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{1}/))){
            setNotify( 'Phone number Error','Only numbers are allowed and follow this formet (+91-xxx-xxx-xxx-x)');
            values=false
        }
        /* Address Validation */
        if (!(address.match(/^[a-zA-Z#, ]*$/))){
            setNotify( 'Address Error','Only alphabets are allowed');
            values=false;
        }else if(address.length < 5 || address.length > 120){
            setNotify( 'Address Error','The length should be in between 5 to 500');
            values=false;
        }
        /* course validation */
        if (course==""){
            setNotify( 'Course Error','Course is required');
            values=false;
        }
        /* subject validation */
            if($('input[type=checkbox]:checked').length < 2){
                setNotify( 'Subject Error','Atleast two subjects are required');
                values=false;
            }else{
                $("#subjecterr").hide();
            }
        /* time validation */
        if (time==""){
            setNotify( 'Time Error','Time is required');
            values=false;
        }else{
            $("#timeerr").hide();
        }
        /* date validation */
        if (date==""){
            setNotify( 'Date Error','Date is required');
            values=false;
        }else if(!(date.match(/^([0-3][0-9])-([0-1][1-9])-([1-9][0-9][0-9][0-9])$/))){
            setNotify( 'Date Error','Enter a valid date');
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
        function setNotify(title1,text1)
		{
		    new PNotify.error(
			{
			    title: title1,
				text: text1
			});
		}
    });
});
