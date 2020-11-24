import handleAmount from './handleAmount';

describe('handleAmount', () => {
  it('Amount increase', () => {
    const props = { id: 1, qtdade: 1, index: 1 };
    const amount = 'increase';
    const cart = [
      { id: 0, qtdade: 1 },
      { id: 1, qtdade: 1 },
      { id: 2, qtdade: 1 },
    ];
    const res = [
      { id: 0, qtdade: 1 },
      { id: 1, qtdade: 2 },
      { id: 2, qtdade: 1 },
    ];
    expect(handleAmount(props, amount, cart)).toStrictEqual(res);
  });
  it('Amount decrease', () => {
    const props = { id: 1, qtdade: 2, index: 1 };
    const amount = 'decrease';
    const cart = [
      { id: 0, qtdade: 1 },
      { id: 1, qtdade: 2 },
      { id: 2, qtdade: 1 },
    ];
    const res = [
      { id: 0, qtdade: 1 },
      { id: 1, qtdade: 1 },
      { id: 2, qtdade: 1 },
    ];
    expect(handleAmount(props, amount, cart)).toStrictEqual(res);
  });
  it('Amount decrease and remove', () => {
    const props = { id: 1, qtdade: 1, index: 1 };
    const amount = 'decrease';
    const cart = [
      { id: 0, qtdade: 1 },
      { id: 1, qtdade: 1 },
      { id: 2, qtdade: 1 },
    ];
    const res = [
      { id: 0, qtdade: 1 },
      { id: 2, qtdade: 1 },
    ];
    expect(handleAmount(props, amount, cart)).toStrictEqual(res);
  });
});
