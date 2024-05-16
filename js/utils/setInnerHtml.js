export const setInnerHtml = (element, value, elementType = "class") => {
   if (!element || !value) throw Error("Not all data is entered");

   const queryElement = document.querySelector(element);
   queryElement.innerHTML = value;
};