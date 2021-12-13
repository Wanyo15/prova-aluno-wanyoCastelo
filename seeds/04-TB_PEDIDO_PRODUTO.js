
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PEDIDO_PRODUTO').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_PEDIDO_PRODUTO').insert([
        {id: 1, pedido_id: 1, produto_id: 1, quantidade: 10, valor_item: 55.4},
        {id: 2, pedido_id: 1, produto_id: 2, quantidade: 10, valor_item: 89.0},
        {id: 3, pedido_id: 2, produto_id: 3, quantidade: 5, valor_item: 30},
        {id: 4, pedido_id: 2, produto_id: 4, quantidade: 5, valor_item: 25}
      ]);
    });
};