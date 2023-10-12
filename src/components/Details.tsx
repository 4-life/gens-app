
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
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Details = ({ repo }: any) => (
  <>
    <div className={styles.description}>
      <textarea value={JSON.stringify(repo)} readOnly/>
    </div>

    <div className={styles.card}>
      <BoxChart />
    </div>

    <div className={styles.card}>
      <BulletChart />
    </div>

    <div className={styles.card}>
      <SwarmPlot />
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
            <Bar />
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
            <Bar />
          </Suspense>
        </div>
      </AccordionDetails>
    </Accordion>
  </>
)

export default Details;
