const manageSvgDataOnResizeAndInit = (width, elem = {}, initialToFinal = false) => {
  if (width > 1300) { 
    elem.widthInitial = 989;
    elem.widthFinal = 179;
    elem.height = 230;
    elem.viewBoxInitial = '0 0 989 230';
    elem.viewBoxFinal = '0 0 179 230';
    elem.eMorphFinal = 'M178.086 187.286V230H0V0H173.814V42.7143H52.9V92.6571H159.686V134.057H52.9V187.286H178.086Z';
    elem.eMorphInitial = 'M988.086 187.286V230H0V0H983.814V42.7143H52.9V92.6571H969.686V134.057H52.9V187.286H988.086ZZ';
  }

  if (width <= 1300) { 
    elem.widthFinal = 132;
    elem.widthInitial = 731;
    elem.height = 170;
    elem.viewBoxFinal = '0 0 132 170';
    elem.viewBoxInitial = '0 0 731 170';
    elem.eMorphInitial = 'M730.324 138.429V170H0V0H727.167V31.5714H39.1V68.4857H716.724V99.0857H39.1V138.429H730.324Z';
    elem.eMorphFinal = 'M131.629 138.429V170H0V0H128.471V31.5714H39.1V68.4857H118.029V99.0857H39.1V138.429H131.629Z';
   }

   if (initialToFinal) {
     return {
       ...elem,
       viewBoxInitial: elem?.viewBoxFinal,
       widthInitial: elem?.widthFinal,
       dMorphInitial: elem?.eMorphFinal,
     }
   }

   return elem;
}

export default manageSvgDataOnResizeAndInit;