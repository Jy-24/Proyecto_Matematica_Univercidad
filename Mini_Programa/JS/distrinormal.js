const probabilidadInput = document.querySelector('input[name="probabilidad"]');
const miuInput = document.querySelector('input[name="miu"]');
const sigmaInput = document.querySelector('input[name="sigma"]');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const probabilidad = parseFloat(probabilidadInput.value);
  const miu = parseFloat(miuInput.value);
  const sigma = parseFloat(sigmaInput.value);

  const resultado = (probabilidad - miu) / sigma;

  console.log(`El resultado es: ${resultado}`);

  alert(`El resultado es: ${resultado}`);
});