import { InputBase, IconButton, Paper, Typography, Divider, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Form = () => (
    <>
        <Typography variant="h4" component='h2'>
            TODO
        </Typography>

        <Paper component="form" sx={{ p:"2px 4px", display:"flex", justifyContent:"space-between"}}>
            <InputBase placeholder="Lern something" />
            <Box sx={{display: "flex"}}>
                <Divider orientation="vertical" sx={{height: 34, m: 0.5, borderColor: 'rgba(0, 0, 0, 0.5)'}}/>
                <IconButton color="secondary" sx={{p: 1.25}}>
                    <AddIcon />
                </IconButton>
            </Box>
        </Paper>
    </>
)

export default Form