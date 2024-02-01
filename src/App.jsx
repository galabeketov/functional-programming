import { useCallback, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const inputRef = useCallback((input) => {
    if (input === null) return;

    input.focus();
  }, []);

  return (
    <>
      <button
        onClick={(e) => {
          setShow(!show);
        }}
      >
        switch
      </button>
      {show && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;
