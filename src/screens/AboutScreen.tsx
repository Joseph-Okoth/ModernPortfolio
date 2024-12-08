import React from 'react';
import { View, ScrollView, Animated, StyleSheet } from 'react-native';
import { CustomText } from '@components/CustomText';
import { useTheme } from '@theme/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import SkillBar from '@components/SkillBar';
import { useAPI } from '@hooks/useAPI';
import { portfolioAPI } from '@api/portfolio';

type Skill = {
  name: string;
  level: number;
};

const AboutScreen: React.FC = () => {
  const { colors } = useTheme();
  const scrollY = new Animated.Value(0);
  const { execute, data: skills, loading } = useAPI(portfolioAPI.getSkills);

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  React.useEffect(() => {
    execute();
  }, [execute]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View style={[
        styles.header,
        { transform: [{ translateY: headerTranslateY }] }
      ]}>
        <CustomText variant="h1">About Me</CustomText>
      </Animated.View>

      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}>
        <View style={styles.content}>
          <LinearGradient
            colors={[colors.surface, colors.background]}
            style={styles.gradientCard}>
            <CustomText variant="h2">Experience</CustomText>
            <CustomText style={styles.paragraph}>
              Senior Full Stack Developer with 5+ years of experience building scalable applications.
              Specialized in React Native, Node.js, and cloud architecture.
            </CustomText>
          </LinearGradient>

          <View style={styles.skillsContainer}>
            <CustomText variant="h2">Skills</CustomText>
            {skills?.map((skill: Skill, index: number) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    zIndex: 1000,
  },
  content: {
    padding: 20,
  },
  gradientCard: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  paragraph: {
    marginTop: 10,
  },
  skillsContainer: {
    marginTop: 20,
  },
});

export default AboutScreen;