// Homework 1
// 1) map
//     map được sử dụng để đơn giản hóa ( cụ thể là thay vì dùng for thì mình dùng map ) 
// để render dữ liệu 
    // ví dụ:
// const cars = [
//     {
//         "name": "BMW",
//         "size": "big",
//         "price": "100000",
//     }
//     {
//         "name": "Audi",
//         "size": "small",
//         "price": "900000",
//     }
// ]

    // nếu dùng for loop: 
// let cars_name = [];
// for (let i = 0; i < cars.length; i++) {
//     cars_name.push(cars[i].name);
// }

    // meanwhile với map: 
// let cars_name = cars.map((index, cars) => {
//     return cars.name;
// })

// 2) filter
//     Với filter thì nó cũng giống map ( theo quan điểm của mình ) nhưng với filter thì nó cần
// lệnh return để trả true false rồi lọc ra các giá trị phù hợp vs array 
// ví dụ cũng lấy dữ liệu của cars như trên 

    // với For loop: 
// let size_cars = [];
// for (let i = 0; i < cars.length; i ++) {
//     if (cars[i].size === "small") {
//         size_cars.push(cars[i])
//     }
// }

   // meanwhile với map: 
// let size_cars = cars.filter((car) => {
//     return car.size === "small"
// })

// 3) reduce: phần này mình chưa hiểu lắm 
// 4) some
//   Có nhiệm vụ lặp qua tất cả các phần tử của mảng, mỗi lần lặp 
// nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback. 
// vi dụ: 
//     function isBiggerThan10(element, index, array) {
//     return element > 10;
//   }
//   [2, 5, 8, 1, 4].some(isBiggerThan10);   false
//   [12, 5, 8, 1, 4].some(isBiggerThan10);  true

// 5) every
//    Giúp kiểm tra tất cả các phần tử trong mảng có thõa mãn một điều kiện 
// nào đó hay không. Nếu tất cả phần tử đều thỏa thì true, ngược lại nếu một
// phần tử không thỏa mãn sẽ trả về false.
// ví dụ: 
// const ages = [32, 33, 16, 40];   Tạo mảng
// console.log(ages.every(checkAge))   Returns false
// function checkAge(age) {
//   return age > 20;
// }

// 6) find
// Hàm find sẽ trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn được điều kiện kiểm tra. 
// Hàm find sẽ lần lượt sử dụng các phần tử của mảng để thực hiện hàm kiểm tra cho đến khi có giá trị thỏa mãn và hàm kiểm tra trả về true. 
// Khi đó hàm find sẽ trả về giá trị của phần tử thỏa mãn và bỏ qua không kiểm tra các phần tử còn lại.

// ví dụ:
// const ages = [3, 10, 28, 20];
// function checkAge(age) {
//    return age > 20;
// }
// let age = ages.find(checkAge);
// console.log(age); ket qua ra 28

// 7) findIndex
//  Hàm findIndex sẽ lần lượt sử dụng các phần tử của mảng 
// để kiểm tra cho đến khi thỏa mãn điều kiện
// và trả về true. Khi đó, hàm find sẽ trả về khóa 
// của phần tử thỏa mãn đó và bỏ qua không kiểm tra các phần tử còn lại.
// ví dụ: 

// const ages = [3, 10, 28, 20];
// function checkAge(age) {
//   return age > 20;
// }
// let age = ages.find(checkAge);
// console.log(age); kết quả ra 2 số lớn hơn hoặc = 20 

// 8) for with index (for(let i = 0; i < nums.length ; i++))
// Hàm for loop lấy từ phần tử thứ nhất tới length của biến "nums" và tiến dần 
// ví dụ: 

// let nums =  [ 32, 11, 4, 234, 41];
// let idk = [];
// for (let i = 0; i < nums.length; i++){
//     idk += nums[i];
// }
// console.log(idk);

// - for in 
// - for of                                  ( 3 hàm này em chưa hiểu lắm )
// - for each