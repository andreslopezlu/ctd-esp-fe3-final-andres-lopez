import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function isValidName(name) {
    let result = null;
    if (name.length>5){
      result = true;
    } else {
      result = false;
    }
    return result;
  }

  function isValidEmail(email){
    let result = null;
    let validRegexEmail = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if(validRegexEmail.test(email)){
      result = true;
    } else {
      result = false;
    }
    return result;
  }

  function handleSubmit(e){
    e.preventDefault();

    const validName = isValidName(name);
    const validEmail = isValidEmail(email);

    if (validName && validEmail){
      alert(`Gracias ${name}, te contactaremos cuando antes vía mail`)
    } else {
      alert("Por favor verifique su información nuevamente")
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="nombre">Introduzca su nombre</label>
          <input type="text" placeholder="Nombre" id="nombre" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label htmlFor="email">Introduzca su email</label>
          <input type="email" placeholder="Email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
