import React from 'react';
import 'bulma/css/bulma.min.css';
import '../components/Result.css';

const Results = ({ onClose, results, data,name }) => {
  return(
    <div className='br'>
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{name} Answers</p>
          <button class="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body content">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p><strong>{result.qus}</strong></p>
                <p className={result.ans === data[i].answer ? 'has-background-success has-text-white p-2' : 'has-background-danger has-text-white p-2'}>Your Answer: {result.ans}</p>
                {result.ans !== data[i].answer && <p className="has-background-info has-text-white p-2">Correct Answer: {data[i].answer}</p>}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
    </div>
  );
}

export default Results;