import { expect } from 'chai';
import { getHanviet, hanvietData } from '../src/main.js';

describe('getHanviet', () => {
  it('should return correct Hanviet for given tradHanzi and pinyinWords', () => {
    expect(getHanviet('中國', ['zhong1', 'guo2'])).to.equal('trung quốc');
    expect(getHanviet('百發百中', ['bai3', 'fa1', 'bai3', 'zhong4'])).to.equal('bách phát bách trúng');
    expect(getHanviet('投降', ['tou2', 'xiang2'])).to.equal('đầu hàng');
    expect(getHanviet('降級', ['jiang4', 'ji2'])).to.equal('giáng cấp');
    expect(getHanviet('和尚', ['he2', 'shang5'])).to.equal('hoà thượng');
  });

  it('should handle multiple hanviets correctly', () => {
    expect(getHanviet('斷', ['duan4'])).to.equal('đoạn, đoán');
    expect(getHanviet('判斷', ['pan4', 'duan4'])).to.equal('phán đoạn | đoán');
  });

  it('should return empty string for different length of tradHanzi and pinyinWords', () => {
    expect(getHanviet('判斷', ['duan4'])).to.equal('');
    expect(getHanviet('斷', ['pan4', 'duan4'])).to.equal('');
  });

  it('should use all hanviets it knows for tone 5 char', () => {
    expect(getHanviet('玻璃', ['bo1', 'li5'])).to.equal('pha ly | lê');
  });

  it('should print _ for unknown hanviet', () => {
    expect(getHanviet('玻璃', ['bo1', 'haha'])).to.equal('pha _');
  });

  it('should handle alphanumeric characters', () => {
    expect(getHanviet('X光', ['X', 'guang1'])).to.equal('X quang');
  });

  it('should return empty string for empty input', () => {
    expect(getHanviet('', [])).to.equal('');
  });
});

describe('hanvietData', () => {
    it('should have correct structure for characters with multiple pronunciations', () => {
        expect(hanvietData['中']).to.deep.equal({
            'zhong1': ['trung'],
            'zhong4': ['trúng']
        });
    });
    
    it('should have correct structure for characters with only one hanviet array', () => {
        expect(hanvietData['一']).to.deep.equal({
            '*': ['nhất']
        });
    });
});