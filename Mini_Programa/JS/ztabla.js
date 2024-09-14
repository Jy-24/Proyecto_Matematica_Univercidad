const valoresZ = [
  0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
  1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
  2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
  3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9,
];

const probabilidades = [
  0.0000, 0.0438, 0.0832, 0.1293, 0.1700, 0.2088, 0.2454, 0.2794, 0.3106, 0.3365,
  0.3413, 0.3665, 0.3888, 0.4082, 0.4251, 0.4394, 0.4515, 0.4616, 0.4699, 0.4767,
  0.4772, 0.4826, 0.4868, 0.4901, 0.4927, 0.4946, 0.4661, 0.4978, 0.4980, 0.4986,
  0.4987, 0.4991, 0.4994, 0.4996, 0.4997, 0.4998, 0.4999, 0.4999, 0.4999, 0.5000,
];

function buscarResultado(valorZ, probabilidad) {
  const indice = valoresZ.findIndex((valor) => valor === valorZ);

  if (indice === -1) {
    return -1;
  }

  const resultado = probabilidades[indice] + probabilidad;

  return resultado;
}

const valorZInput = document.querySelector('input[name="valorZ"]');
const probabilidadInput = document.querySelector('input[name="probabilidad"]');

const buttonCalcular = document.querySelector('button');

buttonCalcular.addEventListener('click', () => {
  const valorZ = parseFloat(valorZInput.value);
  const probabilidad = parseFloat(probabilidadInput.value);

  const resultado = buscarResultado(valorZ, probabilidad);

  if (resultado === -1) {
    alert("El valor Z no se encuentra en la tabla");
    return;
  }

  alert(`El resultado es: ${resultado}`);
});
