import { FontAwesome5, Octicons } from "@expo/vector-icons";
import { Image, View,Text, StyleSheet } from "react-native";

export default function PostCard({post}) {
    return(
            <View style={styles.postCardWrap}>
                <View style={styles.imageWrap}>
                    {post.image &&  <Image/>}
                
                </View>
                <View >
                    <Text style={styles.postDesription}>
                        {post.description}
                    </Text>
                    <View style={styles.postInformationWrap}>
                    
                        <Text >
                            <FontAwesome5 name="comment" size={24} color="black" />
                            <Text style={styles.postCommentLength}>{post.comments.length}</Text>
                        </Text>
                        <Text>
                                <Octicons name="location" size={24} color="black" />
                                <Text style={styles.postLocation}> {post.location}</Text>  
                        </Text>

                    </View>
                    
                </View>
        </View>
    )
};
const styles = StyleSheet.create({
postCardWrap:{ width: "100%"},
    imageWrap: {
    MinWidth:343,
    height:240,
    borderRadius:8,
    backgroundColor:"green",
    marginTop:32,
},
postDesription:{
    fontFamily: 'Roboto-Bold',
    fontSize: 16, 
    color: "#212121",
},
postCommentLength:{
    fontFamily: 'Roboto-Regular',
    fontSize: 16, 
    color: "#BDBDBD",
    marginLeft: 20,
},
postLocation:{
    fontFamily: 'Roboto-Regular',
    fontSize: 16, 
    color: "#212121",
    textDecorationLine: "underline",
    marginLeft: 4,
},
postInformationWrap:{
    flexDirection: "row",
    justifyContent:"space-between",
},

})