$(document).ready(function(){
    // telephone mask
    $('#phone').mask('+91-00000-00000');

    //Display add author form
    $("#add_author").click(function(){
        $("#myform").show();
        $("#add_author").hide();
    });
    
    //append add book container
    var i=1;
    $("#add-book").click(function(){
        
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
                </div>
            </div>
            <div class="form-group">
                <label>Published date</label>
                <input type="text" class="form-control bookdate" name="bookdate[${i}]" id="bookdate" placeholder="dd-mm-yyyy">
            </div>
            <div class="form-group">
                <label>ISBN no.</label>
                <input type="text" class="form-control" name="bookISBN[${i}]" id="bookISBN" placeholder="Book number">
            </div>
            <button type="button" class="btn btn-danger btn-lg btn-block remove-btn">Remove</button>
            </div>`;
        
        $("#author-form").append(form);                                //appending book form in author form
        i++;
        $("#add-book").text("Add more books");

        $('.remove-btn').click(function(){                             //removing bookfrom
            $(this).closest(".book").remove();
        });
        $(".bookdate").datepicker({
            dateFormat: "dd-mm-yy",
            changeMonth: true,
            changeYear: true,
        });
    }); 

    //After clicking on submit button
    $("#submit-btn").click(function(){
        if(i==1){                                                      //if no book is added
            alert("Add atleast one book");                                  
        }else
        {                                                              //when one or more books have added
        $( "#myform" ).validate()
        {
            $('[name=name]').rules('add',
            {
                required:true
            });
            $('[name=email]').rules('add',
            {
                required:true
            });
            $('[name=phone]').rules('add',
            {
                required:true
            });
            $('[name*=bookname]').each(function()
            {
                $(this).rules('add',
                {
                    required:true
                });
            });
            $('[name*=bookprice]').each(function()
            {
                $(this).rules('add',
                {
                    required:true
                });
            });
            $('[name*=bookdesc]').each(function()
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
                    required:true
                });
            });
            $('[name*=bookdate]').each(function()
            {
                $(this).rules('add',
                {
                    required:true
                });
            });
            $('[name*=bookISBN]').each(function()
            {
                $(this).rules('add',
                {
                    required:true
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
});



