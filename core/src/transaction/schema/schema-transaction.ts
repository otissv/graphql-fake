import transaction from './schemaFields-transaction';
import nested from '../../nested/field-nested';
import currency from '../../currency/schema/schemaFields-currency';

export default `
# Generates a list of mock transactions
type Transaction_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  id_: String
  ${transaction}
  ${currency}
  ${nested}
}`;
