import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        paddingHorizontal: 10,
        backgroundColor:'#eed'
      },
      moveDown: {
        alignItems: 'center',
        backgroundColor: 'yellow',
        width:150,
        padding: 25,
        borderRadius:10,
        borderColor:'#fcf003',
        borderWidth:4,
        position:"absolute",
        bottom:50
      },
      moveUp: {
        alignItems: 'center',
        backgroundColor: 'yellow',
        width:150,
        padding: 25,
        borderRadius:10,
        borderColor:'#fcf003',
        borderWidth:4,
        position:"absolute",
        top:50
      },
      Text: {
            fontSize:15
      }
    
});



export default styles;