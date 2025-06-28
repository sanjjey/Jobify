import {View, Text, SafeAreaView,ActivityIndicator,RefreshControl,ScrollView} from 'react-native'
import { Stack,useRouter,useNavigation,useGlobalSearchParams } from 'expo-router'
import { useCallback,useState } from 'react'
import {Company,JobTabs,JobFooter,ScreenHeaderBtn,Specific, Specifics, JobAbout} from '../../components'
import { COLORS,SIZES,icons } from '../../constants'
import useFetch from '../../hook/useFetch'
const tabs = ['About',"Qualifications","Responsibilities"];
const JobDetails = () =>{
    const navigation = useNavigation();
    const params = useGlobalSearchParams();
    const router = useRouter();
    const {data,isLoading,error,refetch} = useFetch('job-details',{job_id:params.id})
    const [refreshing,setRefreshing] =useState(false);
    const [activeTab,setActiveTab] =useState(tabs[0]);

    const onRefresh = () =>{}

    const displayTabContent = () =>{
        // Return null if data is not available
        if (!data || data.length === 0) return null;
        const job = data[0];
        switch (activeTab){
            case "Qualifications":
                return <Specifics
                title="Qualifications"
                points={job.job_highlights?.Qualifications ?? ['N/A']} 
                />
                break;
            case "About":
                return <JobAbout
                info = {job.job_description ?? "No data provided"}
                />
                break;
            case "Responsibilities":
                return <Specifics
                title="Responsibilities"
                points={job.job_highlights?.Responsibilities ?? ['N/A']} 
                />
                break;
            default:
                break;
        }
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerBackVisible:false,
                headerLeft: ()=>(
                    <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension={30}
                    resizeMode="cover"
                    onPress={()=>router.back()} />
                ),
                headerRight: ()=>(
                    <ScreenHeaderBtn
                    iconUrl={icons.share}
                    dimension={30}
                    resizeMode="cover"
                    onPress={() => console.log('Share pressed')}
                    />
 
                ),
                headerTitle:''
            }}/>
            <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            {isLoading?(
                <ActivityIndicator size={SIZES.large} color={COLORS.primary}/>

            ) : error ?( <Text>Something went wrong!</Text>

            ) : data.length ===0?(
                <Text>No data</Text>
            ) : (
                <View style={{padding:SIZES.medium, paddingBottom:100}}>
                    <Company
                    companyLogo = {data[0].employer_logo}
                    jobTitle = {data[0].job_title}
                    companyName = {data[0].employer_name}
                    Location = {data[0].job_country}

                    />
                    <JobTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    
                    />

                </View>

            )}
            {displayTabContent()}
            </ScrollView>
            </>
            <JobFooter url={data[0]?.job_apply_link ?? "https://careers.google.com/jobs/results"}/>

        </SafeAreaView>
        
    )
}
export default JobDetails;