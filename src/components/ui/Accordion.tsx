import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
//This UI can be very helpful for displaying FAQs, settings, or any content that can be grouped into expandable sections.
interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  defaultExpanded?: boolean;
  actions?: React.ReactNode; 
}


interface AccordionCustomStyles {
  root?: React.CSSProperties;
  accordion?: React.CSSProperties;
  summary?: React.CSSProperties;
  details?: React.CSSProperties;
  actions?: React.CSSProperties;
  title?: React.CSSProperties;
}

interface AccordionProps {
  items: AccordionItem[];
  styles?: AccordionCustomStyles;
  className?: string;
}

export const UIAccordion: React.FC<AccordionProps> = ({ items, styles = {}, className = '' }) => {
  return (
    <div className={`bg-inherit ${className}`} style={styles.root}>
      {items.map(({ id, title, content, defaultExpanded, actions }) => (
        <Accordion key={id} defaultExpanded={defaultExpanded} style={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-content`}
            id={`${id}-header`}
            style={styles.summary}
          >
            <Typography component="span" style={styles.title}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails style={styles.details}>{content}</AccordionDetails>
          {actions && <AccordionActions style={styles.actions}>{actions}</AccordionActions>}
        </Accordion>
      ))}
    </div>
  );
};
