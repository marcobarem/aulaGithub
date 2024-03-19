document.addEventListener('DOMContentLoaded', () => {
    const gerarImagemBtn = document.getElementById('gerarImagem');

    gerarImagemBtn.addEventListener('click', async () => {
        const textoSuperiorInput = document.getElementById('textoSuperiorInput').value;
        const textoInferiorInput = document.getElementById('textoInferiorInput').value;
        
        // Busca uma imagem de gato da API
        const apiKey = 'live_ 601y0ubKcDR8Yc0esiECnukjRVFQnv xd8V7bznSwxjSomyxM3edDhnBS8STC Ysed'; 
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`);
        const data = await response.json();
        const catImageUrl = data[0].url;

        // Configura a imagem como fundo da div #imagem
        const imagemDiv = document.getElementById('imagem');
        imagemDiv.style.backgroundImage = `url('${catImageUrl}')`;

        // Insere os textos
        document.getElementById('textoSuperior').textContent = textoSuperiorInput;
        document.getElementById('textoInferior').textContent = textoInferiorInput;
    });
});
