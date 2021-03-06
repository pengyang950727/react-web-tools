import {connect, createProvider} from 'react-redux';

const STORE_KEY = 'shell';

export const Provider = createProvider(STORE_KEY);

function connectExtended(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options = {}
) {
    options.storeKey = STORE_KEY;
    return connect(
        mapStateToProps,
        mapDispatchToProps,
        mergeProps,
        options
    );
}

export {connectExtended as connect};
