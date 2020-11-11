$(document).ready(function() {
    $('#contact-submit').on('click', function() {
        var title = $('#title').val();
        var message = $('#message').val();
        if (title != '' && message != '') {
            alert("Gửi thông báo thành công");
        }
    });
});