import React from 'react';
import {Drawer, Box, Typography, Divider} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Offset} from "../container/Container";

interface Props {
    variant:  "permanent" | "persistent" | "temporary" | undefined;
    open: boolean;
    onClose?: any,
    sx: any
}
export const drawerWidth = 240;

const DrawerStyledFixed = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 1
}));

export const DrawerComponent: React.FC<Props> = ({variant, open, onClose, sx}: Props) => {
    return (
        <>
            <div className="App">
                <DrawerStyledFixed
                    sx={sx}
                    variant={variant}
                    open={open}
                    onClose={onClose ? onClose : null}
                >
                    <Offset/>
                    <Divider/>
                    <Box p={2} width='250px' textAlign='center' role='presentation'>
                        <Typography variant='h6' component='div'>Side panel</Typography>
                    </Box>
                </DrawerStyledFixed>
            </div>
        </>
    );
};
