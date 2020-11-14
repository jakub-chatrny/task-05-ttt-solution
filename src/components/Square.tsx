import React, { FC } from "react";

// Hint: Suggested components
// import { makeStyles } from '@material-ui/styles';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';

// TODO: Implement Square component that:
//   - represents one square on tic tac toe board
//   - should act as a container (render it's children)
//   - should accept callback that is called when it's clicked.
const Square: FC = ({ children }) => <div>{children}</div>;

export default Square;
