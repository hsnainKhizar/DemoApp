import React from 'react';
import {
    TextInput,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    PixelRatio,
    useWindowDimensions
} from 'react-native';

const Login = ({ navigation }) => {


    // functions
    function signup() {
        console.log('hi');
        navigation.navigate('signup')
    }

    const login = () => {
        console.log('hi');
        navigation.navigate('signup')

    }



    return (
        <View style={{ fle: 1 }}>
            <SafeAreaView></SafeAreaView>
            <View style={{ padding: 12 }}>
                {/* header text */}
                <Text style={styles.headerText}>Hello Demo App</Text>

                {/* detailed text */}
                <Text style={styles.paragraphText}>This app is demo to check the wording of the flow. in this paragraph the things that mentioned are just for the purpose of lorem ipsum.i can see that i can write wprds with more speed now as compare to the previous speed that i used to work wuth.</Text>

                {/* button to login */}
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={login}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Sign up</Text>
                </TouchableOpacity>

                {/* 2 buttons on same line */}

                <View style={styles.twoButtons}>
                    {/* button 1 */}
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.buttonsText}>Button 1</Text>
                    </TouchableOpacity>
                    {/* button 2 */}
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.buttonsText}>Button 2</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({

    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        alignSelf: 'center',
        marginTop: 20,
        fontFamily:'Pacifico'

    },
    paragraphText: {
        alignSelf: 'center',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 30,
        fontWeight: '600',
        color: '#000',
        fontFamily:'Pacifico'

    },
    buttonStyle: {
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 8,
        marginTop: 30
    },
    twoButtons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width: Dimensions.get('window').width - 25 * 0.9,
        marginTop:30
    },
    buttons:{
        backgroundColor:'purple',
        width:'48%',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        borderRadius:8
    },
    buttonsText:{
        color:'white',
        fontWeight:'700',
        fontSize:17,
        
    }

})
