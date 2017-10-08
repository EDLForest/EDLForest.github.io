jQuery(document).ready(function($){

    console.log("projectInfoCollapse started");
    $(".proj-learn-more").click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        //console.log(target);
        $(".proj-info").each(function() {
    //        console.log($(this).attr("id"));
            if("#" + $(this).attr("id") == target) {
                $(this).slideToggle(500);
                //console.log("showing" + $(this).attr("id"));
            }
            else {
                $(this).slideUp(500);
            }
        });
    });
    
});
