import fake from './schemaFields-fake';
import nested from '../../nested/field-nested';


export default `
type Fake_ {
  ${fake}
  ${nested},
}
`;
