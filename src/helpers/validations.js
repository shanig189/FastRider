export const isValidPinCode = () => {
  return true;
}

export const isElementAtTop = (el) => {
  const elementTop = el.offsetTop;
  const body = document.body; 
  const html = document.documentElement;
  
  return (
    body.scrollTop >= elementTop ||
    html.scrollTop >= elementTop
  );
}