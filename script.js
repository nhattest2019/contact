
$(function () {
    $("#form-email").validate({
        rules: {
            subject: "required",
            email: {
                required: true,
                email: true
            },
        },

        messages: {

            subject: "Không được bỏ trống",
            email: "Vui lòng nhập email hợp lệ",
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
})
