import { useFilterBar } from '../../hooks/useFilterBar';
import { Button } from '../StyledComponents/Button';
import './styles.scss';

const FilterBar = () => {
  const { setDescription, setFrom, setTo, action } = useFilterBar();
  return (
    <section className='FilterBar'>
      <input 
        onChange={(e) => setDescription(e.target.value)} 
        className='FilterBar__input' 
        type="text" 
        placeholder='Search by cases descriptions' />
      <label>From</label>
      <input 
        onChange={(e) => setFrom(e.target.value)} 
        className='FilterBar__date'
        type="date"  />
      <label>To</label>
      <input 
        onChange={(e) => setTo(e.target.value)} 
        className='FilterBar__date' 
        type="date" />
      <Button onClick={action}>Find cases</Button>
    </section>
  )
}

export default FilterBar;
