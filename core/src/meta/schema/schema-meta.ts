import meta from './schemaFields-meta';
import user from '../../user/schema/schemaFields-user';
import nested from '../../nested/field-nested';


export default `
# Generates a list of mock meta data
type CreatedBy_ {
  ${user}
}

type UpdatedBy_ {
  ${user}
}

type Meta_ {
  #=> '2f4dc6ba-bd25-4e66-b369-43a13e0cf150' 
  id_:            String,
  
  ${meta}
  ${nested}
}`;