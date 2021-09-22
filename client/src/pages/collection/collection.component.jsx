import React from "react";
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection, history}) => {
    const {title, items} = collection;
    return(

        <div className='collection-page'>
            <div 
                className='go-back-button'
                onClick={() => history.push('/shop')}
                >&#10232;</div>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item}/>
                        )
                }
            </div>
        </div>
    )
};
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

