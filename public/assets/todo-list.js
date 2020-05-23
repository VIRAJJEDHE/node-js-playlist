$(document).ready(function () {

  $("form").submit(function (event) {
    let item = $('form input');
    let todo = { item: item.val() };
    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });
    event.preventDefault();
  });

  $('li').on('click', function () {
    let item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });
  });

});
