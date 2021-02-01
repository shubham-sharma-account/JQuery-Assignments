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
        var container = document.createElement("div");                      //adding book form container
        container.id="book"+i;
        
        var line = document.createElement("hr");
        var txt1 = "Book From";

        var bookname1 = document.createElement("input");                    //Bookname inputBox
        bookname1.name="bookname"+i;
        bookname1.id="bookname";
        bookname1.placeholder="Book name";

        var bookprice1 = document.createElement("input");                   //BookPrice inputBox
        bookprice1.name="bookprice"+i;
        bookprice1.id="bookprice1";
        bookprice1.placeholder="Book price";

        var bookdesc1 = document.createElement("textarea");                 //BookDescription inputBox
        bookdesc1.name="bookdesc"+i;
        bookdesc1.classList="bookdesc"+i;
        bookdesc1.id="bookdesc";
        bookdesc1.placeholder="Description";

        var book_cbox1 = document.createElement("input");                   //BookLevel checkBox1
        book_cbox1.name="book_cbox"+i;
        book_cbox1.type="checkbox";
        book_cbox1.id="checkbox1";
        book_cbox1.value="Ordinary";

        var book_cbox2 = document.createElement("input");                   //BookLevel checkBox2
        book_cbox2.name="book_cbox"+i;
        book_cbox2.type="checkbox";
        book_cbox2.id="checkbox";
        book_cbox2.value="High";

        var book_cbox3 = document.createElement("input");                   //BookLevel checkBox3
        book_cbox3.name="book_cbox"+i;
        book_cbox3.type="checkbox";
        book_cbox3.id="checkbox";
        book_cbox3.value="Low";

        var c_box_div = document.createElement("div");                      //checkboxs div 
        c_box_div.id="c_box_div";
        c_box_div.append(book_cbox1,book_cbox2,book_cbox3)                  //appending checkboxs to div 

        var bookdate1 = document.createElement("input");                    //BookPublished_Date inputBox
        bookdate1.name="bookdate"+i;
        bookdate1.id="bookdate";
        bookdate1.placeholder="dd-mm-yyyy";

        //datepicker 
        $(bookdate1).datepicker({
            dateFormat: "dd-mm-yy",
            changeMonth: true,
            changeYear: true,
        });

        var bookISBN1 = document.createElement("input");                    //BookISBN inputBox
        bookISBN1.name="bookISBN"+i;
        bookISBN1.id="bookISBN";
        bookISBN1.placeholder="Book number";

        var remove_btn = document.createElement("button");                  //BookForm remove button
        remove_btn.classList="remove-btn";
        remove_btn.id="remove-btn"+i;
        remove_btn.addEventListener('click', remove);

        container.append(txt1,line,bookname1,bookprice1,bookdesc1,c_box_div,bookdate1,bookISBN1,remove_btn);    //appending all elements
        $("#author-form").append(container);                                //appending book form in author form
        i++;

        $(remove_btn).text("Remove");                                       //inputBox labels
        $(bookname1).before("<span>Book name:</span>");
        $(bookprice1).before("<span>Book price:</span>");
        $(bookdesc1).before("<span>Description:</span>");
        $(c_box_div).before("<span>Book level:</span>");

        $(book_cbox1).after("<span>Ordinary</span>");
        $(book_cbox2).after("<span>High</span>");
        $(book_cbox3).after("<span>Low</span>");

        $(bookdate1).before("<br><span>Published date: </span>");
        $(bookISBN1).before("<span><br>ISBN num:</span>");
        $("#add-book").text("Add more books");
    }); 

    //After clicking on submit button
    $("#submit-btn").click(function(){

        
        /* var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var books = i-1;
        var tableRow = "<tr><td>" + name + "</td><td>" + email + "</td><td>" + phone + "</td><td>" + books + "</td></tr>";

        $("table tbody").append(tableRow);                          //inserting author details into table                         

        for(var j=1; j<i; j++)                                      //consoling Books details
        {
            var bookname = $("input[name=bookname"+j+"]").val();
            var bookprice = $("input[name=bookprice"+j+"]").val();
            var bookdesc = $(".bookdesc"+j).val();
            var sub = $("input[name=book_cbox"+j+"]");
            var sel_cbox="";
            for(var k=0; k<sub.length; k++)
            {
                if(sub[k].checked==true)
                sel_cbox=sub[k].value;
            }
            checkbox=sel_cbox;
            var bookdate = $("input[name=bookdate"+j+"]").val();
            var bookISBN = $("input[name=bookISBN"+j+"]").val();

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
        $("#add_author").show(); */
    });

    //Removing book form
    function remove(e)
    {
        e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
    } 

});



