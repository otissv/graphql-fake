import card from './schemaFields-card';
import nested from '../../nested/field-nested';

export default `
# Generates a list of mock cards
type Card_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150'
  id_: String
  ${card}
  ${nested}
}`;
