import React from 'react';
import ReactBigCalendar from '../components/test-calendar/ReactBigCalendar';
import MainContainer from '../components/MainContainer';
import Blog from './blog';

const TestCalendar = () => {
  return (
    <>
      {/*<ReactBigCalendar />*/}
      <MainContainer>
        <Blog />
      </MainContainer>
    </>
  );
};

export default TestCalendar;
