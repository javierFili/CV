import NavBar from "../../components/NavBar";
import CardsTareas from "./CardsTareas";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VistaPrincipalUs() {
  const [datos, setDatos] = useState(null);
  const URL = `http://localhost:3001/tareas`;
  useEffect(() => {
    axios.get(URL).then((response) => {
      setDatos(response.data);
    });
  }, []);
  let listDatos;
  if (datos !== null) {
    const datos1 = datos.filter((datos) => datos._id === "javier2");
    console.log(datos1[0].tareas);
    const datosSoloTares = datos1[0].tareas;
    listDatos = datosSoloTares.map((d) => {
      <CardsTareas        
        tituloDeTarea={d.titulo}
        descripcionTarea={d.descripcion}
        fechaInicioTarea={d.fechaIni}
        fechaFinalTarea={d.fechaFinal}
      />;
    });
    console.log(listDatos);
  }

  return (
    <div>
      <NavBar />
      La vista princial estara aqui
      <CardsTareas />
      {listDatos}
    </div>
  );
}
