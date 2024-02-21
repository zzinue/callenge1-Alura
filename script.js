const campoTexto = document.querySelector("#texto-encriptado");
const campoMensaje = document.querySelector("#campo-mensaje-id");

console.log(campoTexto, campoMensaje);

const matrizCode = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncriptar() {
  const texto = encriptar(campoTexto.value);
  campoMensaje.value = texto;
  console.log(texto);
}

function encriptar(fraseEncriptada) {
  for (let i = 0; i < matrizCode.length; i++) {
    if (fraseEncriptada.includes(matrizCode[i][0])) {
      fraseEncriptada = fraseEncriptada.replaceAll(
        matrizCode[i][0],
        matrizCode[i][1]
      );
    }
  }
  return fraseEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(campoTexto.value);
  campoMensaje.value = textoDesencriptado;
  console.log(textoDesencriptado);
}

function desencriptar(fraseDesencriptada) {
  for (let i = 0; i < matrizCode.length; i++) {
    if (fraseDesencriptada.includes(matrizCode[i][1])) {
      fraseDesencriptada = fraseDesencriptada.replaceAll(
        matrizCode[i][1],
        matrizCode[i][0]
      );
    }
  }
  return fraseDesencriptada;
}
