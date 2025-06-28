import {useState} from 'react';
import {View,Text, ScrollView,  SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {COLORS,images,SIZES} from '../constants'
import icons from '../constants/icons'
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn,Welcome} from '../components'

const Home = () =>{
    const router = useRouter();
    const [searchTerm,setSearchTerm] = useState("")


    return (
     <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite},
      headerShadowVisible:false,
      headerLeft: () => (
      <ScreenHeaderBtn iconUrl={icons.menu} dimension={24}/>
    ),
    headerRight: () => (
      <ScreenHeaderBtn iconUrl={icons.profile} dimension={24}/>
    ),
    headerTitle: 'Jobify',
    headerTitleAlign:'center'
    }}/>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{flex:1,padding:SIZES.medium}}>
    <Welcome
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleClick={()=>{

        if(searchTerm){
          router.push(`/search/${searchTerm}`)
        }
      }}
    />
    <Popularjobs/>
    <Nearbyjobs/>
    </View>
    </ScrollView>
    </SafeAreaView>
    )
}
export default Home;    