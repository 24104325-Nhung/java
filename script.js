// Hàm cập nhật hình ảnh hiển thị
function upUpdate(previewPic) {
    console.log("Sự kiện kích hoạt trên ảnh:", previewPic.alt); // Yêu cầu 9a
    
    const displayDiv = document.getElementById('image-display');
    displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
    displayDiv.innerHTML = previewPic.alt;
}

// Hàm khôi phục lại trạng thái ban đầu
function unDo() {
    const displayDiv = document.getElementById('image-display');
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Di chuột hoặc sử dụng phím Tab để xem ảnh chi tiết.";
}

// Hàm khởi tạo được gọi khi trang web tải xong (onload)
function initializeGallery() {
    console.log("Trang web đã tải xong! Bắt đầu gán thuộc tính và trình nghe sự kiện."); // Yêu cầu 9a
    
    // Lấy tất cả danh sách các hình ảnh trong thư viện
    const images = document.querySelectorAll('.gallery .preview');
    
    // Vòng lặp for để duyệt qua từng hình ảnh - Yêu cầu 9b
    for (let i = 0; i < images.length; i++) {
        // Thêm thuộc tính tabindex="0" bằng JS - Yêu cầu 9c
        images[i].setAttribute('tabindex', '0');
        
        // Giữ nguyên trình nghe sự kiện Chuột - Yêu cầu 6
        images[i].addEventListener('mouseover', function() {
            upUpdate(this);
        });
        images[i].addEventListener('mouseleave', function() {
            unDo();
        });
        
        // Thêm trình nghe sự kiện Bàn phím (focus và blur) - Yêu cầu 6
        images[i].addEventListener('focus', function() {
            upUpdate(this);
        });
        images[i].addEventListener('blur', function() {
            unDo();
        });
    }
}

// Thêm trình nghe sự kiện onload cho trang web - Yêu cầu 8
window.addEventListener('load', initializeGallery);