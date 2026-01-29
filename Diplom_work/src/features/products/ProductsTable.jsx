import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct } from './productsSlice';
import { Table, TableRow, TableCell, TableHead, TableBody, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductModal from './ProductModal';

export default function ProductsTable() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((s) => s.products.items);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleAdd = (data) => {
        dispatch(addProduct(data));
    };

    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)} sx={{ mb: 2 }}>
                Add product
            </Button>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((p) => (
                        <TableRow key={p.id}>
                            <TableCell>{p.name}</TableCell>
                            <TableCell>{p.price}</TableCell>
                            <TableCell>{p.category}</TableCell>
                            <TableCell>
                                <Button size="small" onClick={() => navigate(`/preview/${p.id}`)}>
                                    Preview
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ProductModal open={open} onClose={() => setOpen(false)} onSubmit={handleAdd} />
        </>
    );
}