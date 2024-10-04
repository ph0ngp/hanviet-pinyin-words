# Từ vựng Hán Việt Pinyin
![CI](https://github.com/ph0ngp/hanviet-pinyin-words/actions/workflows/ci.yml/badge.svg)

## Giới Thiệu

<!-- TODO convert to typescript? -->

Đây là danh sách từ vựng Hán Việt được phân loại theo pinyin và thư viện chuyển đổi chúng.

Các từ điển Hán Việt khác thường chỉ có phiên âm Hán Việt ứng với từng chữ, mà đôi khi một chữ lại có nhiều cách đọc pinyin khác nhau, nên không phân biệt được âm Hán Việt nào tương ứng với âm pinyin nào. Danh sách từ Hán Việt này giải quyết vấn đề đó.

Ví dụ: `中` có 2 pinyin là `zhōng` và `zhòng`, thì `zhōng` ứng với âm Hán Việt là `trung` và `zhòng` ứng với âm Hán Việt là `trúng`.  Hoặc `降` có 2 pinyin là `jiàng` và `xiáng`, thì `jiàng` ứng với âm Hán Việt là `giáng` và `xiáng` ứng với âm Hán Việt là `hàng`.

Dữ liệu chỉ hỗ trợ các chữ Hán phồn thể, không hỗ trợ giản thể vì độ phân biệt của các chữ Hán phồn thể cao hơn giản thể (một chữ Hán giản thể có thể đại diện cho nhiều chữ Hán phồn thể khác nhau). Nếu muốn sử dụng cho giản thể có thể dùng các tool hoặc database khác để convert giữa giản thể - phồn thể.

## Cài đặt

```bash
pnpm install hanviet-pinyin-words
```

hoặc

```bash
npm install hanviet-pinyin-words
```

## Cách dùng

```javascript
import { getHanviet, hanvietData } from 'hanviet-pinyin-words'

// function getHanviet dùng để lấy hán việt từ 1 từ tiếng Hán và 1 array pinyin tương ứng
// độ dài của từ tiếng Hán phải bằng độ dài của array pinyin. Nếu không sẽ throw Error
let hanviet = getHanviet('中國', ['zhong1', 'guo2'])
console.log(hanviet) // trung quốc
hanviet = getHanviet('百發百中', ['bai3', 'fa1', 'bai3', 'zhong4'])
console.log(hanviet) // bách phát bách trúng
hanviet = getHanviet('投降', ['tou2', 'xiang2'])
console.log(hanviet) // đầu hàng
hanviet = getHanviet('降級', ['jiang4', 'ji2'])
console.log(hanviet) // giáng cấp
hanviet = getHanviet('和尚', ['he2', 'shang5'])
console.log(hanviet) // hoà thượng

// trường hợp 1 chữ có nhiều âm hán việt
// trong 1 chữ: cách nhau bằng dấu phẩy
hanviet = getHanviet('斷', ['duan4'])
console.log(hanviet) // đoạn, đoán
// trong 1 từ: cách nhau bằng dấu |
hanviet = getHanviet('判斷', ['pan4', 'duan4'])
console.log(hanviet) // phán đoạn | đoán

// trường hợp không tìm thấy dữ liệu hán việt: thay bằng dấu _
hanviet = getHanviet('玻璃', ['bo1', 'haha'])
console.log(hanviet) // pha _

// trường hợp chữ hán kết hợp với các ký tự alphanumeric (0-9, a-z, A-Z): giữ nguyên các ký tự alphanumeric
hanviet = getHanviet('X光', ['X', 'guang1'])
console.log(hanviet) // X quang

// Nếu muốn tự dùng raw data của danh sách từ vựng Hán Việt, có thể import hanvietData
// hanvietData object structure:
// có 2 trường hợp:
// 1. có pinyin cụ thể, mỗi trường hợp pinyin lại ứng với 1 array hán việt
// 2. có dấu * : có nghĩa là chỉ có 1 array hán việt, pinyin nào thì cũng là array đó
// {
//     'chữ hán 1': {
//         'pinyin 1': ['hán việt 1', 'hán việt 2', ...],
//         'pinyin 2': ['hán việt 1', 'hán việt 2', ...],
//         ...
//     },
//     'chữ hán 2': {
//         '*': ['hán việt 1', 'hán việt 2', ...],
//     },
//     ...
// }
```

## Đóng góp

Dữ liệu do cá nhân mình thu thập và phân loại dựa trên nhiều nguồn khác nhau, không tránh khỏi thiếu sót, rất mong các bạn đóng góp bằng cách mở issue hoặc pull request cho repo này.

## Tham khảo

Dữ liệu được xây dựng tham khảo dựa trên các nguồn từ điển sau:

- [Trang web Từ điển Hán Nôm](https://hvdic.thivien.net/)
- Hán Việt Từ Điển Trích Dẫn - Đặng Thế Kiệt
- Từ điển Hán Việt, Trần Văn Chánh, NXB Trẻ, TP Hồ Chí Minh, 1999.
- Hán Việt tân từ điển, Nguyễn Quốc Hùng, NXB Khai Trí, Sài Gòn, 1975.
- Hán Việt tự điển, Thiều Chửu, Hà Nội, 1942.

## License

Project này được phát hành dưới [MIT License](LICENSE)

Copyright (c) 2024 Phong Phan