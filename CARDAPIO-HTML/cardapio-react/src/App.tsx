import { Footer } from "./components/layouts/footer";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="brand">
            <img
              src="./assets/img/logo_lanchonete.svg"
              alt="Logo da lanchonete"
            />
            <div>
              <h1>CARDÁPIO DIGITAL</h1>
              <p>faça o pedido pelo nosso cardápio digital</p>
            </div>
          </div>

          <div className="cart-button">
            <img src="./assets/img/cart.svg" alt="Carrinho" />
          </div>
        </div>
      </header>

      <nav>
        <ul className="container">
          <li>
            <a href="#" className="active">
              todos
            </a>
          </li>
          <li>
            <a href="#">lanches</a>
          </li>
          <li>
            <a href="#">porções</a>
          </li>
          <li>
            <a href="#">bebidas</a>
          </li>
          <li>
            <a href="#">sobremesas</a>
          </li>
        </ul>
      </nav>

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>
              categoria: <span id="selected-category">todos</span>
            </p>
            <p>10 itens</p>
          </header>
          <article>
            <figure>
              <img src="./assets/img/burger.png" alt="Burger" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Burger</h3>
            <p>Pão brioche, hambúrguer 160g, queijo prato e molho da casa.</p>
            <p>R$ 22,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/burger-bacon.png" alt="Bacon Burger" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Bacon Burger</h3>
            <p>
              Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da
              casa.
            </p>
            <p>R$ 25,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/burger-double.png" alt="Duplo Burguer" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Duplo Burguer</h3>
            <p>
              Dois hambúrgueres de 160g cada, cheddar, bacon e cebola
              caramelizada.
            </p>
            <p>R$ 29,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/batata-rustica.png" alt="Batata Rústica" />
              <figcaption>Porções</figcaption>
            </figure>
            <h3>Batata Rústica</h3>
            <p>Porção de batata com alecrim, parmesão e maionese verde.</p>
            <p>R$ 18,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>

          <article>
            <figure>
              <img
                src="./assets/img/batata-tradicional.png"
                alt="Batata Tradicional"
              />
              <figcaption>Porções</figcaption>
            </figure>
            <h3>Batata Tradicional</h3>
            <p>Porção de batata e maionese verde.</p>
            <p>R$ 15,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/agua.png" alt="Água Sem Gás" />
              <figcaption>Bebidas</figcaption>
            </figure>
            <h3>Água Sem Gás</h3>
            <p>Garrafa descartável de água sem gás com 500 ml.</p>
            <p>R$ 8,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/refri.png" alt="Refrigerante 300 ml" />
              <figcaption>Bebidas</figcaption>
            </figure>
            <h3>Refrigerante 300 ml</h3>
            <p>Copo de refrigerante de 300 ml.</p>
            <p>R$ 10,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/chopp.png" alt="Chopp 300 ml" />
              <figcaption>Bebidas</figcaption>
            </figure>
            <h3>Chopp 300 ml</h3>
            <p>Caneca de 300 ml do nosso chopp pilsen geladíssimo.</p>
            <p>R$ 15,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/petit-gateau.png" alt="Petit Gateau" />
              <figcaption>Sobremesas</figcaption>
            </figure>
            <h3>Petit Gateau</h3>
            <p>Petit Gateau com uma bola de sorvete de creme.</p>
            <p>R$ 25,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>

          <article>
            <figure>
              <img
                src="./assets/img/mousse-maracuja.png"
                alt="Mousse de Maracujá"
              />
              <figcaption>Sobremesas</figcaption>
            </figure>
            <h3>Mousse de Maracujá</h3>
            <p>Mousse de maracujá feito com a fruta de verdade.</p>
            <p>R$ 18,00</p>
            <button type="button">Adicionar ao carrinho</button>
          </article>
        </section>

        <aside>
          <h2>Seu pedido</h2>
          <div className="cart-empty">
            <img src="./assets/img/cart.svg" alt="Carrinho vazio" />
            <p>Seu carrinho está vazio</p>
            <p>Escolha os produtos e adicione ao carrinho.</p>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}

export default App;
