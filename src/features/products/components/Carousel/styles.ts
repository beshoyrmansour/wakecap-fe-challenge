import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    ['@media (min-width:780px)']: {
      // [theme?.breakpoints?.down('md')]: {
      flexDirection: 'row',

    }

  },
  thumbnailContainer: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    display: 'flex',
    maxHeight: '400px',
    flexDirection: 'row',
    alignItems: 'baseline',

    ['@media (max-width:780px)']: {
      overflow: 'scroll',
      flexWrap: 'nowrap',
      marginTop: 2,
    }
  }
}));
