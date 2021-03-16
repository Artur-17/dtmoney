import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "../TransactionTable/styles";

export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$500</td>
                        <td>Retirada</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td >Salário</td>
                        <td className="deposit">R$3.000</td>
                        <td>Depósito</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}