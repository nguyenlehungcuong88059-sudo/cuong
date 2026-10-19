
document.addEventListener('DOMContentLoaded', () => {
    const formLienHe = document.querySelector('.contact-form');

    if (!formLienHe) {
        return;
    }

    formLienHe.addEventListener('submit', event => {
        event.preventDefault();

        const name = formLienHe.querySelector('#ho-ten');
        const phone = formLienHe.querySelector('#so-dien-thoai');
        const message = formLienHe.querySelector('#noi-dung');
        const formMessage = document.getElementById('form-message');
        const phoneValue = phone.value.replace(/[\s-]/g, '');

        if (!/^0\d{9}$/.test(phoneValue)) {
            alert('Vui lòng nhập số điện thoại Việt Nam gồm 10 chữ số.');
            phone.focus();
            return;
        }

        if (!message.value.trim()) {
            alert('Vui lòng nhập nội dung cần hỗ trợ.');
            message.focus();
            return;
        }

        if (formMessage) {
            formMessage.textContent = 'Cảm ơn ' + name.value.trim() + '! Đây là biểu mẫu minh họa nên yêu cầu chưa được gửi. Vui lòng gọi hotline để được hỗ trợ.';
        }
        formLienHe.reset();
    });

    formLienHe.addEventListener('input', () => {
        const formMessage = document.getElementById('form-message');
        if (formMessage) {
            formMessage.textContent = '';
        }
    });
});