import "../styles/avisos.css";

export default function Avisos({ aviso }) {
  return (
    <>
      <div className="main">
        <div className="centerPage">          
          <h1 className='avisoColor'>{aviso}</h1>
        </div>
      </div>
    </>
  );
}
