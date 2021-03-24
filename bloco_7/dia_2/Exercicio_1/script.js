const order = {
  name: 'Talvez Denis',
  phoneNumber: '12-34567-8901',
  address: {
    street: 'Rua Aspazia',
    number: '69420',
    apartment: '101',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Certamente Denis',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  let address = order.address;
  console.log (`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${address.street}, Nº: ${address.number}, AP: ${address.apartment}`)
}


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let pizzas = Object.keys(order.order.pizza);
  let drinks = Object.keys(order.order.drinks);
  order.name = 'Luiz Silva';
  order.payment.total = '50';
  pizzas[0] = 'muzzarela';
  pizzas[1] = 'calabresa';
  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${Number(order.payment.total).toFixed(2)}.`);
}
orderModifier(order);


const novoObjeto = nome => {

}

novoObjeto('objeto')