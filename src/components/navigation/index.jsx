import './index.css';
export default function Navigation({ page, incrementPage, decrementPage }) {
  return (
    <div className="navigation" data-testid="navigation">
      <button disabled={page === 1} onClick={() => decrementPage()}>
        Prev
      </button>
      <h2>Page: {page}</h2>
      <button onClick={() => incrementPage()}>Next</button>
    </div>
  );
}
