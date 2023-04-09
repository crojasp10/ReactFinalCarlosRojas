import React, { useContext } from "react";
import dentista from '../assets/dentista.png'
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Card = ({ name, username, id }) => {

  const { currentContext } = useContext(ContextGlobal)

  const {  screen } = currentContext


    // Aqui iria la logica para agregar la Card en el localStorage

   

  return (
    <div className={screen === "light" ? "card" : "card-dark"}>
        <Link to={`detail/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src={dentista} alt={name} width='150px' />
          <h1>
            {name}
          </h1>
            <h2>
              {username}
            </h2>
              <h3>
                {id}
              </h3>
      </Link>
      <button onClick={() => addFav(name, username, id)} className="favButton"> 
      <FontAwesomeIcon icon={faStar} style={{ border: '1px solid', borderRadius: '50%', padding: '4px', background: 'transparent' }} /></button>
    </div>
  );
};

export default Card;
