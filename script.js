function calcularImpacto() {
    // Captura o valor digitado no input
    const hectaresInput = document.getElementById('hectares').value;
    const hectares = parseFloat(hectaresInput);

    // Validação simples para garantir que o número é válido
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira um número válido de hectares.");
        return;
    }

    // Valores fictícios baseados em médias de sustentabilidade:
    // Ex: Economia de 50.000 litros de água por hectare/ano com gotejamento tecnológico
    // Ex: Redução de 120kg de CO2 por hectare/ano com plantio direto/energia solar
    const aguaEconomizada = hectares * 50000;
    const co2Evitado = hectares * 120;

    // Atualiza os valores na tela formatando os números para o padrão brasileiro
    document.getElementById('agua-resultado').innerText = aguaEconomizada.toLocaleString('pt-BR');
    document.getElementById('co2-resultado').innerText = co2Evitado.toLocaleString('pt-BR');

    // Remove a classe 'hidden' para fazer o resultado aparecer
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('hidden');
}