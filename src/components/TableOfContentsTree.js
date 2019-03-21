import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CompanionWindow from '../containers/CompanionWindow';
import ns from '../config/css-ns';

/**
 * TableOfContentsTree
 */
export class TableOfContentsTree extends Component {
  /**
   * generate a single toc section
   * @return
   */
  tocSection(range) {
    const {
      setCanvas,
      toggleRange,
      windowId,
      rangeStatuses,
    } = this.props;

    let open = '';
    const leaf = range.items.length === 0;

    if (rangeStatuses && rangeStatuses[range.id]) {
      open = rangeStatuses && rangeStatuses[range.id].expanded ? 'open' : '';
    }

    return (
      <div className="mirador-toc-item" key={range.id}>
        <Typography
          variant="subtitle2"
          onClick={(e) => {
            if (leaf) {
              setCanvas(windowId, range.getCanvasIds()[0].index);
              return;
            }
            toggleRange(windowId, range.id);
          }}
          className={`mirador-toc-heading ${open} ${leaf ? 'leaf' : ''}`}
        >
          { range.__jsonld.label }
        </Typography>
        {
          !leaf ? (
            <div className={`mirador-toc-section ${open}`}>
              { range.items.map(item => this.tocSection(item)) }
            </div>
          ) : ''
        }
      </div>
    );
  }

  /**
   * render
   * @return
   */
  render() {
    const {
      manifestStructures,
      rangeStatuses,
      windowId,
      setCanvas,
      toggleRange,
      classes,
      t,
    } = this.props;

    return (
      <div className={classes.section}>
        <Typography
          className={classes.label}
          variant="h4"
        >
          { manifestStructures[0] ? manifestStructures[0].__jsonld.label : '' }
        </Typography>
        { manifestStructures[0] ? manifestStructures[0].items.map(item => (
          this.tocSection(item, setCanvas, toggleRange, windowId, rangeStatuses)
        )) : '' }
      </div>
    );
  }
}

TableOfContentsTree.propTypes = {
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  manifestStructures: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  rangeStatuses: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  setCanvas: PropTypes.func.isRequired,
  t: PropTypes.func,
  toggleRange: PropTypes.func.isRequired,
  windowId: PropTypes.string.isRequired,
};

TableOfContentsTree.defaultProps = {
  classes: {},
  manifestStructures: [],
  rangeStatuses: {},
  t: key => key,
};
