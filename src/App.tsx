import "./App.css";
// import { Panel } from "./example";

// function App() {
//   return (
//     <>
//       // Це працює:
//       <Panel>
//         <div>Hello, world!</div>
//       </Panel>
//       // Це не працює, тому що // "Hello, world!" - це рядок, а не елемент
//       <Panel>Hello, world!</Panel>
//     </>
//   );
// }

// export default App;

// import React, { useReducer, useEffect } from "react";

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// type State = {
//   loading: boolean;
//   error: string | null;
//   user: User | null;
// };

// type Action =
//   | { type: "LOADING" }
//   | { type: "SUCCESS"; payload: User }
//   | { type: "ERROR"; error: string };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case "LOADING":
//       return { ...state, loading: true, error: null };
//     case "SUCCESS":
//       return { loading: false, error: null, user: action.payload };
//     case "ERROR":
//       return { ...state, loading: false, error: action.error };
//     default:
//       throw new Error();
//   }
// }

// const initialState: State = {
//   loading: false,
//   error: null,
//   user: null,
// };

// export function UserLoader() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const fetchUser = async () => {
//       dispatch({ type: "LOADING" });

//       try {
//         const response = await fetch("/api/user");
//         const user = await response.json();

//         dispatch({ type: "SUCCESS", payload: user });
//       } catch (error) {
//         dispatch({ type: "ERROR", error: (error as Error).message });
//       }
//     };

//     fetchUser();
//   }, []);

//   if (state.loading) {
//     return <div>Loading...</div>;
//   }

//   if (state.error) {
//     return <div>Error: {state.error}</div>;
//   }

//   if (!state.user) {
//     return null;
//   }

//   return (
//     <div>
//       <p>{state.user.name}</p>
//       <p>{state.user.email}</p>
//     </div>
//   );
// }

// import React, { KeyboardEvent } from "react";

// type InputProps = {
//   value: string;
//   onChange: (value: string) => void;
//   onPressEnter: () => void;
// };

// function Input({ value, onChange, onPressEnter }: InputProps) {
//   const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       console.log("Натиснута клавіша Enter");
//       onPressEnter();
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(event.target.value);
//   };

//   return (
//     <input value={value} onChange={handleChange} onKeyPress={handleKeyPress} />
//   );
// }

// export default Input;
