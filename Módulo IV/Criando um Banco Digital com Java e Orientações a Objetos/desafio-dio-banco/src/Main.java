import java.util.ArrayList;
import java.util.List;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Banco banco = new Banco();
		banco.setNome("Banco M");
		
		Cliente cli01 = new Cliente();
		cli01.setNome("Michele");
		cli01.setBanco(banco);
		
		Cliente cli02 = new Cliente();
		cli02.setNome("Maria");
		cli02.setBanco(banco);
		
		Cliente cli03 = new Cliente();
		cli03.setNome("João");
		cli03.setBanco(banco);
		
		Conta cc01 = new ContaCorrente(cli01);
		Conta poupanca01 = new ContaPoupanca(cli01);
		
		Conta cc02 = new ContaCorrente(cli02);
		Conta poupanca02 = new ContaPoupanca(cli02);

		Conta cc03 = new ContaCorrente(cli03);
		Conta poupanca03 = new ContaPoupanca(cli03);	
		
		List<Conta> listaContas = new ArrayList<Conta>();
		listaContas.add(cc01);
		listaContas.add(cc02);
		listaContas.add(cc03);
//		listaContas.add(poupanca01);
//		listaContas.add(poupanca02);
//		listaContas.add(poupanca03);
		
		banco.ListarClientes(listaContas);

		cc01.depositar(100);
		cc01.transferir(poupanca01, 50);
		
		cc01.imprimirExtrato();
		poupanca01.imprimirExtrato();	

	}

}
