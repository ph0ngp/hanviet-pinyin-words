# Chuyển đổi từ vựng Hán Việt theo Pinyin
![CI](https://github.com/ph0ngp/hanviet-pinyin-words/actions/workflows/ci.yml/badge.svg)

## Giới Thiệu

<!-- TODO convert to typescript? -->

Đây là thư viện JavaScript để chuyển đổi từ vựng từ Hán sang Hán Việt dựa trên pinyin của từng từ. Project này dựa trên dữ liệu từ https://github.com/ph0ngp/hanviet-pinyin-wordlist

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
## License

Project này được phát hành dưới [MIT License](LICENSE)

Copyright (c) 2024 Phong Phan