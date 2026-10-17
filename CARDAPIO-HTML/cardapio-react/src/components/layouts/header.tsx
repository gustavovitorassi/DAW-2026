export function Header() {
return(
    <header>
        <div className="container">
          <div className="brand">
            <img
              src="./asets/img/logo_lanchonete.svg"
              alt="Logo da lanchonete"
            />
            <div>
              <h1>CARDÁPIO DIGITAL</h1>
              <p>faça o pedido pelo nosso cardápio digital</p>
            </div>
          </div>

          <div className="cart-button">
            <img src="./asets/img/cart.svg" alt="Carrinho" />
          </div>
        </div>
      </header>

) 
}