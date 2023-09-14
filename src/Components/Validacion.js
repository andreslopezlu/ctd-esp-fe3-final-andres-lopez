import React from "react";

export default function Validacion({validacion, nombre}) {

  let resultado;

  if (validacion === null) {
    resultado = <></>;
  } else if(validacion === true){
    resultado = <p>Gracias {nombre}, te contactaremos cuando antes vía mail</p>
  } else if (validacion === false){
    resultado = <p>Por favor verifique su información nuevamente</p>
  }

  return(
    <>
      {resultado}
    </>
  )
}