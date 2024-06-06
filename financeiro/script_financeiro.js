function calcularLucroGastos() {
    // Coletar valores de gastos
    let historicoCompras = parseFloat(document.getElementById('historicoCompras').value) || 0;
    let salarioFuncionarios = parseFloat(document.getElementById('salarioFuncionarios').value) || 0;
    let infraestrutura = parseFloat(document.getElementById('infraestrutura').value) || 0;
    let publicidade = parseFloat(document.getElementById('publicidade').value) || 0;
    let contas = parseFloat(document.getElementById('contas').value) || 0;

    // Calcular total de gastos
    let totalGastos = historicoCompras + salarioFuncionarios + infraestrutura + publicidade + contas;

    // Coletar valores de fechamento do caixa
    let fechamentoDiario = parseFloat(document.getElementById('fechamentoDiario').value) || 0;
    let fechamentoSemanal = parseFloat(document.getElementById('fechamentoSemanal').value) || 0;
    let fechamentoMensal = parseFloat(document.getElementById('fechamentoMensal').value) || 0;
    let totalAcumuladoMes = parseFloat(document.getElementById('totalAcumuladoMes').value) || 0;

    // Calcular total de receitas
    let totalReceitas = fechamentoDiario + fechamentoSemanal + fechamentoMensal + totalAcumuladoMes;

    // Calcular lucro líquido
    let lucroLiquido = totalReceitas - totalGastos;

    // Atualizar campos de resultado
    document.querySelector('.gastos').value = totalGastos.toFixed(2);
    document.querySelector('.lucro').value = lucroLiquido.toFixed(2);
}