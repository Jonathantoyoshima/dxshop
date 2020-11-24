const handleAmount = (props, amount, cart) => {
  const { id, qtdade, index } = props;
  switch (amount) {
    case 'increase':
      cart[index] = { id: id, qtdade: qtdade + 1 };
      return cart;
    case 'decrease':
      if (qtdade - 1 > 0) {
        cart[index] = { id: id, qtdade: qtdade - 1 };
      } else {
        cart.splice(index, 1);
      }
      return cart;
    default:
      return cart;
  }
};

export default handleAmount;
