import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stat } from '../../types/Pokemon'

interface Props {
    stats: Stat[]
}

export default function Stats({stats}: Props) {

    const bgStyles = (num: number) => {
        let color;
        if (num <= 25) {
            color = "#ff3e3e";
          } else if (num > 25 && num < 50) {
            color = "#F08700";
          } else if (num >= 50 && num < 75) {
            color = "#EFCA08";
          } else if (num >= 75) {
            color = "#6EEB83";
          }
        return {
            backgroundColor: color,
            width: `${num}%`
        }
    }
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((stat, index) => (
        <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.statName}>{stat.stat.name}</Text>
            </View>
            <View style={styles.blockInfo}>
                <Text style={styles.number}>{stat.base_stat}</Text>
                <View style={styles.bgBar}>
                    <View style={[styles.bar, bgStyles(stat.base_stat)]}/>
                </View>
            </View>
        </View>    
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 30
    },
    title:{
        fontWeight: 'bold',
        fontsize: 30,
        paddingBottom: 5,
    },
    block:{
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle:{
        width: '30%'
    },
    statName:{
        textTransform: 'capitalize',
        fontSize: 12,
        color: '#6b6b6b',
    },
    blockInfo:{
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        width: '12%',
        fontSize: 12,
    },
    bgBar:{
        backgroundColor: '#dedede',
        width: '88%',
        height: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    bar:{
        backgroundColor: 'red',
        width: '100%',
        height: 10,
        borderRadius: 20,
    },
})