import { EmptyContainer } from './styles';

const Empty = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <EmptyContainer>
      <div className="message">No hemos encontrado resultados</div>
      <button type="button" className="button" onClick={() => reloadPage()}>Recargar</button>
    </EmptyContainer>
  );
};

export default Empty;
