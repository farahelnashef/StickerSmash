import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Card = (props: any) => {
    return (
        <TouchableOpacity onPress={()=>{alert("hi")}}
        > 

            <View style={styles.box}>
                <View>
                    <Text style={styles.ror}>{props.noumber} </Text>

                    <Text style={styles.txt}>{props.time}</Text>
                </View>

                <View style={styles.wwe}>
                    <Text style={styles.txt}>{props.name}</Text>
                    <Text style={styles.txt}>{props.masgs}</Text>

                </View>





                <Image style={styles.img} source={{ uri: props.pic }} />

            </View>
        </TouchableOpacity>
    )

}

export default Card

const styles = StyleSheet.create({
    box: {
        //      borderWidth: 1,
        width: "80%",
        height: 100,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,

    },
    img: {
        width: 60,
        height: 60,

    },
    wwe: {},
    txt: {
        fontSize: 20,
    },
    ror: {
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: "green",
        textAlign: 'center'


    },
    box1: {
        width: 20,
        height: 10,

    }

})

