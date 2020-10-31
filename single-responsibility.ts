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
interface DataStructure {
  name: string
  userName: string
  rank: number
  score: number
}

interface UserType {
  user_id: string
  username: string
  name: string
  score: number
  rank: number
}

class UserBad {
  formatResponse(data: DataStructure) {
    return {
      name: data.name,
      userName: data.userName,
      rank: data.rank,
      score: data.score
    }
  }

  validateUser(user: UserType) {
    if (user) return true
    throw new Error('User does not exist')
  }

  fetchUserFromDatabase(userId: string) {
    return usersDb.find(user => user.user_id === userId)
  }
}

// Single responsibility Classes

class User {
  formatResponse(data: DataStructure) {
    return {
      name: data.name,
      userName: data.userName,
      rank: data.rank,
      score: data.score
    }
  }
}

class ValidateUser {
  validate(user: UserType) {
    if (user) return true
    throw new Error('User does not exist')
  }
}

class UserRepository {
  get(userId: string) {
    return usersDb.find(user => user.user_id === userId)
  }
}
