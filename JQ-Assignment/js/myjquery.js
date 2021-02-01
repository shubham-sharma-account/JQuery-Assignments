$(document).ready(function(){
    //pnotify
    $('.pnotify').css('display','none');

    // telephone mask
    $('#phone').mask('+91-00000-00000');

    //Display add author form
    $("#add_author").click(function(){
        $("#myform").show();
        $("#add_author").hide();
    });
    
    //append, Add Book form
    var i=1;
    $("#add-book").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        if(name.length == ""){
            setNotify("Empty author form","Author name is required"); 
        }else if(email.length == ""){
            setNotify("Empty author form","Author email is required"); 
        }else if(phone.length == ""){
            setNotify("Empty author form","Phone number is required"); 
        }else{
            var form = `<div id="book${i}" class="book">
                <hr>
                <label><h4>Book form</h4></label>
                    <div class="form-group">
                        <label >Book name</label>
                        <input type="text" class="form-control" name="bookname[${i}]" id="bookname" placeholder="Book name">
                    </div>
                    <div class="form-group">
                        <label>Book Price</label>
                        <input type="text" class="form-control" name="bookprice[${i}]" id="bookprice${i}" placeholder="Book price">
                    </div>

                <div class="form-group">
                    <label>Book Description</label>
                    <textarea class="form-control bookdesc${i}" name="bookdesc[${i}]" id="bookdesc" placeholder="Description"></textarea>
                </div>
                <div id="c_box_div">
                    <label>Book level<label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="book_cbox[${i}]" id="checkbox1" value="Ordinary">
                        <label class="form-check-label" for="defaultCheck1">
                            Ordinary
                        </label>

                        <input class="form-check-input" type="checkbox" name="book_cbox[${i}]" id="checkbox" value="High">
                        <label class="form-check-label" for="defaultCheck1">
                            High
                        </label>

                        <input class="form-check-input" type="checkbox" name="book_cbox[${i}]" id="checkbox" value="Low">
                        <label class="form-check-label" for="defaultCheck1">
                            Low
                        </label>
                        <label for="book_cbox[${i}]" class="error" style="display:none"></label>
                    </div>
                </div>
                <div class="form-group">
                    <label>Published date</label>
                    <input type="text" class="form-control bookdate${i}" name="bookdate[${i}]" id="bookdate${i}" placeholder="dd-mm-yyyy">
                </div>
                <div class="form-group">
                    <label>ISBN no.</label>
                    <input type="text" class="form-control" name="bookISBN[${i}]" id="bookISBN" placeholder="Book number">
                </div>
                <button type="button" class="btn btn-danger btn-lg btn-block remove-btn">Remove</button>
                </div>`;
            
            $("#author-form").append(form);                                //appending book form in author form
            
            $("#add-book").text("Add more books");

            $('.remove-btn').click(function(){                             //removing bookfrom
                $(this).closest(".book").remove();
            });
            $(".bookdate"+i).datepicker({                                  //add datepicker
                dateFormat: "dd-mm-yy",
                changeMonth: true,
                changeYear: true,
            });
            i++;
        }
    }); 

    //After clicking on submit button
    $("#submit-btn").click(function(){
        if(i==1){                                                      //if no book is added
            setNotify("Book not added","Add atleast one book");                             
        }else{                                                              //when one or more books have added
            $( "#myform" ).validate()
            {
                $('input[name=name]').rules('add',                         //Author name validation
                {
                    required:true
                });
                $('input[name="name"]').rules('add', {
                    messages: {
                        required: "Name is required"
                    }
                });
                $('[name=email]').rules('add',                             //Author email validation
                {
                    required:true
                });
                $('input[name="email"]').rules('add', {
                    messages: {
                        required: "Email is required"
                    }
                });
                $('[name=phone]').rules('add',                             //Author phone validation
                {
                    required:true
                });
                $('input[name="phone"]').rules('add', {                    
                    messages: {
                        required: "Phone number is required"
                    }
                });
                $('[name*=bookname]').each(function()                       //Book name validation
                {
                    $(this).rules('add',
                    {
                        required:true
                    });
                });
                $('[name*=bookname]').each(function()
                {
                    $(this).rules('add',
                    {
                        messages: {
                            required: "Book name is required"
                        }
                    });
                });
                $('[name*=bookprice]').each(function()                      //Book price validation
                {
                    $(this).rules('add',
                    {
                        required:true,
                        number: true
                    });
                });
                $('[name*=bookprice]').each(function()                      
                {
                    $(this).rules('add',
                    {
                        messages: {
                            required:"Book price is required",
                            number:"Only numbers are allowed"
                        }
                    });
                });
                $('[name*=bookdesc]').each(function()                       //Book description validation
                {
                    $(this).rules('add',
                    {
                        required:true,
                        minlength:5,
                        maxlength:500
                    });
                });
                $('[name*=bookdesc]').each(function()
                {
                    $(this).rules('add',
                    {
                        messages: {
                            required:"Book description is required",
                            minlength:"Atleast 5 characters are required",
                            maxlength:"Only 500 characters are allowed"
                        }
                    });
                }); 
                $('[name*=book_cbox]').each(function()                      //Book level validation
                {
                    $(this).rules('add',
                    {
                        required:true
                    });
                });
                $('[name*=book_cbox]').each(function()
                {
                    $(this).rules('add',
                    {
                        messages: {
                            required:"Book level is required"
                        }
                    });
                });
                $('[name*=bookdate]').each(function()                      //Published date validation
                {
                    $(this).rules('add',
                    {
                        required:true
                    });
                });
                $('[name*=bookdate]').each(function()
                {
                    $(this).rules('add',
                    {
                        messages: {
                            required:"Published date is required"
                        }
                    });
                });
                $('[name*=bookISBN]').each(function()                      //ISBN number validation
                {
                    $(this).rules('add',
                    {
                        required:true,
                        number: true,
                        maxlength:5
                    });
                });
                $('[name*=bookISBN]').each(function()
                {
                    $(this).rules('add',
                    {
                        messages: {
                            required:"ISBN number is required",
                            number:"Only numbers are allowed",
                            maxlength:"Maximum length should be 5 digits"
                        }
                    });
                });
                
            }
            if($("#myform").valid())                                         //check from is valid or not
            {
                var name = $("#name").val();
                var email = $("#email").val();
                var phone = $("#phone").val();
                var books = i-1;
                var tableRow = "<tr><td>" + name + "</td><td>" + email + "</td><td>" + phone + "</td><td>" + books + "</td></tr>";

                $("table tbody").append(tableRow);                          //inserting author details into table                         

                for(var j=1; j<i; j++)                                      //consoling Books details
                {
                    var bookname = $("input[name='bookname["+j+"]']").val();
                    var bookprice = $("input[name='bookprice["+j+"]']").val();
                    var bookdesc = $(".bookdesc"+j).val();
                    var sub = $("input[name='book_cbox["+j+"]']");
                    var sel_cbox="";
                    for(var k=0; k<sub.length; k++)
                    {
                        if(sub[k].checked==true)
                        sel_cbox=sub[k].value;
                    }
                    checkbox=sel_cbox;
                    var bookdate = $("input[name='bookdate["+j+"]']").val();
                    var bookISBN = $("input[name='bookISBN["+j+"]']").val();

                    console.log("***********************Information of book"+j+"**************************");
                    console.log("Book"+j+" name is: "+bookname);
                    console.log("Book"+j+" price is: "+bookprice);
                    console.log("Book"+j+" description is: "+bookdesc);
                    console.log("Book"+j+" level is: "+checkbox);
                    console.log("Book"+j+" published date is: "+bookdate);
                    console.log("Book"+j+" ISBN number is: "+bookISBN);
                } 
                $("#myform")[0].reset();          //Clear allform
                $("#myform").hide();
                $("#add_author").show();
            }
        }
    });
    function setNotify(title1,text1)                                //pnotify function
		{
		    new PNotify.error(
			{
			    title: title1,
				text: text1
			});
		}
});



