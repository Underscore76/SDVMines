import { Paper, List, ListItem } from '@material-ui/core'

export function Details() {
    return (<Paper elevation={3}>
        <h1> Stardew Ladder Tracker</h1>

        Basic Usage: (coming soon)

        <h3>Credits:</h3>
        <List>
            <ListItem>BlaDe on finding the ladder pattern/stitching and building assets</ListItem>
            <ListItem>Underscore on bad web design principles</ListItem>
        </List>
    </Paper>)
}