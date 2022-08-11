import java.util.ArrayList;
import java.util.List;

public class Banco {
	
	private String nome;
	private List<Conta> contas;
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Conta> getContas() {
		return contas;
	}

	public void setContas(List<Conta> contas) {
		this.contas = contas;
	}

	public List<Cliente> ListarClientes(List<Conta> contas) {
		Cliente cliente = new Cliente();
		List<Cliente> listaClientes = new ArrayList<Cliente>();
		Conta conta;
		for(int i=0; i<contas.size(); i++) {
			listaClientes.add(contas.get(i).getCliente());
		}
		
		for (Cliente cliente2 : listaClientes) {
			System.out.println(cliente2.getNome());
		}
		return listaClientes;
	}
	

	
	
}
