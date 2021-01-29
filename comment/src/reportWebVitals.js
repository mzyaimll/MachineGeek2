/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:50:49
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-29 16:50:49
 * @FilePath: /MachineGeek2/comment/src/reportWebVitals.js
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
