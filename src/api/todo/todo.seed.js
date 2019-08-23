import User from '../user/user.model'

export default {
    dependencies: [User],
    seed: ([user]) => [
      {
        title: 'THE LIST OF SHron',
        content: 'adir adir adir adir adir adir adir adir adir ad',
        user:[user._id]
      },
      {
        title: 'mamamamamamammaamammamaaa',
        content: 'LIT LIT LIT LIT LIT LIT LIT LIT LIT LIT LIT LIT LIT LIT LIT LIT adir ',
        user:[user._id]
      }
    ]
  };
  