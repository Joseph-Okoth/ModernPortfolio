import { API } from './config';

export const portfolioAPI = {
  // Projects
  getProjects: async () => {
    try {
      const response = await API.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  // Contact Form
  submitContact: async (formData: any) => {
    try {
      const response = await API.post('/contact', formData);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },

  // Skills
  getSkills: async () => {
    try {
      const response = await API.get('/skills');
      return response.data;
    } catch (error) {
      console.error('Error fetching skills:', error);
      throw error;
    }
  },
};