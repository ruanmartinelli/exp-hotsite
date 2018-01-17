import React from 'react';
import uniqueId from 'lodash.uniqueid';

const kitItems = [
  { name: 'tênis de corrida', quantity: '01' },
  { name: 'peças de vestuário para você correr melhor', quantity: '05' },
  { name: 'acessórios para ajudar no seu desempenho', quantity: '05' },
  {
    name: 'Acompanhamento personalizado de profissionais de treino',
    quantity: ''
  },
  { name: 'Apoio com dicas de nutrição', quantity: '' },
  { name: 'Acesso exclusivo ao conteúdo do app EXP_', quantity: '' }
];

const PurchaseDetails = () => (
  <div>
    <h2>
      <strong> Detalhes da Compra </strong>{' '}
    </h2>
    <h1 className="txt-green">
      <strong> R$ 660,00 <small className="txt-green">em até 5x</small></strong>
    </h1>
    <h4 className="mt-3">
      <strong> Você terá direito a: </strong>
    </h4>
    {kitItems.map(item => (
      <p key={uniqueId()}>
        <strong> {item.quantity} </strong> {item.name}
      </p>
    ))}
  </div>
);

export default PurchaseDetails;
