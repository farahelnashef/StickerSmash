import Card from '@/components/Card'
import { StyleSheet, View } from 'react-native'


const index = () => {
  return (
    <View style={styles.contaninar}>
      {/* <Text>index</Text>
      <View style={styles.box}>

        <View style={styles.box2}>
          <Text style={styles.idea}>Name:Farah</Text>
          <Text style={styles.idea}>Class:8</Text>
        </View>
       < Image style={styles.img} source={{uri:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-2165950545-69600af8c9b0d.jpg?crop=0.670xw:1.00xh;0.134xw,0&resize=1120:*" }} />
      </View> */}

      <Card name='teacher' masgs={"are you sure"} time={"05:45"} noumber={"50"} pic={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-2165950545-69600af8c9b0d.jpg?crop=0.670xw:1.00xh;0.134xw,0&resize=1120:*"}/>
    <Card name='mom' masgs={"where are you"} time={"15:56"} noumber={"5"} pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcI7uVVR_VGTxnYMO1X79bUc1NQ3kaLtBTzBrJ2e3t-Anx0TrV2Mfvgi4-&s=10"}></Card>
     <Card name='dad' masgs={"i am outside"} time={"21:27"} noumber={"2"} pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BkUjFsxfyWWDLXMSl9tD5p0nItjsRAVeww79SBYWNA&s=10"}></Card>
   <Card name='raseel' masgs={"todey at the night"} time={"09:59"} noumber={"24"} pic={"https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww"}/>
<Card name='aunt' masgs={"i am in the risturant go in"} time={"19:37"} noumber={"24"} pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUaH1SO8zxlCpYzPYWNCaYOYHbcvYHa1GbVMUvvRzCKpOdF8bTOG95aLT&s=10"}/>
<Card name='reem' masgs={"i am wating you"} time={"11:47"} noumber={"24"} pic={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Moon_in_Sunrise_Sky_2.jpg/250px-Moon_in_Sunrise_Sky_2.jpg?utm_source=he.wikipedia.org&utm_campaign=index&utm_content=thumbnail"}/>
<Card name='girl group' masgs={"do you want to play"} time={"17:59"} noumber={"24"} pic={"https://flowersfromthefarm.co.uk/wp-content/uploads/mepr/userfiles/Sarah-Bernhardt-Flouer-FFTF-watermarked-1024x935.jpg"}/>


    </View>
  )
}

export default index

const styles = StyleSheet.create({
  contaninar: {
    flex: 1,
    backgroundColor: "white"

  },
  box: {
    padding:10,
    
    marginTop: 150,
    height: 300,
    width: 400,
    backgroundColor: "lightblue",
    alignSelf: "center",
    flexDirection:"row",
    borderWidth: 1,
    justifyContent:"space-around",
    alignItems:"center"
  },
  box2: {
    
  },
  img: {
    width:150,
    height:150,
   
    borderRadius:80,
    borderColor:"black",
    borderWidth:2,
  },
  idea:{
    fontSize:20,
  }
})