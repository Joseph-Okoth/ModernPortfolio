import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { CustomText } from './CustomText';
import { useTheme } from '@theme/ThemeContext';

type Skill = {
  name: string;
  level: number;
};

type SkillBarProps = {
  skill: Skill;
  index: number;
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const { colors } = useTheme();
  const width = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(width, {
      toValue: skill.level,
      duration: 1000,
      delay: index * 100,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.skillBar}>
      <CustomText>{skill.name}</CustomText>
      <Animated.View
        style={[
          styles.skillFill,
          {
            width: width.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
            backgroundColor: colors.primary,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skillBar: {
    marginVertical: 10,
  },
  skillFill: {
    height: 10,
    borderRadius: 5,
  },
});

export default SkillBar;