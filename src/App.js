import './index.css';
import Header from "./component/Header"
import Card from "./component/Card"
import data from "./data"

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div>
      <Header/>
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

