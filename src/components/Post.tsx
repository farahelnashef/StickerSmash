import { StyleSheet, Text, View } from 'react-native'

const chat = () => {
  return (

    <View style={styles.box}>
      <Text>Post</Text>
    </View>
  )
}

export default chat

const styles = StyleSheet.create({
    box:{
        borderWidth:1,
        width:"80%",
        height:100

    }
})
