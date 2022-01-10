import React from 'react'
import './UserItem.css'
import { BsTelephone } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FcAddressBook } from 'react-icons/fc'
import { Avatar, Divider, List, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';

import ListItem from '@mui/material/node/ListItem/ListItem';
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}


const UserItem = ({ item }) => {
    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>

                        <Stack direction="row" spacing={2}>
                            <Avatar {...stringAvatar(item.name)} />
                        </Stack>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <ul>

                                        <li><FaUserTie />{item.username}</li>
                                        <li><MdOutlineMailOutline /> {item.email}</li>
                                        <li> <BsTelephone /> {item.phone}</li>
                                        <li> <FcAddressBook />{item.website}</li>
                                        {/* <p>{item.company.name}</p>  */}
                                    </ul>
                                </Typography>

                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>

        </div>
    )
}

export default UserItem
