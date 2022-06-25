import React, { useEffect, useState } from 'react'
import { Pictures } from '../../../../../../wakecap-fe-challenge/src/models/products'
import Box from '@mui/material/Box';
import CarouselItem from './CarouselItem';
import { useStyles } from './styles';

const CustomCarousel = (props: { images: Pictures[] }) => {
  const { images } = props;
  const classes = useStyles();
  const [activeImage, setactiveImage] = useState<Pictures | null>(images[0] || null)
  useEffect(() => {
    setactiveImage(images[0] || null)
  }, [images])

  return (
    <Box display={'flex'} justifyContent={'center'} className={classes?.root}>
      {activeImage && <img src={activeImage?.photo} alt="green iguana" height={'400px'} />}
      <Box ml={1} className={classes.thumbnailContainer} >
        {images.length > 0 ? images.map((image, index) => (
          <CarouselItem
            key={`${image.thumbnail}__${index}`}
            image={image}
            index={index}
            activeImage={activeImage}
            setactiveImage={setactiveImage}
          />)) : null
        }
      </Box>
    </Box>
  )
}

export default CustomCarousel