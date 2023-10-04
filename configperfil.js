var sair = document.querySelector('#sair');
var aviso = document.querySelector('#aviso');
var alterar = document.querySelector("#alterar");
var alterar2 = document.getElementById("alterar2");
const input_user = document.getElementById("campo_user");
const confirma = document.getElementById("confirma");
const cancelar = document.getElementById("cancelar");
const input_personagem = document.getElementById("campo_personagem");
const confirma2 = document.getElementById("confirma2");
const cancelar2 = document.getElementById("cancelar2");
const escolherAvatar = document.getElementById("escolher_avatar");
const confirmaAvatar =  document.getElementById('confirma_avatar');
const cancelarAvatar = document.getElementById('cancelar_avatar');

sair.addEventListener('click', e => {
    window.location.href = "logout.php";
});

sair.addEventListener('mouseenter', e => {
    aviso.style.display = 'block';
    setTimeout(() => {
        aviso.style.opacity = 1;
    }, 10);
});

sair.addEventListener('mouseleave', e => {
    aviso.style.opacity = 0;
    setTimeout(() => {
        aviso.style.display = 'none';
    }, 300);
});

window.addEventListener('DOMContentLoaded', e => {
    const medidor = document.getElementById("medidor");
    const medidor2 = document.getElementById("medidor2");
    const input = document.getElementById("campo_user");
    const input2 = document.getElementById("campo_personagem");

    medidor.textContent = input.value;
    medidor2.textContent = input2.value;

    input.style.width = (medidor.offsetWidth + 5) + "px";
    input2.style.width = (medidor2.offsetWidth + 5) + "px";
});

alterar.addEventListener('click', e => {
    confirma.style.display = "block";
    cancelar.style.display = "block";
    alterar.style.display = "none";
    input_user.disabled = false;
    input_user.style.border = "solid";
    input_user.style.borderWidth = "3px";
    input_user.style.borderColor = "white";
    input_user.style.borderRadius = "5px";
    input_user.focus();
});

alterar2.addEventListener('click', e => {
    confirma2.style.display = "block";
    cancelar2.style.display = "block";
    alterar2.style.display = "none";
    input_personagem.disabled = false;
    input_personagem.style.border = "solid";
    input_personagem.style.borderWidth = "3px";
    input_personagem.style.borderColor = "white";
    input_personagem.style.borderRadius = "5px";
    input_personagem.focus();
});

input_user.addEventListener('focus', e => {
    input_user.style.border = "none";
});

input_personagem.addEventListener('focus', e => {
    input_personagem.style.border = "none";
});

input_user.addEventListener('input', e=>{
    document.getElementById("erro_nome_existe").style.display = "none";
    document.getElementById("erro_nome_caracter").style.display = "none";
    const medidor = document.getElementById("medidor");
    const input = document.getElementById("campo_user");
    medidor.textContent = input.value;
    input.style.width = (medidor.offsetWidth + 5) + "px";
});

var input_value = input_user.value;

input_personagem.addEventListener('input', e=>{
    document.getElementById("erro_tamanho").style.display = "none";
    const medidor2 = document.getElementById("medidor2");
    const input2 = document.getElementById("campo_personagem");
    medidor2.textContent = input2.value;
    input2.style.width = (medidor2.offsetWidth + 5) + "px";
});

var input_value2 = input_personagem.value;

cancelar.addEventListener('click', e => {
    confirma.style.display = "none";
    cancelar.style.display = "none";
    alterar.style.display = "block";
    input_user.disabled = true;
    input_user.style.border = "none";
    input_user.value = input_value;
    document.getElementById("erro_nome_existe").style.display = "none";
    document.getElementById("erro_nome_caracter").style.display = "none";
    const medidor = document.getElementById("medidor");
    const input = document.getElementById("campo_user");
    medidor.textContent = input.value;
    input.style.width = (medidor.offsetWidth + 5) + "px";
});

cancelar2.addEventListener('click', e => {
    confirma2.style.display = "none";
    cancelar2.style.display = "none";
    alterar2.style.display = "block";
    input_personagem.disabled = true;
    input_personagem.style.border = "none";
    input_personagem.value = input_value2;
    document.getElementById("erro_tamanho").style.display = "none";
    const medidor2 = document.getElementById("medidor2");
    const input2 = document.getElementById("campo_personagem");
    medidor2.textContent = input2.value;
    input2.style.width = (medidor2.offsetWidth + 5) + "px";
});

confirma.addEventListener('click', e => {
    e.preventDefault();

    const novoNome = input_user.value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'configperfil.php', true); // Atualize o arquivo PHP correto
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.responseText;
            const medidor = document.getElementById("medidor");
            const input = document.getElementById("campo_user");
            medidor.textContent = input.value;
            input.style.width = (medidor.offsetWidth + 5) + "px";
            if (response === 'success') {
                document.getElementById("nome_valido").style.display = "block";
                document.getElementById("nome_valido").style.opacity = "1";
                document.getElementById("erro_nome_existe").style.display = "none";
                document.getElementById("erro_nome_caracter").style.display = "none";
                confirma.style.display = "none";
                cancelar.style.display = "none";
                alterar.style.display = "block";
                input_user.disabled = true;
                input_user.style.border = "none";
                input_user.style.backgroundColor = "none";
                input_user.value = novoNome;
                setTimeout(function(){
                    document.getElementById("nome_valido").style.opacity = "0";
                }, 3000);
                setTimeout(function(){
                    document.getElementById("nome_valido").style.display = "none";
                    window.location.reload(true);
                }, 3200);
            } else {
                if(response === 'error_caracteres'){
                    document.getElementById("erro_nome_caracter").style.display = "block";
                    document.getElementById("erro_nome_caracter").style.opacity = "1";
                    document.getElementById("erro_nome_existe").style.display = "none";
                    document.getElementById("nome_valido").style.display = "none";
                    confirma.style.display = "block";
                    cancelar.style.display = "block";
                    alterar.style.display = "none";
                    input_user.disabled = false;
                    input_user.style.border = "block";
                    input_user.focus();
                    input_user.value = novoNome;
                }else{
                    document.getElementById("erro_nome_existe").style.display = "block";
                    document.getElementById("erro_nome_existe").style.opacity = "1";
                    document.getElementById("erro_nome_caracter").style.display = "none";
                    document.getElementById("nome_valido").style.display = "none";
                    confirma.style.display = "block";
                    cancelar.style.display = "block";
                    alterar.style.display = "none";
                    input_user.disabled = false;
                    input_user.style.border = "block";
                    input_user.focus();
                    input_user.value = novoNome;
                }
            }
        }
    };
    xhr.send('novoNome=' + encodeURIComponent(novoNome));
});


confirma2.addEventListener('click', e => {
    e.preventDefault();

    const NomePersonagem = input_personagem.value;

    const xhr2 = new XMLHttpRequest();
    xhr2.open('POST', 'configperfil.php', true); // Atualize o arquivo PHP correto
    xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            const response2 = xhr2.responseText;
            const medidor2 = document.getElementById("medidor2");
            const input2 = document.getElementById("campo_personagem");
            medidor2.textContent = input2.value;
            input2.style.width = (medidor2.offsetWidth + 5) + "px";
            if (response2 === 'success2') {
                document.getElementById("personagem_valido").style.display = "block";
                document.getElementById("personagem_valido").style.opacity = "1";
                document.getElementById("erro_tamanho").style.display = "none";
                confirma2.style.display = "none";
                cancelar2.style.display = "none";
                alterar2.style.display = "block";
                input_personagem.disabled = true;
                input_personagem.style.border = "none";
                input_personagem.style.backgroundColor = "none";
                input_personagem.value = NomePersonagem;
                setTimeout(function(){
                    document.getElementById("personagem_valido").style.opacity = "0";
                }, 3000);
                setTimeout(function(){
                    document.getElementById("personagem_valido").style.display = "none";
                    window.location.reload(true);
                }, 3200);

            } else {
                document.getElementById("erro_tamanho").style.display = "block";
                document.getElementById("erro_tamanho").style.opacity = "1";
                document.getElementById("personagem_valido").style.display = "none";
                confirma2.style.display = "block";
                cancelar2.style.display = "block";
                alterar2.style.display = "none";
                input_personagem.disabled = false;
                input_personagem.style.border = "block";
                input_personagem.focus();
                input_personagem.value = NomePersonagem;
            }
        }
    };
    xhr2.send('NomePersonagem=' + encodeURIComponent(NomePersonagem));
});

escolherAvatar.addEventListener('click', () => {
    document.getElementById('container_avatar').style.display = "block";
    document.getElementById('ocultar').style.display = "none";
    document.getElementById('body').style.display = "flex";
    document.getElementById('body').style.justifyContent = "center";
    document.getElementById('body').style.placeItems = "center";
});

cancelarAvatar.addEventListener('click', () => {
    document.getElementById('container_avatar').style.display = "none";
    document.getElementById('ocultar').style.display = "block";
    document.getElementById('body').style.display = "block";
    document.getElementById('body').style.justifyContent = "none";
    document.getElementById('body').style.placeItems = "none";
});

// Variável para armazenar o caminho da imagem selecionada
let selectedImagePath = "";

// Obtém todas as imagens com a classe "avatar_icon"
const avatarIcons = document.querySelectorAll('.avatar_icon');

// Adiciona um ouvinte de evento de clique a cada imagem
avatarIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Remove a classe "selected" de todas as imagens
        avatarIcons.forEach(icon => {
            icon.classList.remove('selected');
        });

        // Adiciona a classe "selected" à imagem clicada
        icon.classList.add('selected');

        // Obtém o caminho da imagem da propriedade "data-path"
        selectedImagePath = icon.getAttribute('data-path');

        // Use "selectedImagePath" conforme necessário (por exemplo, para exibir o avatar selecionado)
        console.log("Caminho da imagem selecionada:", selectedImagePath);
    });
});

confirmaAvatar.addEventListener('click', () => {
    if (selectedImagePath) {
        const xhrAvatar = new XMLHttpRequest();
        xhrAvatar.open('POST', 'configperfil.php', true);
        xhrAvatar.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhrAvatar.onreadystatechange = function () {
            if (xhrAvatar.readyState === 4 && xhrAvatar.status === 200) {
                const response = xhrAvatar.responseText;
                if (response === 'avatar_success') {
                    // Avatar salvo com sucesso no banco de dados
                    console.log('Avatar salvo com sucesso!');
                    // Redirecione ou faça outras ações após o sucesso
                } else {
                    // Trate os erros aqui
                    console.error('Erro ao salvar o avatar no banco de dados.');
                }
            }
        };
        xhrAvatar.send('avatar_path=' + encodeURIComponent(selectedImagePath));
    } else {
        // Caso nenhum avatar tenha sido selecionado
        window.alert('Nenhum avatar selecionado.');
    }
    document.getElementById('container_avatar').style.display = "none";
    document.getElementById('ocultar').style.display = "block";
    document.getElementById('body').style.display = "block";
    document.getElementById('body').style.justifyContent = "none";
    document.getElementById('body').style.placeItems = "none";
    window.location.reload(true);
});
