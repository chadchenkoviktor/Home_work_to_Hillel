import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productsSlice';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

export default function ProductPreview() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((s) => s.products.items);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const product = products.find((p) => String(p.id) === id);

    if (!product) return null;

    return (
        <Card sx={{ maxWidth: 400, m: 4 }}>
            <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>Price: {product.price}</Typography>
                <Typography>Category: {product.category}</Typography>
            </CardContent>
        </Card>
    );
}