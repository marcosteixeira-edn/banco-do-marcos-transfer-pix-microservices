document.getElementById('transferForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const key = document.getElementById('key').value;
    const amount = document.getElementById('amount').value;
    const submitBtn = document.getElementById('submitBtn');
    const resultDiv = document.getElementById('result');

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processando...';
    resultDiv.classList.add('hidden');
    resultDiv.className = 'hidden'; // Reset classes

    try {
        const response = await fetch('http://localhost:3000/api/transfer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key, amount })
        });

        const data = await response.json();

        resultDiv.classList.remove('hidden');
        
        if (response.ok) {
            resultDiv.classList.add('success');
            resultDiv.innerHTML = `<strong>Sucesso!</strong><br>${data.message}<br>ID: ${data.transactionId}`;
        } else {
            resultDiv.classList.add('error');
            resultDiv.textContent = `Erro: ${data.error || 'Falha na transferência'}`;
        }

    } catch (error) {
        console.error('Error:', error);
        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('error');
        resultDiv.textContent = 'Erro ao conectar-se ao servidor.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Transferir';
    }
});
