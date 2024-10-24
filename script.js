// Câu lệnh IF - ELSE
// Kiểm tra điều kiện if và else
    // var a = 10;
    // var b = 20;

    // if (a > b) {
    //     console.log("a lớn hơn b");
    // } else {
    //     console.log("a nhỏ hơn hoặc bằng b");
    // }

// Kiểm tra lệnh if else ()
    // var diemThi = 9;
    // if ( diemThi >= 9) {
    //     console.log("Xuất sắc");
    // } else if (diemThi < 9 && diemThi >= 8) {
    //     console.log("Giỏi");
    // } else if (diemThi < 8 && diemThi >= 6.5) {
    //     console.log("Khá");
    // } else {
    //     console.log("Trung Bình");
    // }

// Toán tử ba ngôi
//Cú pháp: var result = condition ? a : b;
//Xét điều kiện conditon ( chạy a nếu true )
    // var age = 16;
    // var check = age >= 18 ? "Đã đủ tuổi" : "Chưa đủ tuổi";
    // console.log(check);

// ---------------------------------------
// Switch Case
//Rẽ nhánh chương trình và mỗi nhánh sẽ có một điều kiện cụ thể
    // var number = 0;

    // switch (number) {
    //     case 0:
    //     case 1: //Trường hợp Gom nhóm case lại
    //         console.log("Đây là số 0 hoặc số 1");
    //         break; // nếu không có break nó sẽ chạy xuống case tiếp
    //     case 2:
    //         console.log("Đây là số 2");
    //         break;
    //     default: // nếu không có sẽ không in ra gì
    //         console.log("Không thỏa mãn!");
    //         break;
    // }

// -------------------------------------------
// Vòng lặp FOR
// Lặp lại đoạn mã thực thi một số lần
    // for (var i = 10; i > 0; i--) {
    //     console.log(i);
    // }

    // for (var i = 1; i <= 10; i++) {
    //     for( var j = 1; j <= 10; j++) {
    //         console.log(`Hàng ${i} Cột ${j}`);
    //     }
    // }

// ---------------------------------------
// Vòng lặp For In
// Dùng để lấy ra key của một Object ( mỗi key sẽ tương ứng với key ở trong object)
    // var infoUser = {
    //     fullName: "Trương Minh Khang",
    //     diaChi: "abc",
    //     phone: "123"
    // };
    // console.log(infoUser.fullName); //ra Trương Minh Khang
    // console.log(infoUser["fullName"]);
    // for(key in infoUser) {
    //     console.log(key); //ra fullName
    //     console.log(infoUser[key]); //ra Trương Minh Khang
    //     //sau đó lặp diaChi, abc, phone, 123
    // }

// -------------------------------------------
// Vòng lặp For Of
// Dùng để lấy phần từ của một mảng hoặc string
// Cú pháp: for( variable of interable) {}
    // var list = ["HTML5", "CSS3", "JavaScript"];

    // console.log(list);
    // console.log(list.length);
    // for( var i = 0; i < list.length; i++) {
    //     console.log(i);
    //     console.log(list[i]);
    // } //Vòng lặp for thông thường

    // for ( var item of list) { //lấy ra từ mảng
    //     console.log(item);
    // }

    // var string = "TMK";
    // for(var i of string) { //lấy ra từng kí tự của một chuỗi 
    //     console.log(i);
    // }
    
// ----------------------------------------------
// Vòng lặp WHILE
// Kiểm tra điều kiện trước rồi mới thực thi nếu condition là true
// Cú pháp: while(condition) {}
    // var i = 1;
    // while(i <= 10) {
    //     console.log(i);
    //     i++;
    // }

    // var list = ["HTML5", "CSS3", "JavaScript"];
    // var i = 0;
    // while(i < list.length) {
    //     console.log(list[i]);
    //     i++;
    // }

// ---------------------------------------------
// Vòng lặp DO...WHILE
// Thực hiện ít nhất một lượt lặp rồi sau đó mới kiểm tra điều kiện
    // var i = 20;
    // do {
    //     console.log(i); //in ra 20 rồi mới kiểm tra điều kiện
    //     i++;
    // } while(i <= 10);

// ---------------------------------------
// Lệnh BREAK
// Dừng vòng lặp cho dù điều kiện vẫn đúng
    // for (var i = 0; i < 10; i++) {
    //     if( i == 5 ) {
    //         console.log("Vòng lặp bị dừng");
    //         break;
    //     }
    // }

// -----------------------------------------
// Lệnh CONTINUE
// Dùng để bỏ qua một bước lặp và nhảy sang vòng lặp mới
    // for ( i = 0; i < 10; i++) {
    //     if( i == 5) {
    //         continue; // bỏ qua không in số 5
    //     }
    //     console.log(i);
    // }

// ----------------------------------------
// CÁC CÁCH KHAI BÁO BIẾN
// Từ khóa VAR
// Truy cập toàn cục ( dùng bất cứ đâu cũng được)
    // var a = 10;

    // if(a == 10) {
    //     var b = 20;
    //     console.log(b);
    // }

    // console.log(b); // vẫn ra được 20 dù bên trong IF
    
// ------------------------------------------
// Từ khóa LET
// Chỉ có trong phạm vi trong khối khai báo
    // var a = 10;

    // if(a == 10) {
    //     let b = 20;
    //     b = 30;
    //     console.log(b); // xuất ra 30
    // }

    // console.log(b); // không ra được 30 vì b được khai báo trong IF

// -------------------------------------------------------
// Từ khóa CONST ( CONSTANT )
// Chỉ có trong phạm vi trong khối khai báo
// Là hằng số nên không thể gán lại giá trị 
    // var a = 10;

    // if(a == 10) {
    //     const b = 20;
    //     b = 30;
    //     console.log(b); // báo lỗi luôn vì không thể gán lại lần nữa cho b
    // }
    // console.log(b); 

// ----------------------------------
// Không cần dùng từ khóa
// Chỉ nên sử dụng khi muốn gán lại giá trị cho một biến
    // var a = 10;
    // a = 5; // gán lại a cho 5
    // console.log(a);










