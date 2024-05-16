const dataCash = [];

export const getRequest = async (url) => {
   try {
      if (dataCash.length) {
         return dataCash;
      }
      const res = await fetch(url);
      const data = await res.json();

      dataCash.push(...data);

      return data;
   } catch (error) {
      console.log(error);
   }
};
