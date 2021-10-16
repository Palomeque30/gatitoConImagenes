let turno = true;
let contador = 0;
let ganador = false;

let boton1 = "";
let boton2 = "";
let boton3 = "";
let boton4 = "";
let boton5 = "";
let boton6 = "";
let boton7 = "";
let boton8 = "";
let boton9 = "";

const click_user = (id) => {
  const botonPulsado = document.getElementById(id);

  const ejecutarProcedimiento = () => {
    const imagen = document.createElement("img");
    imagen.alt = "imagen de un gatito";
    imagen.src = turno
      ? "https://www.hola.com/imagenes/estar-bien/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg"
      : "https://abcnoticias.mx/u/fotografias/m/2021/6/29/f638x638-139207_197374_5050.png";
    imagen.width = 180;
    botonPulsado.appendChild(imagen);
    revisar_victoria();
    contador++;
    if (!ganador) {
      revisar_empate();
    }
    turno = !turno;
  };

  switch (id) {
    case 1:
      if (boton1 === "") {
        turno ? (boton1 = "X") : (boton1 = "O");
        ejecutarProcedimiento();
      }
      break;
    case 2:
      if (boton2 === "") {
        turno ? (boton2 = "X") : (boton2 = "O");
        ejecutarProcedimiento();
      }
      break;
    case 3:
      if (boton3 === "") {
        turno ? (boton3 = "X") : (boton3 = "O");
        ejecutarProcedimiento();
      }
      break;
    case 4:
      if (boton4 === "") {
        turno ? (boton4 = "X") : (boton4 = "O");
        ejecutarProcedimiento();
      }
      break;
    case 5:
      if (boton5 === "") {
        turno ? (boton5 = "X") : (boton5 = "O");
        ejecutarProcedimiento();
      }
      break;
    case 6:
      if (boton6 === "") {
        turno ? (boton6 = "X") : (boton6 = "O");
        ejecutarProcedimiento();
      }
      break;
    case 7:
      if (boton7 === "") {
        turno ? (boton7 = "X") : (boton7 = "O");
        ejecutarProcedimiento();
      }
      break;
    case 8:
      if (boton8 === "") {
        turno ? (boton8 = "X") : (boton8 = "O");
        ejecutarProcedimiento();
      }
      break;
    case 9:
      if (boton9 === "") {
        turno ? (boton9 = "X") : (boton9 = "O");
        ejecutarProcedimiento();
      }
      break;
    default:
      break;
  }
};

const revisar_victoria = () => {
  const renglon1 = boton1 === boton2 && boton2 === boton3 && boton1 !== "";

  const renglon2 = boton4 === boton5 && boton5 === boton6 && boton4 !== "";

  const renglon3 = boton7 === boton8 && boton8 === boton9 && boton7 !== "";

  const col1 = boton1 === boton4 && boton4 === boton7 && boton1 !== "";

  const col2 = boton2 === boton5 && boton5 === boton8 && boton2 !== "";

  const col3 = boton3 === boton6 && boton6 === boton9 && boton3 !== "";

  const dia1 = boton1 === boton5 && boton5 === boton9 && boton1 !== "";

  const dia2 = boton3 === boton5 && boton5 === boton7 && boton3 !== "";

  if (
    renglon1 ||
    renglon2 ||
    renglon3 ||
    col1 ||
    col2 ||
    col3 ||
    dia1 ||
    dia2
  ) {
    ganador = true;
    alert(`el ganador es ${turno ? "X" : "O"}`);
  }
};

const revisar_empate = () => {
  if (contador === 9) {
    alert("El juego ha terminado en empate");
  }
};

const restart = () => {
  turno = true;
  contador = 0;
  ganador = false;
  boton1 = "";
  boton2 = "";
  boton3 = "";
  boton4 = "";
  boton5 = "";
  boton6 = "";
  boton7 = "";
  boton8 = "";
  boton9 = "";

  for (let i = 1; i < 10; i++) {
    const div = document.getElementById(i);
    if (div.childNodes.length !== 0) {
      div.removeChild(div.childNodes[0]);
    }
  }
};
