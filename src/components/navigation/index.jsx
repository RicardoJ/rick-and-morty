import './index.css';
export function Navigation({ page, incrementPage, decrementPage }) {
  return (
    <div className='navigation'>
      <button disabled={page === 1} onClick={() => decrementPage()}>
        Prev
      </button>
      <h2>Page: {page}</h2>
      <button onClick={() => incrementPage()}>Next</button>
    </div>
  );
}
