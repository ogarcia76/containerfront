import { useNavigate } from 'react-router-dom';

export const Base = () => {
    const navigate = useNavigate();
    const handleClick = (url) => {
      navigate(url);
    }
  return (
    <div>
        <p> cargar contenido debajo </p>
        <button onClick={() => handleClick('/pepe')}> ir pepe </button>
        <button onClick={() => handleClick('/one')}> ir one proyect </button>
    </div>
  )
}
