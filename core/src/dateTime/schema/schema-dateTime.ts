import dateTime from './schemaFields-dateTime';
import nested from '../../nested/field-nested';

export default `
# Generates a list of mock dateTimes
type DateTime_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150'
  id_: String
  ${dateTime}
  ${nested}
}`;
