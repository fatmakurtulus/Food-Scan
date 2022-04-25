import {glu,nut,lac,none} from './data';

export function getAlergenLevel (level){
    switch(level){
        case glu: return 'Gluten';
        case lac: return 'Lactose';
        case nut: return 'Nut';
        case none: return 'None';
        default:return '?';
    }
}

export function getLevelIcon(level) {
    if (level === none ) {
      return 'md-thumbs-up';
    } else {
      return 'ios-warning';
    }
  }


  export function getLevelColor(level) {
    switch (level) {
      case glu: return 'red';
      case lac: return 'red';
      case nut: return 'red';
      case none: return 'black';
      default: return 'black';
    }
  }
  
  function getWrning(items){
      const levels =item.map(ingredient=>ingredient.level)

      if(levels.includes(glu)||levels.includes(lac)||levels.includes(nut)){
          return 'bu ürün alerjen içerir.'
      }
  }
  export function getSummary(product) {
    if (!product.ingredients || !product.ingredients.length) {
      return {
        text: 'No ingredients listed.'
      }
    }

    return{
        text:getWrning(product.ingredients)
    };
}