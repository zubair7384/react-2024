import React, { useState, useEffect } from "react";

const InputBox = () => {
  const [name, setName] = useState("");
  const [rednderCount, setRednderCount] = useState(0);

  useEffect(() => {
    // setRednderCount(rednderCount + 1);
  });

  return (
    <div>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I have rendered {rednderCount} times.</div>
    </div>
  );
};

export default InputBox;

// Best way
// import React, { useState, useEffect } from "react";

// const InputBox = () => {
//   const [name, setName] = useState("");
//   const renderCount = React.useRef(0);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   });

//   return (
//     <div>
//       <input
//         name="name"
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <div>My name is {name}</div>
//       <div>I have rendered {renderCount.current} times.</div>
//     </div>
//   );
// };

// export default InputBox;

// import React, { useRef } from "react";

// function InputBox() {
//   const inputRef = useRef(null);
//   const buttonRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();

//     const button = buttonRef.current;
//     button.classList.add("newClassName");
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button ref={buttonRef} onClick={focusInput}>
//         Focus Input
//       </button>
//     </div>
//   );
// }

// export default InputBox;
