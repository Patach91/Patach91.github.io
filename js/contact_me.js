$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(){},submitSuccess:function(t,e){$("#btnSubmit").attr("disabled",!0),e.preventDefault();var s=$("input#name").val(),a=$("input#email").val(),n=$("input#phone").val(),r=$("textarea#message").val(),c=s;c.indexOf(" ")>=0&&(c=s.split(" ").slice(0,-1).join(" ")),$.ajax({url:"././mail/contact_me.php",type:"POST",data:{name:s,phone:n,email:a,message:r},cache:!1,success:function(){$("#btnSubmit").attr("disabled",!1),$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contactForm").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry "+c+", it seems that my mail server is not responding. Please try again later!"),$("#success > .alert-danger").append("</div>"),$("#contactForm").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(t){t.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")});