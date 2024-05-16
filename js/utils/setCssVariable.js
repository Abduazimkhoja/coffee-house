const setCssVariable = (variable, newValue) => {
   if (!variable || !newValue) throw Error("Not all data is entered");
   document.documentElement.style.setProperty(variable, newValue);
};

// setCssVariable();
