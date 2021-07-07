import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  image: {
    width: 414,
    height: 450,
  },
  content: {
    marginTop: -30,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
  },
})