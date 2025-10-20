document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cepBtn').addEventListener('click',() => {
        const rua = document.getElementById('end');
        const bairro = document.getElementById('bairro')

        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', endpoint);
        xhttp.send()

        const find = document.querySelector('.btn i');
        const loading = document.querySelector('.btn span');

        find.classList.add('d-none');
        loading.classList.remove('d-none')

        xhttp.onload = function() {
            if (xhttp.status === 200) {
                const dados = JSON.parse(xhttp.responseText);

                const lograNome = dados.logradouro;
                const bairroNome = dados.bairro;
                
                if (dados.erro) {
                    alert('Cep não encontrado!')
                    return;
                }
                rua.value = lograNome;
                bairro.value = bairroNome;
                
                setTimeout(() => {
                    find.classList.remove('d-none');
                    loading.classList.add('d-none')
                }, 500);
            }
        }
    })
})