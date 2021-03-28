const manageSvgDataOnResizeAndInit = (width, elem = {}, initialToFinal = false) => {
  if (width > 1300) { 
    elem.widthInitial = 1252;
    elem.widthFinal = 232;
    elem.height = 230;
    elem.viewBoxInitial = '0 0 1252 230';
    elem.viewBoxFinal = '0 0 232 230';
    elem.dMorphFinal = 'M0 0H104.486C129.457 0 151.471 4.81905 170.529 14.4572C189.805 23.8762 204.7 37.2381 215.214 54.5429C225.948 71.8476 231.314 92 231.314 115C231.314 138 225.948 158.152 215.214 175.457C204.7 192.762 189.805 206.233 170.529 215.871C151.471 225.29 129.457 230 104.486 230H0V0ZM101.857 186.3C124.857 186.3 143.148 179.948 156.729 167.243C170.529 154.319 177.429 136.905 177.429 115C177.429 93.0952 170.529 75.7905 156.729 63.0857C143.148 50.1619 124.857 43.7 101.857 43.7H53.2286V186.3H101.857Z';
    elem.dMorphInitial = 'M0 0H1124.49C1149.46 0 1171.47 4.81905 1190.53 14.4572C1209.8 23.8762 1224.7 37.2381 1235.21 54.5429C1245.95 71.8476 1251.31 92 1251.31 115C1251.31 138 1245.95 158.152 1235.21 175.457C1224.7 192.762 1209.8 206.233 1190.53 215.871C1171.47 225.29 1119.46 230 1094.49 230H0V0ZM1121.86 186.3C1144.86 186.3 1163.15 179.948 1176.73 167.243C1190.53 154.319 1197.43 136.905 1197.43 115C1197.43 93.0952 1190.53 75.7905 1176.73 63.0857C1163.15 50.1619 1144.86 43.7 1121.86 43.7H53.2286V186.3H1121.86Z';
  }
  if (width <= 1300) { 
    elem.widthFinal = 171;
    elem.widthInitial = 925;
    elem.height = 170;
    elem.viewBoxFinal = '0 0 171 170';
    elem.viewBoxInitial = '0 0 925 170';
    elem.dMorphFinal = 'M0 0H77.2286C95.6857 0 111.957 3.56191 126.043 10.6857C140.29 17.6476 151.3 27.5238 159.071 40.3143C167.005 53.1048 170.971 68 170.971 85C170.971 102 167.005 116.895 159.071 129.686C151.3 142.476 140.29 152.433 126.043 159.557C111.957 166.519 95.6857 170 77.2286 170H0V0ZM75.2857 137.7C92.2857 137.7 105.805 133.005 115.843 123.614C126.043 114.062 131.143 101.19 131.143 85C131.143 68.8095 126.043 56.019 115.843 46.6286C105.805 37.0762 92.2857 32.3 75.2857 32.3H39.3429V137.7H75.2857Z';
    elem.dMorphInitial = 'M0 0H831.142C849.599 0 865.87 3.56191 879.956 10.6857C894.204 17.6476 905.213 27.5238 912.984 40.3143C920.918 53.1048 924.884 68 924.884 85C924.884 102 920.918 116.895 912.984 129.686C905.213 142.476 894.204 152.433 879.956 159.557C865.87 166.519 827.425 170 808.968 170H0V0ZM829.199 137.7C846.199 137.7 859.718 133.005 869.756 123.614C879.956 114.062 885.056 101.19 885.056 85C885.056 68.8095 879.956 56.019 869.756 46.6286C859.718 37.0762 846.199 32.3 829.199 32.3H39.3429V137.7H829.199Z';
   }

   if (initialToFinal) {
     return {
       ...elem,
       viewBoxInitial: elem?.viewBoxFinal,
       widthInitial: elem?.widthFinal,
       dMorphInitial: elem?.dMorphFinal,
     }
   }

   return elem;
}

export default manageSvgDataOnResizeAndInit;