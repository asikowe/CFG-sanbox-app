import { ListItem, ListItemProps, Switch } from '@rneui/themed';
import React, { useState } from 'react';

export default function ToggleElement () {

    const [switch1, setSwitch1] = useState(true);

    return (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>Switch that please 😲</ListItem.Title>
            </ListItem.Content>
            <Switch
                value={switch1}
                onValueChange={(value) => setSwitch1(value)}
            />
        </ListItem>

    )
};