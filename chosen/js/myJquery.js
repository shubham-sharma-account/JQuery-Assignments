/**
 * @description regex add method
 */
$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        return this.optional(element) || regexp.test(value);
    },"Please check your input."
);
/**
 * @description validating form using jQuery
 */

$(document).ready(function() {

    // multiple choosen
    $(".chosen-select").chosen({no_results_text: "Oops, nothing found!"}); 

    // changing subjects acc. to class
    $("#course").change(function(){
        var input=$("#course").val();
        if(input == "10th"){
            let ten = '<input type="checkbox" id="Hindi" class="sub" name="sub" value="Hindi"> <label for="Hindi">Hindi</label> &nbsp;';
            ten += '<input type="checkbox" id="English" class="sub" name="sub" value="English"> <label for="English">English</label> &nbsp;';
            ten += '<input type="checkbox" id="Science" class="sub" name="sub" value="Science"> <label for="Science">Science</label> &nbsp;';
            ten += '<input type="checkbox" id="Math" class="sub" name="sub" value="Math">  <label for="Math">Math</label>' ;
            $("#ten").html(ten);
        }
        else if(input == "12th"){
            let ten = '<input type="checkbox" id="Physics" class="sub" name="sub" value="Physics" > <label for="Physics">Physics</label> &nbsp';
            ten += '<input type="checkbox" id="Chemistry" class="sub" name="sub" value="Chemistry" ><label for="Chemistry">Chemistry</label> &nbsp;';
            ten += '<input type="checkbox" id="c" class="sub" name="sub" value="C"> <label for="c">C</label> &nbsp;';
            ten += '<input type="checkbox" id="CPP" class="sub" name="sub" value="CPP"> <label for="CPP">CPP</label>' ;
            $("#ten").html(ten);
        }
    });

    // datepicker
    
    $('#date').datepicker({
        minDate: 0,
        beforeShowDay: function( date ) {
            var day = date.getDay();
            var dat = date.getDate();
            if( day == 2  || dat == 10) {
                return [true,"event"];
            }
            else {
                return [true];
            }
        }
    });
    $( "#date" ).datepicker( $.datepicker.regional[ "en" ] );
    $( "#locale" ).on( "change", function() {
      $( "#date" ).datepicker( "option",
        $.datepicker.regional[ $( this ).val() ] );
    });

    // slider
    var select = $( "#time_per" );
    var slider = $( "<div id='slider' name='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 4,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      }
    });
    $( "#time_per" ).on( "change", function() {
      slider.slider( "value", this.selectedIndex+" day" );
    });

    // return false
    $("#myForm").submit(function(e){
        e.preventDefault();
      });

    // On click of Submit
    $("#submit").click(function(){
        // Validating form
        // First Name
        
        $("#myForm").validate({
            rules: {
                txt_fn: {
                    required: true,
                    regex: /^[a-zA-Z]{3,10}$/
                },
                txt_ln: {
                    required: true,
                    regex: /^[a-zA-Z]{3,10}$/
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 6,
                    maxlength: 120
                },
                pn: {
                    required: true,
                    regex: /[\+91][\-](\d{5})[\-](\d{5})/
                },
                address: {
                    required: true,
                    regex: /^[a-z0-9\s,'-()]{5,500}$/i
                }, 
                course: {
                    required: true,
                },
                sub: {
                    required: true,
                    minlength: 2
                },
                slider: {
                    required: true,
                    min: 1
                },
                time_per: {
                    required: true,
                    min: 1
                },
                slider: {
                    range: [1, 4]
                },
                date: {
                    required: true,
                }
            },

            messages: {
                txt_fn: {
                    required: "Enter First Name",
                    regex: "First Name should 3 to 10 character long"
                },
                txt_ln: {
                    required: "Enter Last Name",
                    regex: "Last Name should 3 to 10 character long"
                },
                email: {
                    required: "Enter your Email",
                    email: "Your email address must be in the format of name@domain.com"
                },
                pn: {
                    required: "Enter Phone Number",
                    regex: "Format should be +91-XXXXX-XXXXX"
                },
                address: {
                    required: "Enter Address",
                    regex: "Address should be 5 to 500 digits long and only have ,.'-()special characters"
                },
                course: {
                    required: "Select Course",
                },
                sub: {
                    required: "Select atleast two Subjects",
                    minlength: "Select atleast two Subjects"
                },
                time_per: {
                    required: "Slide slider"
                },
                date: {
                    required: "Select Date"
                }
            }
          });


          // valid
          if( !$('#myForm').valid()) return false;

        // Subjects

        var sub = ($("input[name=sub]:checked").map(function() {
            return this.value;
        }).get().join(","));

          
        
          /// copying the data 
        
            let i =1;
            var form_data=$("#myForm").serializeArray();
            for (var input in form_data){
                var element=form_data[input]['value'];
                if((form_data[input]['name'] == "sub")){
                    $("#get_sub").text(sub);
                }
                else{
                    $("#get"+i).text(element); 
                    i++;
                }
            }

            
          
           
    });   
    
});
