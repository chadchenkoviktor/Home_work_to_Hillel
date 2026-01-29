import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';


export default function ProductModal({ open, onClose, onSubmit, initialData }) {
    const [form, setForm] = useState({ name: '', price: '', category: '' });


    useEffect(() => {
        if (initialData) setForm(initialData);
    }, [initialData]);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = () => {
        onSubmit(form);
        onClose();
    };

    return (
    <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>{initialData ? 'Edit product' : 'Add product'}</DialogTitle>
        <DialogContent>
            <TextField name="name" label="Name" fullWidth margin="normal" value={form.name} onChange={handleChange} />
            <TextField name="price" label="Price" fullWidth margin="normal" value={form.price} onChange={handleChange} />
            <TextField name="category" label="Category" fullWidth margin="normal" value={form.category} onChange={handleChange} />
            <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
                Save
            </Button>
        </DialogContent>
    </Dialog>
    );
}