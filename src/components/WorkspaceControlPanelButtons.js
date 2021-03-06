import React, { Component } from 'react';
import ns from '../config/css-ns';
import WorkspaceFullScreenButton from '../containers/WorkspaceFullScreenButton';
import WorkspaceAddButton from '../containers/WorkspaceAddButton';
import WorkspaceMenuButton from '../containers/WorkspaceMenuButton';

/** Renders plugins */
const PluginHook = (props) => {
  const { PluginComponents } = props; // eslint-disable-line react/prop-types
  return PluginComponents ? (
    PluginComponents.map((PluginComponent, index) => (
      <PluginComponent {...props} key={index} /> // eslint-disable-line react/no-array-index-key
    ))
  ) : null;
};

/**
 *
 */
export class WorkspaceControlPanelButtons extends Component {
  /**
   * render
   *
   * @return {type}  description
   */
  render() {
    return (
      <div className={ns('workspace-control-panel-buttons')}>
        <WorkspaceAddButton />
        <WorkspaceMenuButton />
        <WorkspaceFullScreenButton />
        <PluginHook {...this.props} />
      </div>
    );
  }
}
