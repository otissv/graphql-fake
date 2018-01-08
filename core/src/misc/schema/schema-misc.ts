import misc from './schemaFields-misc';
import nested from '../../nested/field-nested';


export default `
# Generates a list of mock misc data
type Misc_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  id_:            String,
  
  ${misc}
  ${nested}
}`;


