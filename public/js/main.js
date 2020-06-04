$(document).ready(function () {
    $('.delete-task').on('click', function (e) {
         $target = $(e.target);
         const id = $target.attr('data-id');
        // console.log($target.attr('data-id'));
         $.ajax({
             type: 'DELETE',
             url: '/tarefas/'+ id,
             success: function(res){
                 //alert('Deleting task');
                 window.location.href='/';
             },
             error: function (err) {
                 console.log(err);
             }
         });
    });
});