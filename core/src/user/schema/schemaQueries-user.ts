export default`
  # user takes an optional length parameter as an argument. If length is defined 1 item is returned
  User_ (
    locale: String, 
    roles: [String]
  ): User_
  UserList_ (
    length: Int!, 
    locale: String, 
    roles: [String]
    ) : [User_]
`;

