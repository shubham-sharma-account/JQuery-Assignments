$(document).ready(function(){
    $("#startDate").datepicker({                                  //add datepicker
        changeMonth: true,
        changeYear: true,
    });
    $("#endDate").datepicker({                                  //add datepicker
        changeMonth: true,
        changeYear: true,
    });
    $( "#endDate" ).change(function(){
        startDate = $('#startDate').val();
        endDate = moment(startDate, "MM-DD-YYYY").add(1, 'days').format('L');
        endDate = new Date(endDate);
        $( "#endDate" ).datepicker( "option", "minDate", endDate );
    });
    var employee_array = [
        {name: "Shubham", email: "Shubham@gmail.com", phone: 8336457235},
        {name: "Rajat", email: "Rajat@gmail.com", phone: 9376457235},
        {name: "Harsimran", email: "Harsimran@gmail.com", phone: 9636457733},
        {name: "Vikas", email: "Vikas@gmail.com", phone: 6336458833},
        {name: "Vishwjeet", email: "Vishwjeet@gmail.com", phone: 8267458833},
    ];
    var hotel_address = [
        {name: "Mayura", address: "Bhagat Singh Rd, Ram Nagar, Saharanpur, Uttar Pradesh 247001"},
        {name: "Solitaire", address: "Gandhi Ashram, Clock Tower, opp, Saharanpur, Uttar Pradesh 247001"},
        {name: "Landmark", address: "Gurudwara Rd,  Saharanpur, Uttar Pradesh 247001"},
        {name: "Punjab", address: "2A/1501, Post Office Rd, Bijopuri, Saharanpur, Uttar Pradesh 247001"}
    ];
    var empName = $("#empName");
    var empEmail = $("#empEmail");
    var empPhone = $("#empPhone");
    
    $("#employee").change(function(e){
        /**
         * @description finding employee from array
         */
        const findEmp = employee_array.find((emp) => {
            return emp.name === e.target.value;
        });
        var employee = $("#employee").val();     //Employee select box val

        /**
         * @description insert deatails of employee 
         */
        function input_val(){
            empName.val(findEmp.name);
            empEmail.val(findEmp.email);
            empPhone.val(findEmp.phone);
        }
        if(employee == "Shubham"){
            input_val();
        }else if(employee == "Rajat"){
            input_val();
        }else if(employee == "Harsimran"){
            input_val();
        }else if(employee == "Vikas"){
            input_val();
        }else if(employee == "Vishwjeet"){
            input_val();
        }
    });
    $("#hotels").change(function(e){
        function initMap(latitude,longitude,color)
        {
            var options = {
                center: { lat: latitude, lng: longitude }, 
                zoom: 18
            }
            var map = new google.maps.Map(document.getElementById("map"),options);

            var marker = new google.maps.Marker({
                icon: {
                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                    strokeColor: color,
                    scale: 5
                },
                position:{lat: latitude, lng: longitude },
                map:map
            });
        }
        /**
         * @description finding address of hotel from array
         */
        const findHotel = hotel_address.find((hotel) => {
            return hotel.name === e.target.value;
        });
        var hotel_name = $("#hotels").val();
        if(hotel_name == "Mayura"){
            $("#hotelAddress").html(findHotel.address);
            initMap(29.9654,77.5460,"black");
        }else if(hotel_name == "Solitaire"){
            $("#hotelAddress").html(findHotel.address);
            initMap(29.9639,77.5468,"red");
        }else if(hotel_name == "Landmark"){
            $("#hotelAddress").html(findHotel.address);
            initMap(29.9653,77.5403,"yellow");
        }else if(hotel_name == "Punjab"){
            $("#hotelAddress").html(findHotel.address);
            initMap(29.9609,77.5448,"blue");
        }
    });
});