import message from './schemaFields-message';
import nested from '../../nested/field-nested';


export default `
# Generates a list of mock messages
type Message_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  id_: String
  ${message}
  ${nested}
}`;

