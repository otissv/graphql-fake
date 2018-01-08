import numbers from './schemaFields-numbers';
import nested from '../../nested/field-nested';


export default `
# Generates a list of mock numbers
type Numbers_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  id_:            String,
  
  ${numbers}
  ${nested}
}`;
