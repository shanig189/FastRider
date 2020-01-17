export default (key, a, b) => {
  const elemA = a[key].toUpperCase();
  const elemB = b[key].toUpperCase();

  let comparison = 0;
  if (elemA > elemB) {
    comparison = 1;
  } else if (elemA < elemB) {
    comparison = -1;
  }
  return comparison;
}