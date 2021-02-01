$(document).ready(function(){
    var image = $('#image');
    $("#icon1").click(function(){
        image.attr("src", "images/img1.webp");
        $("#Modal").modal('show');
    });
    $("#icon2").click(function(){
        image.attr("src", "images/img2.webp");
        $("#Modal").modal('show');
    });
    $("#icon3").click(function(){
        image.attr("src", "images/img3.webp");
        $("#Modal").modal('show');
    });
    $("#icon4").click(function(){
        image.attr("src", "images/img4.webp");
        $("#Modal").modal('show');
    });
    $("#crop").click(function(){                                 //crop image
        image.cropper("setDragMode","crop");
    });
    /* var canvas;
    $("#crop").click(function(){                                 //crop image
        image.cropper("setDragMode","crop");
        
        data = image.getData();
        canvas = image.getCroppedCanvas({data});
        $("#croped").html(canvas);
        console.log(data);
    });
    $("#save").click(function(){
        $("#croped").html(canvas);
    }); */
    $("#zoomin").click(function(){                               //zoom in
        image.cropper("zoom","0.1");
    });
    $("#zoomout").click(function(){                              //zoom out
        image.cropper("zoom","-0.1");
    });
    $("#lrotate").click(function(){                              //rotate left
        image.cropper("rotate","-45");
    });
    $("#rrotate").click(function(){                              //rotate right
        image.cropper("rotate","45");
    });
    $("#reset").click(function(){                                //reset changes
        image.cropper("reset");
    });
    var cropper = image.data('cropper');

    });