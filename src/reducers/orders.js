import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  
  switch (action.type) {
    case CREATE_NEW_ORDER: {
      let newState=Object.assign([], state);
      
      newState.push({
        id: action.payload.id,
        ingredients: [],
        position: 'clients',
        recipe: action.payload.recipe
      });
      return newState;        
    }

    case MOVE_ORDER_NEXT:{     
      let newState=Object.assign([], state);

      newState.forEach(el=>{   
        if(el.id===action.payload){
          if(el.position==='clients'){
            el.position ="conveyor_1";
          }
          else if(el.position==='conveyor_1'){
            el.position ="conveyor_2";
          }
          else if(el.position==='conveyor_2'){
            el.position ="conveyor_3";
          }
          else if(el.position==='conveyor_3'){
            el.position ="conveyor_4";
          }
          else if(el.position==='conveyor_4'){
            if(arraysCompare(el.recipe, el.ingredients)){
              el.position ="finish";
            }
            
          }        

        }
      })

      return newState;
    }

    case MOVE_ORDER_BACK:{
      let newState=Object.assign([], state);

      newState.forEach(el=>{
        if(el.id===action.payload){
            if(el.position==='conveyor_2'){
              el.position ="conveyor_1";
            }
            else if(el.position==='conveyor_3'){
              el.position ="conveyor_2";
            }
            else if(el.position==='conveyor_4'){
              el.position ="conveyor_3";
            }
            else if(el.position==='finish'){
              el.position ="conveyor_4";
            }        

          }
      })

      return newState;
    }

    case ADD_INGREDIENT:{
      let newState=Object.assign([], state);
      let {payload}=action;

      newState.forEach(el=>{
        
        if(el.position===action.payload.from && el.recipe.includes(payload.ingredient)&&!el.ingredients.includes(payload.ingredient)){
          
          el.ingredients.push(payload.ingredient);
        }

      })
      return newState;
    }

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);

const arraysCompare=(arr1, arr2)=>{
  if(arr1.length!==arr2.length) return false;

  return arr1.every(el=>arr2.includes(el));
}
