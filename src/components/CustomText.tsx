import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@theme/ThemeContext';

type CustomTextProps = TextProps & {
  variant?: 'h1' | 'h2' | 'body' | 'caption';
};

export const CustomText: React.FC<CustomTextProps> = ({
  style,
  variant = 'body',
  children,
  ...props
}) => {
  const { colors } = useTheme();

  const variants = StyleSheet.create({
    h1: {
      fontFamily: 'SpaceGrotesk-Bold',
      fontSize: 40,
      lineHeight: 48,
    },
    h2: {
      fontFamily: 'SpaceGrotesk-Bold',
      fontSize: 32,
      lineHeight: 40,
    },
    body: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      lineHeight: 24,
    },
    caption: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      lineHeight: 20,
    },
  });

  return (
    <Text style={[variants[variant], { color: colors.textColor }, style]} {...props}>
      {children}
    </Text>
  );
};