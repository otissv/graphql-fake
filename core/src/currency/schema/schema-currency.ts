import currency from './schemaFields-currency';
import nested from '../../nested/field-nested';


export default `
# Generates a list of mock currencies
type Currency_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  id_: String
  ${currency}
  ${nested}
}`;

