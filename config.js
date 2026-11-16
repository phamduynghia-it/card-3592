const CONFIG = {
    // 1. Thông tin màn hình khoá
    sender: `Anh`,           // Tên người gửi
    recipient: `Phương Yến`,       // Tên người nhận

    // 2. Nội dung thiệp
    title: `To my love`,        // Tiêu đề chính (hiển thị trên vỏ thiệp và popup thư)
    cardCoverDeco: `✿ ❤ ✿`,      // Dòng trang trí nhỏ phía trên tiêu đề
    forYouLine: `Love you  ❤`, // Dòng chữ hiển thị khi hoa rơi

    // 3. Nội dung bức thư (Mỗi dòng là một đoạn văn)
    popupMessage: `Chúc em có một buổi sáng thật vui vẻ, ấm áp và ngập tràn hạnh phúc.

Anh gửi đến em một chút bình yên của ngày mới, mong rằng mỗi khi thức dậy, em sẽ để lại phía sau một chút muộn phiền và đón nhận thật nhiều niềm vui.

Hãy luôn yêu đời, vô tư và hồn nhiên như chính nụ cười xinh đẹp của em nhé.

Chúc em một ngày thật thuận lợi, gặp nhiều may mắn và nhận được tất cả những điều tốt đẹp nhất. 
                                                                                                                                                                                  Phương Yến
                       
`.split('\n'),

    // 4. Hình ảnh (Lưu ảnh vào thư mục images/ và điền tên file vào đây)
    images: ["./assets/user_images_0.jpg"],

    // 5. Ảnh nổi bật hiển thị bên trong bức thư
    popupPhoto: `./assets/user_popupPhoto.jpg`, 

    // 6. Nhạc nền (Link file MP3)
    music: `./assets/user_music.mp3`,
};

