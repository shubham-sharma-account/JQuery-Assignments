$(document).ready(function(){
    $("button").click(function(){
        var fname=$("#fname").val();
        var lname=$("#lname").val();
        var email=$("#email").val();
        var phone=$("#phnum").val();
        var address=$("#address").val();
        var course=$("#course").val();
        var sub=$("input[name=subject]");
        var date=$("#date").val();

        var formdata = $("#myform");

        /* fname, lname validation */
        $.validator.addMethod("only_alpha", function(value, element){
            return (value.match(/^[a-zA-Z ]*$/));
        }, "Only alphabets are allowd");

        /* phone number validation */
        $.validator.addMethod("phone_pattern", function(value, element){
            return (value.match(/[+91]-[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{1}/));
        }, "follow this formet (+91-xxx-xxx-xxx-x)");        

        /* Date valdation*/
        $.validator.addMethod("valid_date", function(value, element){
            return (value.match(/^([0-1][1-9])[/]([0-3][0-9])[/]([1-9][0-9][0-9][0-9])$/));
        }, "Enter a valid date");

        if(formdata.length){
            formdata.validate({
                rules:{
                    firstname:{
                        required:true,
                        only_alpha:true,
                        minlength:3,
                        maxlength:10
                    },
                    lastname:{
                        required:true,
                        only_alpha:true,
                        minlength:3,
                        maxlength:10
                    },
                    email:{
                        required:true,
                        email:true,
                        minlength:7,
                        maxlength:120
                    },
                    phoneno:{
                        required:true,
                        phone_pattern:true
                    },
                    address:{
                        required:true,
                        minlength:7,
                        maxlength:500
                    },
                    course:{
                        required:true
                    },
                    subject:{
                        required:true,
                        minlength:2
                    },
                    date:{
                        required:true,
                        valid_date:true
                    }
                },
                messages:{
                    firstname:{
                    required:"Firstname is required",
                    minlength:"Minimum 3 are required",
                    maxlength:"Maximum 10 are allowed"
                    },
                    lastname:{
                    required:"Lastname is required",
                    minlength:"Minimum 3 are required",
                    maxlength:"Maximum 10 are allowed"
                    },
                    email:{
                    required:"Email is required",
                    email:"Enter valid email",
                    minlength:"Minimum 7 are required",
                    maxlength:"Maximum 120 are allowed"
                    },
                    phoneno:{
                        required:"Number is required"
                    },
                    address:{
                        required:"Address is required",
                        minlength:"Minimum 7 are required",
                        maxlength:"Maximum 120 are allowed"
                    },
                    course:{
                        required:"Course is required"
                    },
                    subject:{
                        required:" Subject is required"
                    },
                    date:{
                        required:"Date is required"
                    }
                },
                errorPlacement: function(error, element){
                    if(element.is(":checkbox")){
                        error.appendTo(element.parents(".subjects"));
                    }else{
                        error.insertAfter(element);
                    }
                }
            })
        }
        if(!(date.length == 0)){
            $("#p1").html("<b>First name : </b>"+fname);
            $("#p2").html("<b>Last name : </b>"+lname);
            $("#p3").html("<b>Email : </b>"+email);
            $("#p4").html("<b>Phone : </b>"+phone);
            $("#p5").html("<b>Address : </b>"+address);
            $("#p6").html("<b>Course : </b>"+course);
            $("#p7").html("<b>Time : </b>"+$("#amount").val()+"Day");
            $("#p8").html("<b>Date : </b>"+date);
            var sel_cbox=[];
            var comma=0;
            for(var j=0;j<sub.length;j++){
                if(sub[j].checked==true){
                    sel_cbox[comma]=sub[j].value;
                    comma++;
                }
            }
            $("#p_sub").html("<b>Subjects : </b>"+sel_cbox.join(","));
        }
    })
});