// Components/MinistereItem.js

import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

class  MinistereItem extends React.Component{
    render(){
        const { ministere, displayDetailForMinistere } = this.props;
        return(
            <TouchableOpacity style={styles.main_container}
                              onPress={() => displayDetailForMinistere(ministere.id)}
            >
                <Image
                    style={styles.image}
                    source={{uri: "http://reclamations.dgima.pro/themes/images/logo-armoirie.png"}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{ministere.title}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>
                            {ministere.contact}
                        </Text>
                        <Text style={styles.statut_text}> {ministere.lieu}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    main_container: {
        height: 110,
        borderWidth:1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    image: {
        width: 100,
        height: 110,
        backgroundColor: '#1FA51D'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        color:"#F5A11F"
    },
    description_text: {
        fontStyle: 'italic',
        color: 'black',
        fontSize:15,
    }
});

export default MinistereItem;