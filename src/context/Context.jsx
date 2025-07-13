// import { createContext, useState } from "react";


// export const Context = createContext();

// const ContextProvider = (props) => {
// 	const [input, setInput] = useState("");
// 	const [recentPrompt, setRecentPrompt] = useState("");
// 	const [prevPrompts, setPrevPrompts] = useState([]);
// 	const [showResults, setShowResults] = useState(false);
// 	const [loading, setLoading] = useState(false);
// 	const [resultData, setResultData] = useState("");

// 	const delayPara = (index, nextWord) => {
// 		setTimeout(function () {
// 			setResultData((prev) => prev + nextWord);
// 		}, 10 * index);
// 	};
//     const newChat = () =>{
//         setLoading(false);
//         setShowResults(false)
//     }

// 	const onSent = async (prompt) => {
// 		setResultData("");
// 		setLoading(true);
// 		setShowResults(true);
//         let response;
//         if(prompt !== undefined){
//             response = await runChat(prompt);
//             setRecentPrompt(prompt)
//         }else{
//             setPrevPrompts(prev=>[...prev,input]);
//             setRecentPrompt(input);
//             response=await runChat(input);
//         }
		
// 		try {
			
			
// 			let responseArray = response.split("**");
//             let newResponse = "";
// 			for (let i = 0; i < responseArray.length; i++) {
// 				if (i === 0 || i % 2 !== 1) {
// 					newResponse += responseArray[i];
// 				} else {
// 					newResponse += "<b>" + responseArray[i] + "</b>";
// 				}
// 			}
// 			let newResponse2 = newResponse.split("*").join("<br/>");
// 			let newResponseArray = newResponse2.split("");
// 			for (let i = 0; i < newResponseArray.length; i++) {
// 				const nextWord = newResponseArray[i];
// 				delayPara(i, nextWord + "");
// 			}
// 		} catch (error) {
// 			console.error("Error while running chat:", error);
// 			// Handle error appropriately
// 		} finally {
// 			setLoading(false);
// 			setInput("");
// 		}
// 	};

// 	const contextValue = {
// 		prevPrompts,
// 		setPrevPrompts,
// 		onSent,
// 		setRecentPrompt,
// 		recentPrompt,
// 		input,
// 		setInput,
// 		showResults,
// 		loading,
// 		resultData,
// 		newChat,
// 	};

// 	return (
// 		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
// 	);
// };

// export default ContextProvider;








// import runChat from "../config/Gemini.js";
// import { createContext} from "react";
//  export const Context = createContext();

//  const ContextProvider = (props) => {

//   const onsent= async(prompt)=>{
//     await runChat(prompt)
    

// }
// onsent("Hello, how are you?");

//     const contextval={

//     }
//   return (
//     <Context.Provider value={contextval}>
//       {props.children}
//     </Context.Provider>
//   )
// }

// export default ContextProvider;













import { createContext, useState } from "react";
import RunChat from "../config/Gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {
  const [response, setResponse] = useState("");

  const onSent = async (prompt) => {
    try {
      const result = await runChat(prompt);
      setResponse(result);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setResponse("Sorry, I couldn't process your request.");
    }
  };
onSent("Hello, how are you?");
  const contextValue = {
    onSent,
    response
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;