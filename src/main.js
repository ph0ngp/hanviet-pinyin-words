import { hanvietData } from './hanvietData.js'

const tones = ['1', '2', '3', '4']

export function getHanviet(tradHanzi, pinyinWords, firstCharUpperCase = false) {
    // TA TA [ta1] /he or she/
    // 馬K3p門门á
    if (pinyinWords.length !== tradHanzi.length) {
        throw new Error(
            `Length mismatch: tradHanzi (${tradHanzi.length}) and pinyinWords (${pinyinWords.length}) must have the same length.`
        )
    } else if (pinyinWords.length === tradHanzi.length) {
        let hanViet = ''
        for (let i = 0; i < tradHanzi.length; i++) {
            let hv
            if (
                Object.prototype.hasOwnProperty.call(hanvietData, tradHanzi[i])
            ) {
                const charPinyins = hanvietData[tradHanzi[i]]
                // console.log('cpy',charPinyins)
                if (
                    Object.keys(charPinyins).length === 1 &&
                    Object.keys(charPinyins)[0] === '*'
                ) {
                    hv = charPinyins['*']
                    // console.log('*', hv)
                } else if (
                    Object.prototype.hasOwnProperty.call(
                        charPinyins,
                        pinyinWords[i].toLowerCase()
                    )
                ) {
                    hv = charPinyins[pinyinWords[i].toLowerCase()]
                    // console.log('py', hv)
                } else if (pinyinWords[i].slice(-1) === '5') {
                    let res = ''
                    const hvSet = new Set()
                    for (const tone of tones) {
                        const pinyinTest =
                            pinyinWords[i].toLowerCase().slice(0, -1) + tone
                        if (
                            Object.prototype.hasOwnProperty.call(
                                charPinyins,
                                pinyinTest
                            ) &&
                            charPinyins[pinyinTest].length > 0
                        ) {
                            for (const eachHv of charPinyins[pinyinTest]) {
                                if (!hvSet.has(eachHv)) {
                                    hvSet.add(eachHv)
                                    res += eachHv + ' | '
                                }
                            }
                        }
                    }
                    if (res !== '') {
                        hv = [res.slice(0, -3)]
                    }
                }
            } else if (isPrintableAscii(tradHanzi[i])) {
                hv = [tradHanzi[i]]
            } else if (tradHanzi[i] === '，' || tradHanzi[i] === '。') {
                if (tradHanzi[i] === '，') {
                    hv = [',']
                } else if (tradHanzi[i] === '。') {
                    hv = ['.']
                }
            }
            if (firstCharUpperCase && hv !== undefined && hv.length > 0) {
                let newHv = []
                for (let j = 0; j < hv.length; j++) {
                    newHv.push(hv[j].charAt(0).toUpperCase() + hv[j].slice(1))
                }
                hv = newHv
            }
            // console.log('hv', hv)
            //will be undefined if either char not found and char is not alphanumeric, or char found but pinyin not found
            // if not undefined, it must be an Array
            if (hv === undefined || hv.length === 0) {
                hanViet += '_'
            } else if (tradHanzi.length === 1) {
                // display all hanviets if this is single char
                hanViet += hv.join(', ')
            } else {
                hanViet += hv.join(' | ')
            }
            if (i < tradHanzi.length - 1) {
                hanViet += ' '
            }
        }
        return hanViet
    }
}

export function getAllHanvietsOfChar(tradHanzi) {
    if (tradHanzi.length !== 1) {
        throw new Error('tradHanzi must be a single character')
    }
    if (Object.prototype.hasOwnProperty.call(hanvietData, tradHanzi)) {
        return Object.values(hanvietData[tradHanzi])
            .flat()
            .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
    } else {
        return []
    }
}

export function isPrintableAscii(str) {
    if (!str) {
        return false
    }
    let code, i, len
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i)
        if (!(code >= 32 && code <= 126)) {
            return false
        }
    }
    return true
}

// Export the data and the function
export { hanvietData }
