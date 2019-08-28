import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import Title from '../../Title/Title';
import './ListItem.scss';

const ListItem = ({
    name,
    image,
    description,
    twitterLink
}) => {

    const ImageTag = image ? 'img' : 'div';

    return (
        <li className="listitem__wrapper">
            <ImageTag
                src={image}
                className={image ? "listitem__image" : "listitem__imageNone"}
                alt="" />
            <div>
                <Title>{name}</Title>
                <p className="listitem__description">
                    {description}
                </p>
                <Button href={twitterLink}>visit twitter page</Button>
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
    image: null,
}

export default ListItem;