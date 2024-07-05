import {
  DialogEdit,
  FondoTrasparent,
} from "../../StyledComponent/Home/EditarCard";

import Formulario from "../NuevoVideo/Formulario";

function Editar() {
  return (
    <>
      <FondoTrasparent />
      <DialogEdit open>
        <Formulario color="#2271d1" />
      </DialogEdit>
    </>
  );
}

export default Editar;
