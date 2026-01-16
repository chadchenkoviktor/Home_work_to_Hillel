import { InputBase, IconButton, Paper, Chip, Divider, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

const Footer = () => (
    <Box component='footer' sx={{display: 'flex', alignItems:'center', justifyContent: 'space-between', mt: 10,}}>
        <Chip label="Count: 3" />
        <Paper component="form" sx={{ p:"2px 4px", display:"flex", justifyContent:"space-between", width: 400,}}>
            <InputBase sx={{ml: 1, flex: 1}} placeholder="Search" />
            <Divider orientation="vertical" sx={{height: 34, m: 0.5, borderColor: 'rgba(0, 0, 0, 0.5)'}}/>
            <IconButton color="secondary" sx={{p: 1.25}}>
                <SearchIcon />
            </IconButton>
        </Paper>
    </Box>
)

export default Footer