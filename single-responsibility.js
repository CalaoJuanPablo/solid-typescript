const usersDb = [
  {
    user_id: '1',
    username: 'john.doe',
    name: 'John Doe',
    score: 25,
    rank: 3
  },
  {
    user_id: '2',
    username: 'pep.perez',
    name: 'Pepe Perez',
    score: 23,
    rank: 6
  },
  {
    user_id: '3',
    username: 'fualno.tal',
    name: 'Fulano Tal',
    score: 19,
    rank: 9
  },
  {
    user_id: '4',
    username: 'remp.good',
    name: 'Remp Good',
    score: 13,
    rank: 15
  }
]

// Bad implementation
class User {
  formatResponse(data) {
    return {
      name: data.name,
      userName: data.userName,
      rank: data.rank,
      score: data.score
    }
  }

  validateUser(user) {
    if (user) return true
    throw new Error('User does not exist')
  }

  fetchUserFromDatabase(userId) {
    return usersDb.find(user => user.user_id === userId)
  }
}

// Single responsibility Classes

class User {
  formatResponse(data) {
    return {
      name: data.name,
      userName: data.userName,
      rank: data.rank,
      score: data.score
    }
  }
}

class ValidateUser {
  validate(user) {
    if (user) return true
    throw new Error('User does not exist')
  }
}

class UserRepository {
  get(userId) {
    return usersDb.find(user => user.user_id === userId)
  }
}
