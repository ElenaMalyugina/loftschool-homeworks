import React, { Component } from 'react';
import styles from './Order.module.css';
import Emojis from 'react-emoji-component';
import ingredients from '../../ingredients';
import cx from 'classnames';

class Order extends Component {
  static defaultProps = {
    recipe: []
  };
  state = {};

  findIcon = name => ingredients.find(ing => ing.name === name).icon;

  render() {
    const { recipe, ingredients } = this.props;
    //debugger;
    return (
      <div className={cx('t-pizza', styles.root)}>
        {recipe.map(ingredient => (
          <span
            key={ingredient}
            className={cx(styles.emoji, `t-icon`, `t-icon-${ingredient}`, {
              [styles.activeEmoji]: ingredients.includes(ingredient)
            })}
          >
            <Emojis size={28}>{this.findIcon(ingredient)}</Emojis>
          </span>
        ))}
      </div>
    );
  }
}

export default Order;
