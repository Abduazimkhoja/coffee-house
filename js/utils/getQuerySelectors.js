export const getQuery = ([elemObj = null, elemObjAll = null]) => {
   let res = {};

   if (elemObj) {
      const elemList = Object.entries(elemObj);

      elemList.forEach(([name, elem]) => {
         res[name] = document.querySelector(elem);
      });
   }

   if (elemObjAll) {
      const elemListAll = Object.entries(elemObjAll);

      elemListAll.forEach(([name, elem]) => {
         res[name] = document.querySelectorAll(elem);
      });
   }

   return res;
};
