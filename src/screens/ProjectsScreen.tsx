import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Projects: undefined;
  Contact: undefined;
  ProjectDetails: { project: Project };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
import { CustomText } from '@components/CustomText';
import { useTheme } from '@theme/ThemeContext';
import { AnimatedLoader } from '@components/AnimatedLoader';
import { LinearGradient } from 'react-native-linear-gradient';
import { useAPI } from '@hooks/useAPI';
import { portfolioAPI } from '@api/portfolio';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

const { width } = Dimensions.get('window');

const ProjectsScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const { execute, data: projects, loading } = useAPI(portfolioAPI.getProjects);

  useEffect(() => {
    execute();
  }, [execute]);

  const renderProjectCard = (project: Project) => (
    <TouchableOpacity
      key={project.id}
      style={[styles.projectCard, { backgroundColor: colors.surface }]}
      onPress={() => navigation.navigate('ProjectDetails', { project })}
    >
      <Image
        source={{ uri: project.imageUrl }}
        style={styles.projectImage}
        resizeMode="cover"
      />
      <LinearGradient
        colors={[colors.surface + '00', colors.surface]}
        style={styles.projectContent}
      >
        <CustomText variant="h2" style={styles.projectTitle}>
          {project.title}
        </CustomText>
        <CustomText variant="body" style={styles.projectDescription}>
          {project.description}
        </CustomText>
        <View style={styles.techContainer}>
          {project.technologies.map((tech, index) => (
            <View
              key={index}
              style={[styles.techBadge, { backgroundColor: colors.primary }]}
            >
              <CustomText style={styles.techText}>{tech}</CustomText>
            </View>
          ))}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <CustomText variant="h1" style={styles.header}>
        Projects
      </CustomText>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {loading ? (
          <AnimatedLoader visible={loading} />
        ) : (
          projects?.map(renderProjectCard)
        )}
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
  },
  scrollContent: {
    padding: 20,
    gap: 20,
  },
  projectCard: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  projectTitle: {
    marginBottom: 8,
  },
  projectDescription: {
    marginBottom: 12,
    fontSize: 14,
    opacity: 0.8,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  techText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default ProjectsScreen;