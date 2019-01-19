// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
import {showRequest, showSuccess} from '../actions';
import {show} from '../api';


export const showMiddleware = store => next => action => {
    if (action.type === showRequest.toString()) {
        show(action.payload)
            .then(data=> {
                store.dispatch(showSuccess(data))
            })
    }
    
    
    return next(action);
};

