export const TabelaAtualizacoes = ({ atualizacao }) => {

  return (
    <div>
      <h1>Data: {new Date(atualizacao.timestamp).toDateString()}</h1>
      <table>
        <thead>
          <tr>
            {atualizacao.dados[0].map((d, i) => <th key={i}>{d}</th>)}
          </tr>
        </thead>
        <tbody>
          {atualizacao.dados.map((d, i) => {
            if (i === 0) return null;
            return (
              <tr key={i}>
                {d.map((dd, ddIndex) => <td key={ddIndex}>{dd}</td>)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}