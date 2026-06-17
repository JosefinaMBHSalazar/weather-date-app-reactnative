import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const options = {
  headerShown: false,
};

export default function HelpScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = currentDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true 
  }).replace(/(am|pm)/i, (match) => match.toUpperCase());

  const dateString = currentDate.toLocaleDateString([], {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={styles.container}>
  
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CURRENT TIME</Text>
          <Text style={styles.body}>{timeString}</Text>
          <Text style={styles.footer}>{dateString}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WEATHER UPDATES</Text>
          <Text style={styles.body}></Text>
          <Text style={styles.footer}></Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>REACT NATIVE</Text>
          <Text style={styles.sectionBody}>SIR MAGS</Text>
        </View>
        
        <View style={styles.versionInfo}>
          <Text style={styles.versionText}>React Native - Live Monitors</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A0E17',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  section: {
    backgroundColor: '#672a31',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#D4AF37',
    marginBottom: 16,
  },
  sectionBody: {
    fontSize: 25,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  body: {
    fontSize: 25,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  footer: {
    fontSize: 14,
    color: '#a3a3a3',
    lineHeight: 22,
  },
  versionInfo: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  versionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D4AF37',
  },
});