const categoriesLinks = document.querySelectorAll('nav a');
const selectedCategory = document.getElementById('selected-category');

categoriesLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
//pega o nome da categoria do link clicado
const categoryname = link.textContent;

//atualiza o texto do elemento 'selected-category' com o nome da categoria
        selectedCategory.textContent = categoryname;

//remove a classe 'active' de todos os links
        categoriesLinks.forEach(function (categoryLink) {
            categoryLink.classList.remove('active');
        });

        //adiciona a classe 'active' ao link clicado
        link.classList.add('active');

