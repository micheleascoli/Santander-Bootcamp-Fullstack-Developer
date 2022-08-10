
public interface IConta {
	
	void sacar(double valor);
	
	void depositar(double valor);
	
	void transferir(Conta contaDestiono, double valor);
	
	void imprimirExtrato();

}
