export default `
  # meta takes an optional length parameter as an argument. If length is defined 1 item is returned
  Meta_ (locale: String, 
    roles: [String]
  ) : Meta_
  
  MetaList_ (length: Int!, 
    locale: String,
    roles: [String]
  ): [Meta_]
`;

