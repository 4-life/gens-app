
import BoxChart from './BarChart';
import Bar from './Bar';
import BulletChart from './BulletChart';
import SwarmPlot from './SwarmPlot';
import styles from './page.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Suspense, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import { Button, CardContent, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Details = ({ repo, barJson, boxChartJson, bulletChartJson, swarmPlotJson }: any) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
  <>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>JSON</DialogTitle>
      <DialogContent>
        {JSON.stringify(repo)}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>

    <div className={styles.description}>
      <Button variant="outlined" onClick={handleClickOpen}>
          Show JSON
      </Button>
    </div>

    <div className={styles.card}>
      <BoxChart data={boxChartJson} />
    </div>

    <div className={styles.card}>
      <BulletChart data={bulletChartJson} />
    </div>

    <div className={styles.card}>
      <SwarmPlot data={swarmPlotJson} />
    </div>

    <Accordion style={{width: '100%'}} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Plot 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.card}>
          <Suspense fallback={<CircularProgress />}>
            <Bar data={barJson} />
          </Suspense>
        </div>
      </AccordionDetails>
    </Accordion>
    <Accordion style={{width: '100%'}} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Plot 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        <div className={styles.card}>
          <Suspense fallback={<CircularProgress />}>
            <Bar data={barJson} />
          </Suspense>
        </div>
      </AccordionDetails>
    </Accordion>
  </>
)}

export default Details;
