function percorreArray(trsPacientes, comportamento) {
    for (var i = 0; i < trsPacientes.length; i++) {
        var pacienteTrAtual = trsPacientes[i];
        comportamento(pacienteTrAtual);
    }
}