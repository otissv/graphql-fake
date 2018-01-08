import image from './schemaField-image';
import nested from '../../nested/field-nested';

export default `
# Generates a list of mock images
type Image_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  id_:            String,
  
  ${image}
  ${nested}
}`;


