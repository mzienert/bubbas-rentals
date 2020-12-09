import React from 'react';
import './App.css';
import { Container } from "./components/Container";
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import MomentUtils from '@material-ui/lab/AdapterMoment'

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={MomentUtils}>
      <Container />
    </LocalizationProvider>
  );
}
