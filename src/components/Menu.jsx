const pratos = [
  {
  nome: "Baião de Dois",
  preco: "R$ 29,90"
  },
  {
  nome: "Carne de Sol com Macaxeira",
  preco: "R$ 39,90"
  },
  {
  nome: "Sarapatel",
  preco: "R$ 34,90"
  },
  {
  nome: "Moqueca Nordestina",
  preco: "R$ 42,90"
  }
  ];
   
  function Menu() {
  return (
  <section id="menu" className="menu">
  <h2>Nosso Cardápio</h2>
   
  <div className="cards">
  {pratos.map((item, index) => (
  <div className="card" key={index}>
  <h3>{item.nome}</h3>
  <p>{item.preco}</p>
  </div>
  ))}
  </div>
  </section>
  );
  }
   
  export default Menu;