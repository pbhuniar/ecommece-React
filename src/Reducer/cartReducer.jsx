import { cartTypes } from "../Action/actionConst";
const initialState = {
  products: [],
  singledata:{},
 
 
};

const cartReducer = (state = initialState, action) => {
  console.log("cart reducer action",action);
  switch (action.type) {

    case `${cartTypes.ADD_TO_CART}_SUCCESS`:
      const datac = action.payload.data;
      console.log("datac",datac)
      const datap = state.products;
      console.log("line no 16",datap)
      const match = datap.find((e) => e.id === datac.id);
      console.log("line no 17 ",match)
      if (match) {
        const dat = datap.map((e) =>
          e.id === datac.id ? { ...e, quantity: e.quantity + 1 } : e

        );
        // console.log("message 25",state.products.quantity)
        return (state = {
          ...state,
          products: dat,
          // total:state.products.quantity
        });
      } else {
        datap.push(datac);

        return (state = {
          ...state,
          products: [...datap],
        });
      }
      case `${cartTypes.ADD_FROM_CART}_SUCCESS`:
        const cid = action.payload.data
       
        console.log("uuuuu",cid)
       
     
        const cdata  = state.products;
        alert("Product Increment")

        const cdat = cdata.map(e =>
            e.id === cid ?
            {...e,quantity:e.quantity+1}
            :e)
        console.log("increase",cdat);
        return state = {
            ...state,
            products:cdat,
            
        }
        case `${cartTypes.REMOVE_FROM_CART}_SUCCESS`:
          const cid1 = action.payload.data         
          console.log("decre--",cid1)
         
          const cdata1  = state.products;
          alert("Product decrement")
  
          const cdat1 = cdata1.map(e =>
              e.id === cid1 ?
              {...e,quantity:e.quantity-1}
              :e)
          console.log("decrease",cdat1.quantity);
          return state = {
              ...state,
              products:cdat1,
          }
          case `${cartTypes.DELETE_FROM_CART}_SUCCESS`:
            const cdelid = action.payload.data;
            console.log("del payload",cdelid)
            const cdelData = state.products;
            const cdeldata = cdelData.filter(e => e.id!==cdelid)
            
            console.log(cdeldata);
            return state = {
              ...state,
              products:cdeldata,
          }
    default:
      return state;
  }
};

export default cartReducer;

