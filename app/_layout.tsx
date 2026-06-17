import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';

export const unstable_settings = {
  initialRouteName: 'index', 
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const textColor = '#FFFFFF'; 

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ 
            headerShown: true,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#4A0E17',
            },
            headerTitle: () => (
              <View style={styles.capsule}>
                <Ionicons name="location-sharp" size={14} color={textColor} />
                <Text style={[styles.capsuleText, { color: textColor }]}>Nasugbu, Batangas</Text>
              </View>
            ),
          }} 
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  capsule: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#672a31',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20, 
    gap: 4,
  },
  capsuleText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
