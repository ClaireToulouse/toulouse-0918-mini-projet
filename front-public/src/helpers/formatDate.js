const formatDate = date =>
  date. slice(0,10).split('-').reverse().join('/');

export default formatDate;