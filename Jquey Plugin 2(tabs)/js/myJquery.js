/**
 * @description regex add method
 */
$.validator.addMethod("regex",function(value, element, regexp) {
        return this.optional(element) || regexp.test(value);
    },"Please check your input."
);

$( function() {

    // displaying tabs
    $( "#tabs" ).tabs();

    // disable switching
    $('#tabs').tabs('option', 'disabled', [1, 2]);

    // displaying Accordian
    $( "#accordion" ).accordion();

    // datepicker
    $( "#date" ).datepicker({
        changeMonth: true,
        changeYear: true
      });


    // telephone mask
    $('#pn').mask('+00-00000-00000');

    // Color picker
    $("#fc").spectrum({
        color: "#f00",
        showInput: true,
        preferredFormat: "rgb",
    });
    /*$("#fc").change(function(){
        let ar = $("#fc").val();
    });*/
    //$("#fc").show();
    
    

    // return false
    $("#myForm").submit(function(e){
        e.preventDefault();
    

    // On click of Submit tab-0
    $("#submit-0").click(function(){
        // Validating form
        // First Name
        
        $("#myForm").validate({
            rules: {
                name: {
                    required: true,
                    regex: /^[a-z A-Z]{3,30}$/
                },
                pn: {
                    required: true,
                    minlength: 15
                },
                date: {
                    required: true,
                },
                fc: {
                    required: true
                },
                es: {
                    required: true
                },
                ee: {
                    required: true
                }
            },

            messages: {
                name: {
                    required: "Enter First Name",
                    regex: "Name should be 3 to 30 character long"
                },
                pn: {
                    required: "Enter Phone Number",
                    minlength: "Phone should start with 91 and after this 10 dgits long"
                },
                date: {
                    required: "Select Date"
                },
                fc: {
                    required: "Select Color"
                },
                es: {
                    required: "Select Date"
                },
                ee: {
                    required: "Select Date"
                }
            }
        });
        //console.log($('#myForm').valid());
        if(!$('#myForm').valid()) return false;

        // Switching between tabs
        $('#tabs').tabs('option', 'disabled', [0, 2]);
        $('#tabs').tabs( "option", "active", 1 );

        // geting dob
        let dob = $('#date').val();
        let es = moment(dob, "MM-DD-YYYY").add(18, 'years').format('L');
        es = new Date(es);
        
        // Experience Start Datepicker
        $( "#es" ).datepicker({
            changeMonth: true,
            changeYear: true
        });
        $( "#es" ).datepicker( "option", "minDate", es );

        // Experience End Datepicker
        $( "#ee" ).datepicker({
            changeMonth: true,
            changeYear: true
        });
       
        $( "#es" ).change(function(){
            es = $('#es').val();
            ee = moment(es, "MM-DD-YYYY").add(1, 'days').format('L');
            ee = new Date(ee);
            $( "#ee" ).datepicker( "option", "minDate", ee );
        });

        // On click of Submit
        $("#submit-1").click(function(){

            //console.log($('#myForm').valid());
            if(!$('#myForm').valid()) return false;

            // Switching between tabs
            $('#tabs').tabs('option', 'disabled', [0,1]);
            $('#tabs').tabs( "option", "active", 2 );

            // Finding experience
            es = $('#es').val();
            ee = $('#ee').val();
    
            var From_date = new Date(es);
            var To_date = new Date(ee);
            var diff_date =  To_date - From_date;
            
            var years = Math.floor(diff_date/31536000000);
            var months = Math.floor((diff_date % 31536000000)/2628000000);
            var days = Math.floor(((diff_date % 31536000000) % 2628000000)/86400000);

            // Displaying data in tab-3
            let i =1;
            var form_data=$("#myForm").serializeArray();
            for (var input in form_data){
                var element=form_data[input]['value'];
                $("#get"+i).text(element); 
                i++;
            }
            $("#exp").html("<b>"+years+"</b> year(s) <b>"+months+"</b> month(s) <b>"+days+"</b> and day(s)")
            
        });

        
    });

    });

    
   

});


