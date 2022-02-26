import { createContext, useCallback, useState, useEffect } from "react";
import { ApiServices } from '../services/servicesApi'

export const actionContext = createContext();

export const actionProvider = ({ children }) => {
  const [senhasGerada, setSenhasGerada] = useState({
    medico: "",
    especialidade: "",
    senha: 0,
    idSenha: ""
  })
}

export const getAll = useEffect(() => {
  ApiServices.getAll()
    .then((result) => {
      console.log(result);
    });
}, []);

export const create = ApiServices.create({
  setSenhasGerada({
    medico: medico,
    especialidade: especialidade,
    senha: senhaGerada,
    idSenha: idSenha
  })

})