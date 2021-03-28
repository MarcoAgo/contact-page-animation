const manageSvgDataOnResizeAndInit = (width, elem = {}) => {
  if (width > 1300) {
    elem.width = 518;
    elem.height = 230;
    elem.viewBox = '0 0 518 230';
    elem.d1 = 'M0 0H53.2286V186.629H168.557V230H0V0Z';
    elem.d2 = 'M198.298 0H251.527V230H198.298V0Z';
    elem.d3 = 'M517.053 0V230H473.353L358.682 90.3571V230H306.11V0H350.139L464.482 139.643V0H517.053Z';
  }

  if (width <= 1300) {
    elem.width = 383;
    elem.height = 170;
    elem.viewBox = '0 0 383 170';
    elem.d1 = 'M0 0H39.3429V137.943H124.586V170H0V0Z';
    elem.d2 = 'M146.568 0H185.911V170H146.568V0Z';
    elem.d3 = 'M382.17 0V170H349.87L265.113 66.7857V170H226.256V0H258.798L343.313 103.214V0H382.17Z';
  }

  return elem;
} 

export default manageSvgDataOnResizeAndInit;