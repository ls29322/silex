/**
 * Created by Erik on 17/05/2017.
 */
/**
 * Created by Erik on 14/05/2017.
 */
/**
 * Created by Erik on 11/05/2017.
 */
// this is the id of the form
$(".like_form").submit(function(e) {
    e.preventDefault();

    //Check if value is Like or Dislike
    var form_name = $(this).attr('name');
    var form_id = $(this).attr('id');

    //Cojer el mismo id del form para encontrar el input
    //var button = $('input[id='+form_id+']').attr('Value','Like');  --> Setear el valor del boton
    var input_value = $('input[id='+form_id+']').attr('Value');
    var url = "/like/"+input_value+"/"+form_id; // the script where you handle the form input.


    $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        data: $(".comment_form").serialize(), // serializes the form's elements.
        success: function(data)
        {
            var array = $.map(data, function(value, index) {
                return [value];
            });


            //Si estaba en like me devuelve un dislike
            //Dislike = 1
            if(array[0] == 1){
                $('input[class=like_input]').attr('Value','Dislike');
            }else{
                $('input[class=like_input]').attr('Value','Like');
            }
        },
        error: function(error)
        {
            console.log(error);
        }
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});