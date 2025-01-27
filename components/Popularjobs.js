import {View , Text,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import {COLORS, SIZES} from '../constants';

import styles from './popularjobs.style';
import { ActivityIndicator, FlatList } from 'react-native';
import PopularJobsCard from './PopularJobsCard';

const Popularjobs = () =>{
    const router = useRouter();
    const isLoading=false;
    const error=false;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerTitle}>Popularjobs</Text>
            <TouchableOpacity>
                <Text style={styles.headerBtn}>Show All</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {
                    isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    ): error ?(
                        <Text>
                            Something went wrong
                        </Text>
                    ):(
                        <FlatList  
                        data={[1,2,3,4,5,6]}
                        renderItem={({item})=>(
                            <PopularJobsCard
                             item={item}
                            />
                        )}
                        keyExtractor={item=>item?.job_id}
                        contentContainerStyle={{
                            columnGap:SIZES.medium
                        }}
                        horizontal
                        >
                           
                        </FlatList>
                    )
                }
            </View>
        </View>
    )
}
export default Popularjobs;