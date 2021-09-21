import {takeLatest, call, put} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'



export function* fetchCollectionsAsync() {
    
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))

    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
        //put is a saga effect way saying to dispatch
    }
};

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        );
    };
    //Below is a redux-thunk way handling async call
    //     collectionRef
    //     .get()
    //     .then((snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    // })).catch(error => dispatch(fetchCollectionsFailure(error.message)))