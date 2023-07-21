export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

// export const featuring = (store) => (next) => (actionInfo) => {
//     const featured = [{ name: 'Eddiie' }, ...actionInfo.action.payload];
//     const updateActionInfo = {
//         ...actionInfo,
//         action: { ...actionInfo.action, payload: featured }
//     };
//     next(updateActionInfo);
// }

// export const numberPokemon = (store) => (next) => (action) => {
//     if(action.length > 1){
//         const counted = action.payload.map((pokemon, index) => ({
//             ...pokemon,
//             name: `${[index + 1]}. ${pokemon.name}`
//         }));
    
//         const updateAction = {
//             ...action,
//             action: { ...action, payload: counted }
//         };
//         next(updateAction);
//     }


// };