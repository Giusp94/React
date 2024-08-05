import { createContext } from "react";

export const LanguageContext = createContext("en");

/*
Create a Hello function component that renders the "Hello, World!" message within an h2 tag. 
Create a LanguageContext and wrap the Hello component within its provider. 
Add a select tag to the component in which the Hello component is rendered that allows the user to select the language, a
nd pass it as a value to the Provider.

Consume the LanguageContext within the Hello component by using the useContext hook, and show the "Hello, World!" message in the correct language
*/
