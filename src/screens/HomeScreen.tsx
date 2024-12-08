import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  About: undefined;
  Projects: undefined;
  Contact: undefined;
};

import { useTheme } from '../theme/ThemeContext';
import { AnimatedLoader } from '../components/AnimatedLoader';
import { LinearGradient } from 'react-native-linear-gradient';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { isDark, colors } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <ScrollView 
      style={[
        styles.container, 
        { backgroundColor: colors.background }
      ]}
    >
      <LinearGradient
        colors={isDark ? 
          ['#1a1a1a', '#2d2d2d'] : 
          ['#ffffff', '#f5f5f5']}
        style={styles.headerContainer}
      >
        <Text style={[styles.title, { color: colors.textColor }]}>
          Joseph Okoth
        </Text>
        <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
          Full Stack Developer
        </Text>
      </LinearGradient>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuItem, { backgroundColor: colors.cardBackground }]}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={[styles.menuText, { color: colors.textColor }]}>
            About Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, { backgroundColor: colors.cardBackground }]}
          onPress={() => navigation.navigate('Projects')}
        >
          <Text style={[styles.menuText, { color: colors.textColor }]}>
            Projects
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, { backgroundColor: colors.cardBackground }]}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={[styles.menuText, { color: colors.textColor }]}>
            Contact
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  menuContainer: {
    padding: 20,
    gap: 15,
  },
  menuItem: {
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomeScreen;