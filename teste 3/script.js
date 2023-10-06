

function Girassol() {
    document.getElementById('myImage').src = 'https://ninesh.com.br/wp-content/uploads/2018/09/Fotolia_113140038_S-2.jpg';
}

// Função para ir pro broto
function Broto() {
    document.getElementById('myImage').src = 'https://minhasplantas3.s3.amazonaws.com/media/plantas/galeria/girassol-helianthus-annuus-2.jpeg';
}

// Adicionar ouvintes de evento aos botões
document.getElementById('Girassol').addEventListener('click', Girassol);
document.getElementById('Broto').addEventListener('click', Broto);


