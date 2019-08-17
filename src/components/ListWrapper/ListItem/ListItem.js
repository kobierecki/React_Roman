import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({
    name,
    image,
    description,
    twitterLink
}) => {

    const ImageTag = image ? 'img' : 'div';

    return (
        <li className="listitem__wrapper">
            <ImageTag src={image} className="listitem__image" alt="" />
            <div>
                <h2 className="listitem__name">
                    {name}
                </h2>
                <p className="listitem__description">
                    {description}
                </p>
                <a className="listitem__button" href={twitterLink} target="blank" rel="noopener noreferrer">visit twitter page</a>
            </div>
        </li>
    );
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    description: 'One of the descriptions',
    image: null
}

export default ListItem;