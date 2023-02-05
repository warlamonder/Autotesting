const validateValue = require('./validateValue');
test('Валидация значения', ()=>{
    expect(validateValue(3,4,'+')).toBe(7);
  })
  test('Валидация значения', ()=>{
    expect(validateValue(3,4,'-')).toBe(-1);
  })
  test('Валидация значения', ()=>{
    expect(validateValue(3,4,'*')).toBe(12);
  })
  test('Валидация значения', ()=>{
    expect(validateValue(3,4,'')).toBe(false);
  })