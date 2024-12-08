import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { CustomText } from '@components/CustomText';
import { AnimatedLoader } from '@components/AnimatedLoader';
import { useAPI } from '../hooks/useAPI';
import { portfolioAPI } from '@api/portfolio';

const ContactScreen: React.FC = () => {
  const { colors } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { execute, loading } = useAPI(portfolioAPI.submitContact);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await execute(form);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <CustomText variant="h1">Contact Me</CustomText>
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: colors.surface, color: colors.textColor }]}
          placeholder="Name"
          placeholderTextColor={colors.secondaryText}
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
        <TextInput
          style={[styles.input, { backgroundColor: colors.surface, color: colors.textColor }]}
          placeholder="Email"
          placeholderTextColor={colors.secondaryText}
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { backgroundColor: colors.surface, color: colors.textColor, height: 120 }]}
          placeholder="Message"
          placeholderTextColor={colors.secondaryText}
          value={form.message}
          onChangeText={(text) => setForm({ ...form, message: text })}
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <CustomText style={styles.submitButtonText}>Submit</CustomText>
        </TouchableOpacity>
      </View>
      <AnimatedLoader visible={isSubmitting || loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#FF5757',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ContactScreen;