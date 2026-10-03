// 1. Hàm khi tương tác vào ảnh (hover hoặc focus bằng bàn phím)
function upUpdate(previewPic) {
    console.log("Kích hoạt sự kiện cho ảnh:", previewPic.alt); // Yêu cầu 9a
    
    const displayDiv = document.getElementById('image-display');
    if (displayDiv) {
        displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
        displayDiv.innerHTML = previewPic.alt;
    }
}

// 2. Hàm khi rời chuột/blur khỏi ảnh
function unDo() {
    const displayDiv = document.getElementById('image-display');
    if (displayDiv) {
        displayDiv.style.backgroundImage = "url('')";
        displayDiv.innerHTML = "Di chuột hoặc sử dụng phím Tab để xem ảnh chi tiết.";
    }
}

// 3. Hàm khởi tạo tự động khi trang tải xong (onload)
function initializeGallery() {
    console.log("Trang web đã tải xong (onload triggered)"); // Yêu cầu 9a
    
    // Lấy tất cả ảnh trong thẻ main
    const images = document.querySelectorAll('main img');
    
    // Vòng lặp for duyệt qua từng hình ảnh (Yêu cầu 9b)
    for (let i = 0; i < images.length; i++) {
        // Thêm thuộc tính tabindex tự động (Yêu cầu 9c)
        images[i].setAttribute('tabindex', '0');
        
        // Sự kiện Chuột (Yêu cầu 6 & 7)
        images[i].addEventListener('mouseover', function() {
            upUpdate(this);
        });
        images[i].addEventListener('mouseleave', function() {
            unDo();
        });
        
        // Sự kiện Bàn phím (Yêu cầu 6 & 10)
        images[i].addEventListener('focus', function() {
            upUpdate(this);
        });
        images[i].addEventListener('blur', function() {
            unDo();
        });
    }
}

// Đăng ký sự kiện onload (Yêu cầu 8)
window.addEventListener('load', initializeGallery);