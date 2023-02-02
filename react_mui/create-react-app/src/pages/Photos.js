import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@mui/material'
import { Image } from 'mui-image'


function Photos(props)
{
    const {images} = props;
    

    return (
        <Carousel>
            {
                images.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const {item} = props;
    function get_image_url(image_name) {
        return process.env.PUBLIC_URL + '/images/photos/' +image_name
    }

    return (
        <Paper sx={{
            // backgroundImage: `{get_image_url(item.image)}`,
        }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>            
            <Image src={process.env.PUBLIC_URL + "/images/photos/" + item.image} alt={item.name} height="40%" />
        </Paper>
    )
}

Photos.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            image: PropTypes.string.isRequired,
        })
    )
}

  export default Photos;
  