export function fetchProductsList() {
  return new Promise<{
    [x: string]: any;
  }>(() =>
    fetch('http://my-json-server.typicode.com/WhatsLab/code-challenge/products'))
}
export function fetchProductDetails(productId: number) {
  return new Promise<{
    [x: string]: any;
  }>(() => fetch(`https://my-json-server.typicode.com/WhatsLab/code-challenge/productDetails/${productId}`)
  );
}
