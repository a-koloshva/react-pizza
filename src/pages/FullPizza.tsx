import React from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://62fa2ae7ffd7197707e6c8ba.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae alias
        ipsam architecto a odio, vitae quas accusantium nihil nobis.
      </p>
      <h4>{pizza.price} рублей</h4>
      <Link to="/" className="button button--outline button--add go-back-btn">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default FullPizza;
