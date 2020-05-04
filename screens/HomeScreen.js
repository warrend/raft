import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchCompletedAction } from '../actions/projectActions';


function HomeScreen({ fetchCompleted }) {
  useEffect(() => {
    fetchCompleted()
  }, [])
  return (
    <View>
      <Text>This is the home screen</Text>
    </View>
  )
}

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
