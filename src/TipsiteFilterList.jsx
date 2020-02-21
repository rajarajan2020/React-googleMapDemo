import React from 'react';
import TipsiteFilter from './TipsiteFilter'

export default class TipsiteFilterList extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">Waste and recycling facility</div>
        {this.props.filters.map(item =>
          <TipsiteFilter id={item.get('id')}
                  key={item.get('id')}
                  changeFilter={this.props.changeFilter}
                  />
        )}
      </div>
  )}
}
