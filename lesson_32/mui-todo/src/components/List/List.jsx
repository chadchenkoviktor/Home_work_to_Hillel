import { Stack } from "@mui/material";
import Item from "../Item/Item";

const List = () => (
    <Stack spacing={2} sx={{mt: 1.25}}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
    </Stack>
)

export default List;