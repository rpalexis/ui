import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Blockquote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleBlockquote = () => {
    this.setState({ open: !this.state.open });
  };

  showInnerHtml = content => {
    return { __html: content };
  };

  render() {
    const {
      className,
      children,
      style,
      title,
      toggleable,
      innerHtml,
      light,
      code,
      warning,
      info,
      type,
    } = this.props;
    const blockquoteClass = classNames({
      'wfp--blockquote': true,
      'wfp--blockquote--toggleable': toggleable === true,
      'wfp--blockquote--light': type === 'light' || light,
      'wfp--blockquote--code': type === 'code' || code,
      'wfp--blockquote--warning': type === 'warning' || warning,
      'wfp--blockquote--info': type === 'info' || info,
      'wfp--blockquote--open': this.state.open,
    });

    const blockquoteContentClass = classNames({
      'wfp--blockquote__content': true,
      [`${className}`]: className,
    });

    return (
      <div className={blockquoteClass}>
        {title && (
          <div
            onClick={this.toggleBlockquote}
            className="wfp--blockquote__title">
            {title}
          </div>
        )}
        <div className={blockquoteContentClass} style={style}>
          {children}
          {innerHtml && (
            <div
              role="complementary"
              dangerouslySetInnerHTML={this.showInnerHtml(innerHtml)}
            />
          )}
        </div>
      </div>
    );
  }
}

Blockquote.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Blockquote;
