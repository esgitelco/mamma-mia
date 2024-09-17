export const formatEuro = (nominal) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    })
      .format(nominal)
      .replace(/(\.|,)00$/g, '');
  };
  