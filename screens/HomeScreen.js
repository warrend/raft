import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchCompletedAction } from '../actions/projectActions';

function HomeScreen({ fetchCompleted }) {
  useEffect(() => {
    fetchCompleted()
  }, []);

  const theme = useContext(ThemeContext);
  const { wrapper } = styles(theme);
  return (
    <View style={wrapper}>
      <Text>This is the home screen</Text>
    </View>
  )
}

const styles = theme => StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.backgroundColor.primary, 
  },
});

function mapStateToProps(state) {
  return {
    completed: state.completed,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCompleted: () => dispatch(fetchCompletedAction()),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(HomeScreen);
