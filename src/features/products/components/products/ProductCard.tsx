import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Products } from '../../../../models/products';

const ProductCard = (props: { product: Products, onSelectProduct: (product: Products) => void }) => {
  const { product, onSelectProduct } = props;
  const handleSelectProduct = () => {
    onSelectProduct(product);
  }
  return (
    <Card sx={{ minWidth: 300, marginRight: 1, marginLeft: 1 }}>
      <CardActionArea onClick={handleSelectProduct}>
        <CardMedia
          component="img"
          height="250"
          image={product.photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          200 USD
        </Typography> */}
        </CardContent>

        <CardActions>
          <Button size="small"  component={'p'}>More Details</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard