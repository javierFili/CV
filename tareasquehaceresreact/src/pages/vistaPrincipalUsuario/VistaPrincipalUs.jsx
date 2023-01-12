import NavBar from "../../components/NavBar";
import CardsTareas from "./CardsTareas";
import { useEffect, useState } from "react";
import Avisos from "../../components/Avisos";
import axios from "axios";

export default function VistaPrincipalUs() {
  const [datos, setDatos] = useState(null);
  const URL = `http://localhost:3001/tareas`;
  const sesion = localStorage.getItem("usuario");
  useEffect(() => {
    if (sesion !== null) {
      const controller = new AbortController();
      axios
        .get(URL, {
          signal: controller.signal,
        })
        .then((response) => {
          setDatos(response.data);
          console.log(response.data);
        })
        .catch(console.log("error"));
      return () => {
        controller.abort();
      };
    }
  });
  let listDatos;
  if (datos !== null) {
    const datos1 = datos.filter((datos) => datos._id === sesion);
    if (datos1.length > 0) {
      const datosSoloTares = datos1[0].tareas;
      listDatos = datosSoloTares.map((d) => (
        <CardsTareas
          id={d._id}
          tituloDeTarea={d.titulo}
          descripcionTarea={d.descripcion}
          fechaInicioTarea={d.fechaIni}
          fechaFinalTarea={d.fechaFin}
        />
      ));
      return (
        <div className="">
          <NavBar datosDeTareas={datos1} />
          <div className=" main center row">{listDatos}</div>
        </div>
      );
    } else {
      return (
        <div className="main">
          <NavBar />
          <Avisos aviso="No tiene tareas pendientes"></Avisos>
        </div>
      );
    }
  }
  return (
    <div>
      <NavBar />
      La vista princial estara aqui
    </div>
  );
}
