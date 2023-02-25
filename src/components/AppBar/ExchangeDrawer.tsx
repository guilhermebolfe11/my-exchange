import { Box, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, ModalProps } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Language from "../Language/Language";
import useTranslation from "../../hooks/useTranslation";

interface ExchangeDrawerProps {
    open: boolean;
    handleDrawerToggle: ModalProps['onClose']
}

export default function ExchangeDrawer({ handleDrawerToggle, open }: ExchangeDrawerProps) {
    const { t } = useTranslation();
    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}>
            <Box sx={{ width: "100%" }}>
                <List subheader={<ListSubheader>{t("Drawer.Title")}</ListSubheader>}>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} href="https://github.com/guilhermebolfe11/my-exchange" >
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText>
                                {t("Drawer.GitHub")}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} href="https://guilhermebolfe.com/" >
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText>
                                {t("Drawer.CreatedBy")}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LanguageIcon />
                        </ListItemIcon>
                        <Language />
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            {t("Drawer.Test")}
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}