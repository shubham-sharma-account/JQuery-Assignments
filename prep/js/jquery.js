$(function(){
    $( "#tabs" ).tabs();
    
    $('#tabs').tabs('option', 'disabled', [1, 2]);

    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true
        });
    });

    $("#date").datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
    });

    // telephone mask
    $('#phone').mask('+91-00000-00000');

    $("#color").spectrum({
        showInput: true,
    });

    $( function() {
        var icons = {
        header: "ui-icon-triangle-1-e",
        activeHeader: "ui-icon-triangle-1-s"
        };
        $( "#accordion" ).accordion({
        icons: icons
        });
        $( "#toggle" ).button().on( "click", function() {
        if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
            $( "#accordion" ).accordion( "option", "icons", null );
        } else {
            $( "#accordion" ).accordion( "option", "icons", icons );
        }
        });
    });

    $("#form1").submit(function(e){
        e.preventDefault();

        $("#submit_btn").click(function(){
                $("#form1").validate({
                    rules:{
                        uname:{
                            required:true
                        },
                        phone:{
                            required:true
                        },
                        dob:{
                            required:true
                        },
                        color:{
                            required:true
                        },
                        start_date:{
                            required:true
                        },
                        end_date:{
                            required:true
                        }
                    },
                    messages:{
                        uname:{
                            required:"Name is required"
                        },
                        phone:{
                            required:"Phone is required"
                        },
                        dob:{
                            required:"Date of Birth is required"
                        },
                        color:{
                            required:"Color is required"
                        },
                        start_date:{
                            required:"Experience start date is required"
                        },
                        end_date:{
                            required:"Experience end date is required"
                        }
                    }
                });
            if(!$('#form1').valid()) return false;

            $('#tabs').tabs('option', 'disabled', [0, 2]);
            $('#tabs').tabs( "option", "active", 1 );

            let dob = $('#date').val();
            let start_date = moment(dob, "dd-mm-yyyy").add(18, 'years').format('L');
            start_date = new Date(start_date);

            $( "#start_date" ).datepicker({
                changeMonth: true,
                changeYear: true
            });
            $( "#start_date" ).datepicker( "option", "minDate", start_date );

            $("#end_date").datepicker({
                changeMonth: true,
                changeYear: true
            });

            $( "#start_date" ).change(function(){
                start_date = $('#start_date').val();
                end_date = moment(start_date, "MM-DD-YYYY").add(1, 'days').format('L');
                end_date = new Date(end_date);
                $( "#end_date" ).datepicker( "option", "minDate", end_date );
            });

            $("#show_data_btn").click(function(){

        
                // Make active 2nd tab
                $('#tabs').tabs('option', 'disabled', [0,1]);
                $('#tabs').tabs( "option", "active", 2 );
            });

            //Display All form data
            console.log($("#uname").val());
        });
    });
});