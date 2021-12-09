import { ErrorContainer } from './styles';

const Error = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <ErrorContainer>
      <div className="message">Tenemos un error</div>
      <button type="button" className="button" onClick={() => reloadPage()}>Recargar</button>
    </ErrorContainer>
  );
};

export default Error;
