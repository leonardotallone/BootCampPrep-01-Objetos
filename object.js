const setPropsOnObj = (obj) => {
  obj["p"] = 5;
  obj["plataforma"] = 5;
  obj["proximo"] = proximo = (n) => n + 1;
  obj["la"] = { clave: { secreta: { es: 404 } } };
  return obj;
};

/*const setPropsOnObj = (obj) => {
  obj["p"] = 5;
  obj["plataforma"] = 5;
  obj["proximo"] = proximo = (n) => n + 1;
  obj["la"] = {};
  obj["la"]["clave"] = {};
  obj["la"]["clave"]["secreta"] = {};
  obj["la"]["clave"]["secreta"]["es"] = 404;
  return obj;
};
*/
const setPropsOnArr = (array) => {
  array["hola"] = (_) => "Hola!";
  array["river"] = "plate";
  array[0] = 5;
  array["doble"] = (p) => p * 2;
};

const setPropsOnFunc = (parametro) => {
  let date = new Date();
  parametro();
  parametro.year = date.getFullYear();
  parametro.mitad = (n) => n / 2;
  parametro.prototype.helloWorld = (_) => "Hello World";
};
