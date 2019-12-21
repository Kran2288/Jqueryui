$(function() {
  var out = "";
  out +=
    '<div id="accordion">\
		<h3>Секция 1</h3>\
		<div>\
			<p>Первый сектор аккордеона</p>\
		</div>\
		<h3>Секция 2</h3>\
		<div>\
			<p>Второй сектор аккордеона</p>\
		</div>\
		<h3>Секция 3</h3>\
		<div>\
			<p>Третий сектор аккордеона</p>\
		</div>\
		<h3>Секция 4</h3>\
		<div>\
			<p>Четвертый сектор аккордеона</p>\
		</div>\
	</div>';
  out += '<div id="draggable">\
	<p>Перетаскиваемый элемент</p>\
  </div>';
  $("body").html(out);

  $("#accordion").accordion();
  $("#draggable").draggable();
});
