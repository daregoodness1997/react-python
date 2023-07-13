import React from 'react'
import './filtercard.css'
import { Button } from '../button/Button';

interface Props{
    label:string;
    onMeanChange?:(e?:any)=> void
    onMinChange?:(e?:any)=> void
    onMaxChange?:(e?:any)=> void
    onSDChange?:(e?:any)=> void
    onSubmit?:(e?:any)=> void
}

const FilterCard: React.FC<Props> = ({
  label,
  onMeanChange,
  onMinChange,
  onMaxChange,
  onSDChange,
  onSubmit,
}) => {
  return (
    <div className="filter-content">
      <h4>{label}</h4>
      <div>
        <div className="form-control">
          <label>Mean</label>
          <input
            placeholder="Enter a mean value"
            onChange={onMeanChange}
            type="number"
            min="0"
            step="0.1"
          />
        </div>
        <div className="form-control">
          <label>Min</label>
          <input
            placeholder="Enter a min value"
            onChange={onMinChange}
            type="number"
            min="0"
            step="0.1"
          />
        </div>
        <div className="form-control">
          <label>Max</label>
          <input
            placeholder="Enter a max value"
            onChange={onMaxChange}
            type="number"
            min="0"
            step="0.1"
          />
        </div>
        <div className="form-control">
          <label>Standard Devaition</label>
          <input
            placeholder="Enter a standard deviation"
            onChange={onSDChange}
            type="number"
            min="0"
            step="0.1"
          />
        </div>
      </div>
      <div className="filter-footer">
        <Button label="Done" primary={true} size="small" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default FilterCard