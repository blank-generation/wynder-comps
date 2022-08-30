import * as React from 'react';
import { Surface, IconButton, FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
// const MusicRoute = () => <Text>Music</Text>;



const BottomNav = () => {


    return (
        <Surface style={styles.surface}>
            <IconButton style={{ marginLeft: '2em' }} iconColor='#ffffff' icon='heart'></IconButton>
            <IconButton style={{ marginLeft: '2em' }} iconColor='#ffffff' icon='account-group'></IconButton>
            <IconButton style={{ marginLeft: '2em' }} iconColor='#ffffff' icon='message'></IconButton>
            <FAB
                icon="plus"
                color='#FF595B'
                style={styles.fab}
               
            />
        </Surface>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    surface: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: '#FF595B'

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 12,
        bottom: 12,
        borderRadius: 32
    },

});