import internet from './schemaFields-internet';
import nested from '../../nested/field-nested';


export default `
# Generates a list of mock internets
type Internet_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  id_:            String,
  
  ${internet}
  ${nested}
}`;


